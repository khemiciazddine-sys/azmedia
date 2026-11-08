import React from 'react';
import { Shield, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <SEOHead
        title="Terms of Service – khmedia"
        description="Terms and conditions for using khmedia (azmediabot.online). Editorial disclaimer, intellectual property, and limitations of liability."
        canonicalPath="/terms"
      />

      {/* Header */}
      <div className="space-y-4">
        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
          User Agreement
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Terms of Service
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Please review these Terms of Service carefully before utilizing the information, guides, and software reviews
          published on <strong>khmedia</strong> at <code>https://azmediabot.online</code>.
        </p>
        <p className="text-xs text-slate-400">Last Revised: November 8, 2026</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed shadow-xs">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Educational & Informational Purpose Only</h2>
          <p>
            The content provided on khmedia—including software reviews, comparison tables, and automation playbooks—is
            created solely for general educational and informational purposes. While we strive to maintain accurate
            pricing and feature data, software vendors update plans and terms frequently. Readers are advised to verify
            final terms directly on official vendor websites before purchasing.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. External Third-Party Links & Affiliate Partners</h2>
          <p>
            Our website contains outbound hyperlinks to third-party digital products and service providers. khmedia does
            not operate, control, or assume responsibility for the availability, billing, data privacy practices, or customer
            support of any third-party software provider. Clicking outbound links is done at your own discretion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Intellectual Property Rights</h2>
          <p>
            All original editorial text, comparison tables, article structures, and branding elements on this website are
            the intellectual property of <strong>khmedia</strong>. You may not republish, scrape, or redistribute full
            articles without express written permission. Product names and logos mentioned belong to their respective
            trademark holders.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Disclaimer of Warranties & Limitation of Liability</h2>
          <p>
            khmedia and its publisher provide this website on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
            We make no warranties, express or implied, regarding software performance, uptime, or suitability for any
            particular business purpose. In no event shall khmedia be liable for any direct, indirect, incidental, or
            consequential damages arising from software selection or vendor service outages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
          <p>
            For questions regarding these Terms, contact our editorial desk at{' '}
            <a href="mailto:contact@azmediabot.online" className="text-indigo-600 underline font-mono">
              contact@azmediabot.online
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
