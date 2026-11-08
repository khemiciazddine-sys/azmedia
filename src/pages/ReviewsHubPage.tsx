import React, { useState, useMemo } from 'react';
import { Award, CheckCircle2, XCircle, ExternalLink, ArrowRight, Filter, Search } from 'lucide-react';
import { REVIEWS } from '../data/reviews';
import { CATEGORIES } from '../data/categories';
import { SEOHead } from '../components/SEOHead';
import { AffiliateNotice } from '../components/AffiliateNotice';

interface ReviewsHubPageProps {
  onNavigate: (path: string) => void;
}

export function ReviewsHubPage({ onNavigate }: ReviewsHubPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredReviews = useMemo(() => {
    return REVIEWS.filter((rev) => {
      const matchesCategory = selectedCategory === 'all' || rev.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        rev.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        rev.primaryUseCase.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <SEOHead
        title="Software Reviews – Independent AI & SaaS Evaluations"
        description="Browse in-depth, independent reviews of AI tools, SaaS apps, CRM, email marketing, and automation software. Verified pricing and balanced pros & cons."
        canonicalPath="/reviews"
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
          Independent Software Database
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          AI & SaaS Software Reviews
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Every review on khmedia is conducted with strict editorial independence. We evaluate features, verify public
          pricing tiers, outline limitations, and specify exactly who each tool is—and isn&rsquo;t—suited for.
        </p>
      </div>

      <AffiliateNotice compact />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 text-xs font-medium no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Categories ({REVIEWS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = REVIEWS.filter((r) => r.categorySlug === cat.slug).length;
            if (count === 0) return null;
            return (
              <button
                key={cat.slug}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.slug
                    ? 'bg-slate-900 text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Text Filter Input */}
        <div className="relative sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Filter reviews..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-all space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {rev.category}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900 mt-0.5">{rev.name}</h2>
                </div>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 shrink-0">
                  <Award className="w-3.5 h-3.5 text-indigo-600" />
                  {rev.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {rev.description}
              </p>

              {/* Data scorecard */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 bg-slate-50 p-3 rounded-xl text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Starting Price</span>
                  <span className="font-semibold text-slate-900">{rev.pricing.startingPrice}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Free Plan</span>
                  <span className={rev.pricing.freePlanAvailable ? 'font-semibold text-emerald-700' : 'text-slate-600'}>
                    {rev.pricing.freePlanAvailable ? 'Available' : 'No Free Tier'}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-semibold">Verified</span>
                  <span className="text-slate-600">{rev.pricing.lastVerifiedDate}</span>
                </div>
              </div>

              {/* Pros & Cons Preview */}
              <div className="space-y-2 text-xs">
                <div>
                  <span className="font-semibold text-emerald-800 flex items-center gap-1 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Pros:
                  </span>
                  <p className="text-slate-600 pl-4">{rev.pros[0]}</p>
                </div>
                <div>
                  <span className="font-semibold text-amber-800 flex items-center gap-1 mb-1">
                    <XCircle className="w-3.5 h-3.5 text-amber-600" /> Consideration:
                  </span>
                  <p className="text-slate-600 pl-4">{rev.cons[0]}</p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => onNavigate(`/reviews/${rev.slug}`)}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                <span>Read Comprehensive Review</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={rev.officialWebsiteUrl}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900"
              >
                <span>Official Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-600 text-sm">No reviews matched your search criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
