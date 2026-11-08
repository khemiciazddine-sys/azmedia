import React from 'react';
import { ShieldCheck, Info, CheckCircle2, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface AffiliateDisclosurePageProps {
  onNavigate: (path: string) => void;
}

export function AffiliateDisclosurePage({ onNavigate }: AffiliateDisclosurePageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <SEOHead
        title="Affiliate Disclosure & Transparency Statement – khmedia"
        description="Read the official khmedia affiliate disclosure. FTC-compliant guidelines on affiliate commissions, sponsored links, and independent editorial reviews."
        canonicalPath="/affiliate-disclosure"
      />

      {/* Header */}
      <div className="space-y-4">
        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
          Transparency & Legal Compliance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Affiliate Disclosure
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          In compliance with the United States Federal Trade Commission (FTC) guidelines and international advertising
          standards, this page details how khmedia earns revenue and handles commercial links.
        </p>
      </div>

      {/* Mandatory Official Disclosure Statement Box */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-md border border-slate-800">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <span>Official Mandatory FTC Disclosure</span>
        </div>
        <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium italic border-l-4 border-indigo-500 pl-4 my-3">
          &ldquo;Some links on this website may be affiliate links. This means we may earn a commission if you purchase
          through certain links, at no additional cost to you. Our editorial opinions are independent, and we aim to
          provide useful and transparent information to help readers make informed decisions.&rdquo;
        </blockquote>
        <p className="text-xs text-slate-400">
          Last updated and verified: November 8, 2026 &bull; Published at https://azmediabot.online
        </p>
      </div>

      {/* Detailed Policy Sections */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed shadow-xs">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. How Affiliate Relationships Work</h2>
          <p>
            When you click a link on <strong>khmedia</strong> (hosted on <code>azmediabot.online</code>) that directs you to
            a software vendor&rsquo;s official website (such as Notion, MailerLite, HubSpot, Make, or ClickUp), a unique
            tracking identifier may be attached to the URL. If you choose to sign up for a trial or purchase a paid plan,
            the software vendor may pay us a referral commission.
          </p>
          <p>
            <strong>This commission is paid entirely by the vendor. It never increases the price you pay.</strong> In many
            instances, our partnership agreements enable us to share exclusive promotional pricing, extended trial
            windows, or starter discounts directly with our readers.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Strict Editorial Independence Guarantee</h2>
          <p>
            Our core mission is to serve you—the reader, freelancer, and business owner. Our editorial team selects which
            tools to review and compare based on market relevance and practical utility, not on commission rates.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pl-2">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>We do not accept payments to write artificially positive software reviews.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>We actively highlight drawbacks, limitations, and pricing traps for every tool we evaluate.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>If a software platform is inferior or overpriced, we explicitly state so and recommend competitors.</span>
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Technical Link Tagging & Search Engine Compliance</h2>
          <p>
            In strict compliance with Google Webmaster Guidelines and standard digital publishing ethics, all commercial
            affiliate outbound hyperlinks on this website are coded with the attributes:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono text-xs text-indigo-900">
            rel=&quot;sponsored nofollow noopener noreferrer&quot;
          </div>
          <p className="text-xs text-slate-500">
            This informs search engines of the commercial nature of the link and prevents PageRank manipulation, ensuring
            both our site and our partner vendors maintain healthy SEO compliance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Current Partner Programs Status</h2>
          <p>
            During our current review phase with affiliate networks including <strong>PartnerStack</strong> and{' '}
            <strong>Impact.com</strong>, links on the website direct users to ordinary, non-commissioned official vendor
            homepages. Upon official network approval, standard tracked affiliate links adhering to this disclosure will be
            activated.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Questions & Feedback</h2>
          <p>
            If you have questions regarding our affiliate relationships, or notice a pricing tier that requires updating,
            please contact our editorial desk directly at{' '}
            <a href="mailto:contact@azmediabot.online" className="text-indigo-600 underline font-semibold">
              contact@azmediabot.online
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
