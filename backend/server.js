import express from 'express';
import { rateLimit } from 'express-rate-limit';
import nodemailer from 'nodemailer';

const app = express();
const port = Number(process.env.PORT) || 3001;
const frontendOrigin = process.env.FRONTEND_URL
  ? new URL(process.env.FRONTEND_URL).origin
  : null;

app.disable('x-powered-by');
app.use((req, res, next) => {
  const requestOrigin = req.get('Origin');

  if (requestOrigin && requestOrigin !== frontendOrigin) {
    return res.status(403).json({ success: false, message: 'This website is not allowed to submit the form.' });
  }

  if (requestOrigin && frontendOrigin) {
    res.setHeader('Access-Control-Allow-Origin', frontendOrigin);
    res.setHeader('Vary', 'Origin');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

app.use(express.json({ limit: '10kb' }));
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-8',
  legacyHeaders: false,
  message: { success: false, message: 'Too many messages were sent. Please try again in 15 minutes.' },
});

const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
}[char]));

app.post('/api/contact', contactLimiter, async (req, res) => {
  const values = ['name', 'email', 'subject', 'message'];
  const fields = Object.fromEntries(values.map((field) => [
    field,
    typeof req.body?.[field] === 'string' ? req.body[field].trim() : '',
  ]));

  if (values.some((field) => !fields[field])) {
    return res.status(400).json({ success: false, message: 'Please complete all required fields.' });
  }

  if (fields.name.length > 120 || fields.email.length > 254 || fields.subject.length > 200 || fields.message.length > 10000) {
    return res.status(400).json({ success: false, message: 'One or more fields exceed the allowed length.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_RECEIVER_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_RECEIVER_EMAIL) {
    console.error('Contact email service is missing required SMTP environment variables.');
    return res.status(503).json({ success: false, message: 'The email service is not configured yet. Please try again later.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    const safe = Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)]));
    await transporter.sendMail({
      from: `Portfolio Contact <${SMTP_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      replyTo: fields.email,
      subject: `[Portfolio Contact] ${fields.subject}`,
      text: `Name: ${fields.name}\nEmail: ${fields.email}\nSubject: ${fields.subject}\n\n${fields.message}`,
      html: `<h2>New portfolio message</h2><p><b>Name:</b> ${safe.name}</p><p><b>Email:</b> ${safe.email}</p><p><b>Subject:</b> ${safe.subject}</p><p>${safe.message.replace(/\n/g, '<br>')}</p>`,
    });

    return res.json({ success: true, message: 'Your message has been sent successfully.' });
  } catch (error) {
    console.error('Contact email delivery failed:', error?.code || error?.message || 'Unknown SMTP error');
    return res.status(502).json({ success: false, message: 'We could not send your message right now. Please try again later or email directly.' });
  }
});

app.use((error, _req, res, _next) => {
  if (error instanceof SyntaxError && 'body' in error) {
    return res.status(400).json({ success: false, message: 'Request body must be valid JSON.' });
  }
  console.error('Unhandled contact API error:', error?.message || error);
  return res.status(500).json({ success: false, message: 'The contact service encountered an error. Please try again later.' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Contact API listening on port ${port}`);
});
