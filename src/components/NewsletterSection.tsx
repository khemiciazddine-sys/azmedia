import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Shield, ArrowRight, Loader2 } from 'lucide-react';

interface NewsletterSectionProps {
  heading?: string;
  subheading?: string;
  className?: string;
}

export function NewsletterSection({
  heading = 'Stay Ahead of Practical AI & SaaS Developments',
  subheading = 'Join entrepreneurs and freelancers receiving our bi-weekly breakdown of vetted software, automation playbooks, and workflow tutorials. Zero spam, unsubscribe anytime.',
  className = '',
}: NewsletterSectionProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your first name.');
      return;
    }

    if (!email.trim() || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!consent) {
      setStatus('error');
      setErrorMessage('Please check the consent box to confirm your subscription permission.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Netlify Form Submission
      const formData = new URLSearchParams();
      formData.append('form-name', 'newsletter');
      formData.append('firstName', firstName.trim());
      formData.append('email', email.trim());
      formData.append('consent', consent ? 'yes' : 'no');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });

      if (response.ok || response.status === 200 || response.type === 'opaque') {
        setStatus('success');
      } else {
        // If server responded with error code
        setStatus('error');
        setErrorMessage(
          'We were unable to process your subscription at this moment. You can also reach us directly at contact@azmediabot.online.'
        );
      }
    } catch {
      // Graceful offline or environment handling
      setStatus('error');
      setErrorMessage(
        'Subscription service is currently syncing. Please try again shortly or contact us at contact@azmediabot.online.'
      );
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-6 sm:p-10 border border-slate-700/60 shadow-xl ${className}`}
    >
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3">
          <Mail className="w-4 h-4" />
          <span>Bi-Weekly Practical Briefing</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
          {heading}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
          {subheading}
        </p>

        {status === 'success' ? (
          <div className="bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-6 text-center text-emerald-200">
            <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-emerald-400" />
            <h4 className="text-lg font-bold text-white mb-1">Thank you, {firstName}!</h4>
            <p className="text-sm text-emerald-300">
              Your subscription request has been received. Please check your inbox at <span className="font-semibold text-white">{email}</span> for our welcome briefing.
            </p>
            <p className="text-xs text-emerald-400/80 mt-3">
              Remember: Every email contains a 1-click unsubscribe link in compliance with US CAN-SPAM regulations.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="newsletter-name" className="block text-xs font-medium text-slate-300 mb-1">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="newsletter-name"
                  type="text"
                  placeholder="e.g., Alex"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="newsletter-email" className="block text-xs font-medium text-slate-300 mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="alex@yourbusiness.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Explicit CAN-SPAM Consent Checkbox */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="newsletter-consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-slate-600 bg-slate-800 text-indigo-600 focus:ring-indigo-500 focus:ring-offset-slate-900 cursor-pointer"
              />
              <label htmlFor="newsletter-consent" className="text-xs text-slate-300 leading-normal cursor-pointer">
                I agree to receive the free guide, educational emails, and occasional product recommendations. I
                understand that I can unsubscribe at any time.
              </label>
            </div>

            {status === 'error' && errorMessage && (
              <div className="flex items-center gap-2 text-xs text-red-300 bg-red-950/70 border border-red-800/60 rounded-lg p-3">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-indigo-500/25 disabled:opacity-60 cursor-pointer"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe to Free Guides</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 gap-2">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span>Strict permission-based email marketing. We never sell or share subscriber data.</span>
          </div>
          <span>CAN-SPAM & Law 18-07 Compliant</span>
        </div>
      </div>
    </div>
  );
}
