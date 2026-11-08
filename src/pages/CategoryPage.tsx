import React from 'react';
import { Category } from '../types';
import { REVIEWS } from '../data/reviews';
import { ARTICLES } from '../data/articles';
import { SEOHead } from '../components/SEOHead';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { ArrowLeft, ArrowRight, Award, Clock, Sparkles } from 'lucide-react';

interface CategoryPageProps {
  category: Category;
  onNavigate: (path: string) => void;
}

export function CategoryPage({ category, onNavigate }: CategoryPageProps) {
  const matchingReviews = REVIEWS.filter((r) => r.categorySlug === category.slug);
  const matchingArticles = ARTICLES.filter((a) => a.categorySlug === category.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      <SEOHead
        title={category.metaTitle}
        description={category.metaDescription}
        canonicalPath={`/category/${category.slug}`}
      />

      {/* Header */}
      <div className="space-y-3 max-w-3xl">
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider block">
          Software Vertical Hub
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {category.name}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {category.description}
        </p>
      </div>

      <AffiliateNotice compact />

      {/* Reviews in this category */}
      {matchingReviews.length > 0 && (
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-slate-900">
              Vetted {category.name} Reviews ({matchingReviews.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchingReviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-slate-900">{rev.name}</h3>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700">
                      <Award className="w-3 h-3" />
                      {rev.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {rev.tagline}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Starting Price:</span>
                      <span className="font-semibold text-slate-800">{rev.pricing.startingPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Free Tier:</span>
                      <span className={rev.pricing.freePlanAvailable ? 'text-emerald-700 font-semibold' : 'text-slate-600'}>
                        {rev.pricing.freePlanAvailable ? 'Permanent Free Plan' : 'Free Trial'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onNavigate(`/reviews/${rev.slug}`)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    <span>Read Full Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400">Verified {rev.pricing.lastVerifiedDate}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Guides in this category */}
      {matchingArticles.length > 0 && (
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl font-bold text-slate-900">
              In-Depth Guides & Playbooks ({matchingArticles.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matchingArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-4"
              >
                <div className="space-y-2">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {art.readTime}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug hover:text-indigo-600 transition-colors">
                    <button onClick={() => onNavigate(`/articles/${art.slug}`)} className="text-left">
                      {art.title}
                    </button>
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {art.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">{art.lastUpdatedDate}</span>
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
      )}

      {matchingReviews.length === 0 && matchingArticles.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-600 text-sm">New reviews and guides for this vertical are in editorial production.</p>
        </div>
      )}
    </div>
  );
}
