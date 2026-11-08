import React from 'react';
import {
  ArrowLeft,
  Award,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Calendar,
  DollarSign,
  ShieldCheck,
  Layers,
  Sparkles,
  Users,
  AlertCircle,
  Check,
} from 'lucide-react';
import { Review } from '../types';
import { SEOHead } from '../components/SEOHead';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { NewsletterSection } from '../components/NewsletterSection';

interface ReviewDetailPageProps {
  review: Review;
  onNavigate: (path: string) => void;
}

export function ReviewDetailPage({ review, onNavigate }: ReviewDetailPageProps) {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <SEOHead
        title={`${review.name} Review (${review.lastUpdated}) – Pricing, Features & Verdict`}
        description={`${review.description.slice(0, 155)}...`}
        canonicalPath={`/reviews/${review.slug}`}
        type="article"
        publishedTime={review.lastUpdated}
        modifiedTime={review.lastUpdated}
      />

      {/* Navigation Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <button
          onClick={() => onNavigate('/reviews')}
          className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Reviews</span>
        </button>
        <span>/</span>
        <button
          onClick={() => onNavigate(`/category/${review.categorySlug}`)}
          className="hover:text-slate-900 transition-colors"
        >
          {review.category}
        </button>
        <span>/</span>
        <span className="text-slate-800 font-semibold">{review.name}</span>
      </div>

      {/* Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                {review.category} Review
              </span>
              <span className="text-slate-300">&bull;</span>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> Last Verified: {review.lastUpdated}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {review.name}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {review.tagline}
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-start sm:items-end gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>{review.badge}</span>
            </span>
          </div>
        </div>

        {/* Scorecard quick stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl text-xs border border-slate-200/70">
          <div>
            <span className="text-slate-400 block font-medium">Starting Price</span>
            <span className="font-bold text-slate-900 text-sm">{review.pricing.startingPrice}</span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Free Plan</span>
            <span className={`font-bold text-sm ${review.pricing.freePlanAvailable ? 'text-emerald-700' : 'text-slate-600'}`}>
              {review.pricing.freePlanAvailable ? 'Permanent Free Tier' : 'None (Trial Only)'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Free Trial</span>
            <span className="font-bold text-slate-900 text-sm">
              {review.pricing.freeTrialAvailable ? `${review.pricing.freeTrialDays || 14}-Day Trial` : 'Not Offered'}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-medium">Pricing Status</span>
            <span className="font-semibold text-emerald-800 flex items-center gap-1 mt-0.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Officially Verified
            </span>
          </div>
        </div>

        {/* CTA Button with Immediate Disclosure */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-slate-100">
          <a
            href={review.officialWebsiteUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20"
          >
            <span>Visit {review.name} Official Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <div className="text-xs text-slate-500">
            Link opens vendor site in new tab &bull; Sponsored link policy applies
          </div>
        </div>
      </div>

      <AffiliateNotice />

      {/* Main Review Body */}
      <div className="space-y-10 text-slate-800">
        {/* Overview & Audience */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Platform Overview & Core Purpose</h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {review.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Primary Use Case
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                {review.primaryUseCase}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Target Audience
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                {review.targetAudience}
              </p>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Key Features Analyzed</h2>
          <div className="grid grid-cols-1 gap-3">
            {review.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700">{feat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Pros and Cons Breakdown */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-emerald-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-lg">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h3>What We Like (Pros)</h3>
            </div>
            <ul className="space-y-3">
              {review.pros.map((pro, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-lg">
              <XCircle className="w-5 h-5 text-amber-600" />
              <h3>Limitations & Drawbacks (Cons)</h3>
            </div>
            <ul className="space-y-3">
              {review.cons.map((con, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Verified Pricing & Plans */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Verified Pricing & Plan Tiers</h2>
              <p className="text-xs text-slate-500 mt-1">
                Pricing verified directly from official vendor documentation as of{' '}
                <strong className="text-slate-700">{review.pricing.lastVerifiedDate}</strong>.
              </p>
            </div>
            <a
              href={review.pricing.officialPricingUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
            >
              <span>View Official Pricing Page</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {review.pricing.pricingNote && (
            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-3.5 text-xs text-indigo-900">
              <strong>Pricing Notice:</strong> {review.pricing.pricingNote}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {review.pricing.plans.map((plan, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-xl border flex flex-col justify-between ${
                  plan.isPopular
                    ? 'border-indigo-500 bg-indigo-50/30 ring-1 ring-indigo-500'
                    : 'border-slate-200 bg-slate-50/50'
                }`}
              >
                <div>
                  {plan.isPopular && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-indigo-600 text-white rounded-md mb-2 inline-block">
                      Most Popular
                    </span>
                  )}
                  <h4 className="font-bold text-base text-slate-900">{plan.name}</h4>
                  <div className="mt-2 mb-1">
                    <span className="text-2xl font-black text-slate-900">{plan.price}</span>
                  </div>
                  <span className="text-xs text-slate-500 block mb-4">{plan.billingPeriod}</span>

                  <ul className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-200/80">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3">
                  <a
                    href={review.officialWebsiteUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="w-full text-center block py-2 px-3 rounded-lg text-xs font-semibold bg-white border border-slate-300 text-slate-800 hover:bg-slate-100 transition-colors"
                  >
                    Select Plan on Official Site
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Who Should & Who Shouldn't Buy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Who We Recommend This For</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {review.whoWeRecommendFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-amber-600" />
              <span>Who We Do NOT Recommend This For</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
              {review.whoWeDoNotRecommendFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold">&bull;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Alternative Competitors */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Alternative Software to Consider</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            If {review.name} does not align with your specific workflow requirements, consider these tested alternatives:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {review.alternatives.map((alt, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div className="font-bold text-sm text-slate-900">{alt.name}</div>
                <p className="text-xs text-slate-600 leading-relaxed">{alt.differenceNote}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Verdict & Methodology Statement */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Final Editorial Verdict & Methodology</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
            Our Final Assessment on {review.name}
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {review.summaryVerdict}
          </p>

          <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="font-semibold text-slate-300">Review Methodology & Source Verification:</div>
            <p className="leading-relaxed">{review.methodologyNote}</p>
            <p className="text-[11px] text-slate-500">
              khmedia does not invent arbitrary numerical rating scores (such as 4.9/5) without verified objective
              rubrics. Instead, we provide descriptive badges ({review.badge}) backed by transparent feature and pricing
              audits.
            </p>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center py-6">
          <a
            href={review.officialWebsiteUrl}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base transition-all shadow-lg shadow-indigo-600/25"
          >
            <span>Explore {review.name} Plans on Official Site</span>
            <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-xs text-slate-500 mt-2">
            Direct official link &bull; Pricing accurate as of {review.lastUpdated}
          </p>
        </div>

        {/* Newsletter */}
        <NewsletterSection
          heading="Want more objective software breakdowns?"
          subheading="Subscribe to our bi-weekly dispatch of practical SaaS reviews and automation playbooks."
        />
      </div>
    </div>
  );
}
