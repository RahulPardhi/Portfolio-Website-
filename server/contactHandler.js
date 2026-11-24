import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export async function handleContactRequest(req, res) {
    // Enable CORS for safety
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET') {
        const rawPass =
            process.env.SMTP_PASS ||
            process.env.GMAIL_PASS ||
            process.env.GMAIL_APP_PASSWORD ||
            '';
        const isConfigured = Boolean(rawPass.replace(/\s+/g, ''));
        res.statusCode = 200;
        return res.end(
            JSON.stringify({
                status: 'online',
                service: 'Gmail SMTP via Nodemailer',
                configured: isConfigured,
                receiver:
                    process.env.CONTACT_RECEIVER_EMAIL ||
                    'pardhirahul2004@gmail.com',
            })
        );
    }

    if (req.method !== 'POST') {
        res.statusCode = 405;
        return res.end(
            JSON.stringify({
                success: false,
                message: 'Method not allowed. Use POST.',
            })
        );
    }

    // Read request body safely
    let body;
    try {
        if (req.body && typeof req.body === 'object') {
            body = req.body;
        } else {
            body = await new Promise((resolve, reject) => {
                let data = '';
                req.on('data', (chunk) => {
                    data += chunk;
                });
                req.on('end', () => {
                    if (!data) return resolve({});
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(new Error('Invalid JSON'));
                    }
                });
                req.on('error', reject);
            });
        }
    } catch {
        res.statusCode = 400;
        return res.end(
            JSON.stringify({
                success: false,
                message: 'Invalid JSON request body.',
            })
        );
    }

    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
        res.statusCode = 400;
        return res.end(
            JSON.stringify({
                success: false,
                message:
                    'Please fill in all required fields (Name, Email, Subject, Message).',
            })
        );
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(String(email).trim())) {
        res.statusCode = 400;
        return res.end(
            JSON.stringify({
                success: false,
                message: 'Please provide a valid email address.',
            })
        );
    }

    const smtpUser = (
        process.env.SMTP_USER ||
        process.env.GMAIL_USER ||
        process.env.EMAIL_USER ||
        'pardhirahul2004@gmail.com'
    ).trim();

    const rawPass =
        process.env.SMTP_PASS ||
        process.env.GMAIL_PASS ||
        process.env.GMAIL_APP_PASSWORD ||
        process.env.EMAIL_PASS ||
        '';

    const smtpPass = rawPass.replace(/\s+/g, '');
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpSecure =
        process.env.SMTP_SECURE !== undefined
            ? process.env.SMTP_SECURE === 'true'
            : smtpPort === 465;

    const receiverEmail = (
        process.env.CONTACT_RECEIVER_EMAIL ||
        process.env.RECEIVER_EMAIL ||
        'pardhirahul2004@gmail.com'
    ).trim();

    if (!smtpPass) {
        console.error('SMTP configuration error: SMTP_PASS not set in .env');
        res.statusCode = 500;
        return res.end(
            JSON.stringify({
                success: false,
                message:
                    'Email service not configured. Please set SMTP_PASS in the .env file.',
            })
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const sanitizedName = String(name).trim();
        const sanitizedEmail = String(email).trim();
        const sanitizedSubject = String(subject).trim();
        const sanitizedMessage = String(message).trim();

        const mailOptions = {
            from: `"${sanitizedName}" <${smtpUser}>`,
            replyTo: `"${sanitizedName}" <${sanitizedEmail}>`,
            to: receiverEmail,
            subject: `[Portfolio Contact] ${sanitizedSubject} - from ${sanitizedName}`,
            text: `You received a new message from your portfolio contact form:\n\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\nSubject: ${sanitizedSubject}\n\nMessage:\n${sanitizedMessage}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <style>
                        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
                        .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0; }
                        .header { background: #0f172a; color: #ffffff; padding: 24px 28px; border-bottom: 3px solid #38bdf8; }
                        .header h2 { margin: 0; font-size: 20px; font-weight: 700; color: #f8fafc; }
                        .header p { margin: 4px 0 0 0; font-size: 13px; color: #94a3b8; }
                        .content { padding: 28px; }
                        .meta-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
                        .meta-table td { padding: 10px 12px; font-size: 14px; border-bottom: 1px solid #f1f5f9; }
                        .meta-label { font-weight: 600; color: #64748b; width: 90px; }
                        .meta-value { color: #0f172a; font-weight: 500; }
                        .meta-value a { color: #0284c7; text-decoration: none; }
                        .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid #38bdf8; border-radius: 6px; padding: 18px; margin-top: 8px; }
                        .message-title { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; margin-bottom: 8px; }
                        .message-text { white-space: pre-wrap; font-size: 15px; color: #1e293b; margin: 0; line-height: 1.6; }
                        .footer { padding: 16px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; text-align: center; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h2>New Portfolio Inquiry</h2>
                            <p>Received from the contact form on your portfolio website</p>
                        </div>
                        <div class="content">
                            <table class="meta-table">
                                <tr>
                                    <td class="meta-label">Sender:</td>
                                    <td class="meta-value">${sanitizedName}</td>
                                </tr>
                                <tr>
                                    <td class="meta-label">Email:</td>
                                    <td class="meta-value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></td>
                                </tr>
                                <tr>
                                    <td class="meta-label">Subject:</td>
                                    <td class="meta-value">${sanitizedSubject}</td>
                                </tr>
                            </table>

                            <div class="message-box">
                                <div class="message-title">Message Body</div>
                                <p class="message-text">${sanitizedMessage}</p>
                            </div>
                        </div>
                        <div class="footer">
                            Tip: You can reply directly to this email to respond to ${sanitizedEmail}.
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully. Message ID:', info.messageId);

        res.statusCode = 200;
        return res.end(
            JSON.stringify({
                success: true,
                message: 'Thank you! Your message has been sent successfully.',
            })
        );
    } catch (err) {
        console.error('Nodemailer sendMail failed:', err);
        res.statusCode = 500;
        return res.end(
            JSON.stringify({
                success: false,
                message:
                    err?.message ||
                    'Failed to send email. Please check your SMTP settings.',
            })
        );
    }
}
