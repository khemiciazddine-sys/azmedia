import React from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Layers,
  Mail,
  Users,
  Workflow,
  ExternalLink,
  BookOpen,
  Award,
} from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { NewsletterSection } from '../components/NewsletterSection';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { SEOHead } from '../components/SEOHead';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export function HomePage({ onNavigate, onOpenSearch }: HomePageProps) {
  const featuredReviews = REVIEWS.slice(0, 4);
  const featuredArticles = ARTICLES.slice(0, 4);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <SEOHead
        title="khmedia – Discover the Best AI & SaaS Tools for Smarter Business Growth"
        description="Independent guides, practical reviews, and comparisons of AI and SaaS software for freelancers, entrepreneurs, and small businesses."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-16 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Publisher Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/90 border border-indigo-200 text-indigo-900 text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Independent AI & SaaS Software Reviews</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Discover the Best <span className="text-indigo-600">AI & SaaS Tools</span> for Smarter Business Growth
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Independent guides, practical reviews, and comparisons of AI and SaaS software for freelancers,
              entrepreneurs, and small businesses.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <button
                onClick={() => onNavigate('/reviews')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
              >
                <span>Browse Software Reviews</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('/articles')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm border border-slate-300 transition-all shadow-xs cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>Read Educational Guides</span>
              </button>
            </div>

            {/* Verification & Trust Pillars */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-500">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Public Pricing</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Independent Opinions</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>US Market Focus</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Affiliate Disclosure Reminder */}
        <AffiliateNotice />

        {/* Categories Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
                Explore by Vertical
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Software Categories We Cover
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Practical software breakdowns categorized for lean operations and maximum ROI.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => onNavigate(`/category/${cat.slug}`)}
                className="text-left p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-indigo-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    {cat.slug === 'ai-tools' && <Sparkles className="w-5 h-5" />}
                    {cat.slug === 'saas-reviews' && <Layers className="w-5 h-5" />}
                    {cat.slug === 'email-marketing' && <Mail className="w-5 h-5" />}
                    {cat.slug === 'crm-software' && <Users className="w-5 h-5" />}
                    {cat.slug === 'marketing-automation' && <Workflow className="w-5 h-5" />}
                    {cat.slug === 'productivity-tools' && <CheckCircle2 className="w-5 h-5" />}
                    {cat.slug === 'business-growth-guides' && <TrendingUp className="w-5 h-5" />}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    {cat.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-indigo-600 group-hover:translate-x-1 transition-transform">
                  <span>View Verticals</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Featured Reviews Section */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
                Vetted Tools
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Featured Software Reviews
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Objective, non-hyped breakdowns with verified pricing and practical pros and cons.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/reviews')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>View All Reviews</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {rev.category}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 mt-0.5">{rev.name}</h3>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 shrink-0">
                      <Award className="w-3.5 h-3.5 text-indigo-600" />
                      {rev.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {rev.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="bg-slate-50 rounded-xl p-3.5 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-semibold">Starting Price:</span>
                      <span className="font-mono text-slate-900">{rev.pricing.startingPrice}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-semibold">Free Plan Available?</span>
                      <span className={rev.pricing.freePlanAvailable ? 'text-emerald-700 font-semibold' : 'text-slate-500'}>
                        {rev.pricing.freePlanAvailable ? 'Yes (Permanent Free Plan)' : 'No (Free Trial Offered)'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-700">
                      <span className="font-semibold">Last Pricing Check:</span>
                      <span className="text-slate-500">{rev.pricing.lastVerifiedDate}</span>
                    </div>
                  </div>

                  {/* Pros snippet */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Strengths
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {rev.pros.slice(0, 2).map((pro, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/reviews/${rev.slug}`)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Read Full In-Depth Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={rev.officialWebsiteUrl}
                    target="_blank"
                    rel="sponsored noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900"
                    title="Visit official vendor website"
                  >
                    <span>Official Site</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Latest Educational Articles & Guides */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
                Research & Playbooks
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
                Latest Guides & Comparisons
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                Practical, long-form guides crafted to solve specific business and automation challenges.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/articles')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>View All 8 Guides</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-indigo-600">{art.category}</span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug hover:text-indigo-600 transition-colors">
                    <button onClick={() => onNavigate(`/articles/${art.slug}`)} className="text-left">
                      {art.title}
                    </button>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {art.subtitle}
                  </p>

                  <div className="bg-slate-50 border-l-2 border-indigo-500 p-3 rounded-r-lg">
                    <span className="text-[11px] font-bold text-slate-700 block mb-0.5">
                      Problem Solved:
                    </span>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {art.problemSolved}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Updated {art.lastUpdatedDate}</span>
                  <button
                    onClick={() => onNavigate(`/articles/${art.slug}`)}
                    className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Independent Publisher Information Card (For Visitors & Network Reviewers) */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Independent Publisher Profile</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Transparent, Ethical Software Publishing
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              khmedia is operated by an independent digital publisher based in Algeria, dedicated to researching and
              producing objective, high-utility reviews of AI and SaaS software specifically for the United States market.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                <div className="font-bold text-white mb-1">No Pay-to-Play</div>
                <p className="text-slate-400">
                  We do not accept payment to artificially boost ratings or hide tool limitations.
                </p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                <div className="font-bold text-white mb-1">FTC & CAN-SPAM Adherence</div>
                <p className="text-slate-400">
                  Clear affiliate disclosures near every commercial link and strict permission email standards.
                </p>
              </div>
              <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                <div className="font-bold text-white mb-1">Partner Networks Ready</div>
                <p className="text-slate-400">
                  Designed to meet rigorous quality standards for PartnerStack and Impact.com programs.
                </p>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/publisher-info')}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4"
              >
                <span>Read Full Publisher Media Kit & Partnership Information</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <NewsletterSection />
      </div>
    </div>
  );
}
