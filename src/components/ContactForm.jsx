import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(
          data.message ||
            'Failed to send message. Please verify your email settings or try again later.'
        );
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage(
        err?.message ||
          'A network error occurred while sending your message. Please try again.'
      );
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setStatus('idle');
    setErrorMessage('');
  };

  return (
    <div className="w-full space-y-6">
      {status === 'success' ? (
        <div className="rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center space-y-3">
          <div className="flex justify-center">
            <CheckCircle2 className="h-12 w-12 text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold text-foreground">
            Message Sent Successfully!
          </h3>
          <p className="text-sm text-foreground/80 max-w-md mx-auto">
            Thank you for reaching out! Your message has been sent directly to{' '}
            <strong className="text-emerald-400">pardhirahul2004@gmail.com</strong>. I will get back to you shortly.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Send Another Message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-foreground"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={status === 'loading'}
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full rounded-lg border-2 border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors disabled:opacity-60"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-foreground"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={status === 'loading'}
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@example.com"
                className="w-full rounded-lg border-2 border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors disabled:opacity-60"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-foreground"
            >
              Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              disabled={status === 'loading'}
              value={formData.subject}
              onChange={handleChange}
              placeholder="What is this regarding?"
              className="w-full rounded-lg border-2 border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors disabled:opacity-60"
            />
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={status === 'loading'}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full resize-y rounded-lg border-2 border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-primary focus:outline-none transition-colors disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-main text-main-foreground border-2 border-border px-6 py-2.5 text-sm font-bold shadow-xs hover:opacity-90 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
