import React from 'react';
import { ShieldCheck, Lock, Mail, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <SEOHead
        title="Privacy Policy – khmedia"
        description="Official Privacy Policy of khmedia (azmediabot.online). Details on data collection, CAN-SPAM email compliance, Brevo email processing, and Algerian Law 18-07."
        canonicalPath="/privacy-policy"
      />

      {/* Header */}
      <div className="space-y-4">
        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
          Legal & Data Governance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          This Privacy Policy explains how <strong>khmedia</strong> (accessible via <code>https://azmediabot.online</code>)
          collects, processes, and protects your personal information when you browse our guides, subscribe to our
          newsletter, or submit an inquiry.
        </p>
        <p className="text-xs text-slate-400">
          Effective Date: November 8, 2026 &bull; Published by khmedia Editorial Desk
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed shadow-xs">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            khmedia operates under a data minimization principle. We only collect personal information that you
            voluntarily and explicitly provide to us:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">&bull;</span>
              <span>
                <strong>Newsletter Subscription:</strong> When you subscribe to our email briefing, we collect your{' '}
                <em>First Name</em>, <em>Email Address</em>, and your affirmative consent confirmation timestamp.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">&bull;</span>
              <span>
                <strong>Contact Inquiries:</strong> When you submit a message through our Contact page, we collect your{' '}
                <em>Full Name</em>, <em>Email Address</em>, <em>Subject</em>, and <em>Message Content</em> to respond to
                your request.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">&bull;</span>
              <span>
                <strong>Technical Server Logs:</strong> Standard web server logs may temporarily record anonymous technical
                data such as IP address, browser type, referring URL, and timestamp to monitor system health and security.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Analytics, Cookies & Tracking Disclosures</h2>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs sm:text-sm text-slate-700 space-y-2">
            <div className="font-bold text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Honest Tracking Transparency</span>
            </div>
            <p>
              We do not believe in hidden trackers. At this time, khmedia <strong>does not load Google Analytics, Meta
              Pixel, or invasive third-party cross-site behavioral tracking scripts</strong> on the client browser.
            </p>
            <p>
              If commercial analytics or advertising pixels are integrated in the future to measure ad performance, this
              policy will be updated promptly, and explicit cookie consent mechanisms will be implemented.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Third-Party Data Processors</h2>
          <p>We work with trusted infrastructure providers who adhere to strict data security standards:</p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-2">
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">&bull;</span>
              <span>
                <strong>Brevo (formerly Sendinblue):</strong> Used as our email delivery platform. Brevo securely manages
                subscriber lists and provides cryptographic unsubscribe handling.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-600 font-bold">&bull;</span>
              <span>
                <strong>Netlify Hosting:</strong> Provides secure static cloud hosting, SSL/TLS encryption, and initial
                form payload routing.
              </span>
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            4. US CAN-SPAM Compliance & Unsubscribe Rights
          </h2>
          <p>
            In accordance with the <strong>United States CAN-SPAM Act</strong>:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>We never use deceptive email subject lines or misleading sender information.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Every commercial email includes a visible, automated 1-click unsubscribe link that takes effect immediately.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                A valid physical business mailing address is included in every marketing communication:
                <br />
                <span className="text-slate-700 italic">
                  khmedia Editorial Desk, C/O Registered Business Mailbox, Algiers, Algeria (Postal Code: 16000).
                </span>
              </span>
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">
            5. Algerian Personal Data Protection (Law 18-07)
          </h2>
          <p>
            As a publisher based in Algeria, we adhere to the statutory principles of <strong>Law No. 18-07</strong> on the
            protection of individuals in the processing of personal data:
          </p>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 pl-2">
            <li>&bull; Right to be informed about how data is processed</li>
            <li>&bull; Right of access to any personal information stored</li>
            <li>&bull; Right to rectification of inaccurate information</li>
            <li>&bull; Right to complete erasure (&ldquo;Right to be forgotten&rdquo;) upon request</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">6. How to Request Data Erasure or Contact Us</h2>
          <p>
            To inspect, correct, or delete any personal details held by khmedia, simply email our designated privacy
            desk:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="font-semibold text-slate-900">Editorial & Privacy Contact:</div>
            <a href="mailto:contact@azmediabot.online" className="text-indigo-600 underline font-mono text-xs sm:text-sm">
              contact@azmediabot.online
            </a>
            <p className="text-xs text-slate-500 mt-1">We respond to all privacy requests within 48 business hours.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
