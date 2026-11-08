import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Clock, Loader2, Shield } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botField: '',
    consent: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot trap check
    if (formData.botField) {
      // Silently stop spambots
      setStatus('error');
      setErrorMessage('Spam detected. Submission blocked.');
      return;
    }

    // Validation
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid business email address.');
      return;
    }

    if (!formData.subject.trim()) {
      setStatus('error');
      setErrorMessage('Please provide an inquiry subject.');
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      setStatus('error');
      setErrorMessage('Please enter a descriptive message (at least 15 characters).');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please confirm that you agree to the privacy policy regarding message handling.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Netlify Form Submission
      const payload = new URLSearchParams();
      payload.append('form-name', 'contact');
      payload.append('name', formData.name.trim());
      payload.append('email', formData.email.trim());
      payload.append('subject', formData.subject.trim());
      payload.append('message', formData.message.trim());
      payload.append('consent', formData.consent ? 'yes' : 'no');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      // Strict verification: only display success if the server actually acknowledged
      if (response.ok || response.status === 200 || response.type === 'opaque') {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(
          'Our contact endpoint is currently unavailable. Please send your message directly via email to contact@azmediabot.online.'
        );
      }
    } catch {
      setStatus('error');
      setErrorMessage(
        'Network error preventing automatic form dispatch. Please email our editorial desk directly at contact@azmediabot.online.'
      );
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Details Card */}
      <div className="lg:col-span-1 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">
            Direct Communication
          </span>
          <h3 className="text-xl font-bold mt-1 text-white">Editorial & Partner Desk</h3>
          <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
            Have a question about a software review, an error in verified pricing, or an inquiry regarding affiliate
            partnership programs? Reach out directly.
          </p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-200">Email Address</div>
              <a
                href="mailto:contact@azmediabot.online"
                className="text-indigo-300 hover:text-white underline underline-offset-2 break-all"
              >
                contact@azmediabot.online
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-200">Response Window</div>
              <p className="text-slate-300">Within 24 to 48 business hours (Mon–Fri)</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-slate-200">Publisher Location</div>
              <p className="text-slate-300">Algiers, Algeria &bull; Primary Audience: United States</p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center gap-1.5 font-semibold text-slate-300">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>Anti-Spam & Data Privacy</span>
          </div>
          <p className="leading-relaxed">
            We respect your privacy. Message details are used solely to reply to your inquiry and are never shared with
            third-party marketers.
          </p>
        </div>
      </div>

      {/* Form Submission Area */}
      <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        {status === 'success' ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Message Delivered Successfully!</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-800">{formData.name}</strong>. Your message regarding{' '}
              <span className="italic text-slate-700">&ldquo;{formData.subject}&rdquo;</span> has been received by our
              editorial desk. We will respond to <strong className="text-slate-800">{formData.email}</strong> within
              24–48 business hours.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setStatus('idle');
                  setFormData({ name: '', email: '', subject: '', message: '', botField: '', consent: false });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Send Another Inquiry
              </button>
            </div>
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Hidden field for Netlify Form identification */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot field - invisible to human users */}
            <p className="hidden">
              <label>
                Do not fill this out if you are human:{' '}
                <input
                  name="botField"
                  value={formData.botField}
                  onChange={handleChange}
                />
              </label>
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g., Sarah Jenkins"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-semibold text-slate-700 mb-1">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                placeholder="e.g., Inquiry regarding CRM review / Affiliate collaboration"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Please describe your question, feedback on a review, or partnership proposal..."
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-y"
              ></textarea>
            </div>

            {/* Mandatory Consent Checkbox */}
            <div className="flex items-start gap-2.5 pt-1">
              <input
                id="contact-consent"
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
              />
              <label htmlFor="contact-consent" className="text-xs text-slate-600 leading-normal cursor-pointer">
                I understand that the information provided will be used exclusively to respond to my inquiry in
                accordance with the <span className="text-indigo-600 underline">Privacy Policy</span>.
              </label>
            </div>

            {status === 'error' && errorMessage && (
              <div className="flex items-start gap-2.5 text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg p-3.5">
                <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <div className="font-semibold">Submission Issue</div>
                  <div>{errorMessage}</div>
                </div>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-md shadow-indigo-500/20 disabled:opacity-60 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Editorial Desk</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
