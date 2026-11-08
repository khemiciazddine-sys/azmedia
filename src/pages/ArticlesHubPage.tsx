import React, { useState, useMemo } from 'react';
import { BookOpen, Clock, ArrowRight, Search, CheckCircle2 } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { CATEGORIES } from '../data/categories';
import { SEOHead } from '../components/SEOHead';
import { AffiliateNotice } from '../components/AffiliateNotice';

interface ArticlesHubPageProps {
  onNavigate: (path: string) => void;
}

export function ArticlesHubPage({ onNavigate }: ArticlesHubPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((art) => {
      const matchesCategory = selectedCategory === 'all' || art.categorySlug === selectedCategory;
      const matchesSearch =
        searchQuery === '' ||
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <SEOHead
        title="Guides & Comparisons – Practical AI & SaaS Playbooks"
        description="Comprehensive educational guides, comparisons, and workflows for freelancers and small businesses. In-depth research on AI tools, CRM systems, and marketing automation."
        canonicalPath="/articles"
      />

      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
          Practical Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Educational Guides & Software Comparisons
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          In-depth, problem-first guides written to help solo entrepreneurs and small business operators choose the right
          tools, automate repetitive processes, and avoid expensive software mistakes.
        </p>
      </div>

      <AffiliateNotice compact />

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 text-xs font-medium no-scrollbar">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white font-semibold'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All Guides ({ARTICLES.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = ARTICLES.filter((a) => a.categorySlug === cat.slug).length;
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

        <div className="relative sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search guides & articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((art) => (
          <article
            key={art.id}
            className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-indigo-600">{art.category}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {art.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-slate-900 leading-snug hover:text-indigo-600 transition-colors">
                <button onClick={() => onNavigate(`/articles/${art.slug}`)} className="text-left">
                  {art.title}
                </button>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                {art.subtitle}
              </p>

              <div className="bg-slate-50 border-l-2 border-indigo-500 p-3 rounded-r-lg">
                <span className="text-[11px] font-bold text-slate-700 block mb-0.5">
                  The Problem Solved:
                </span>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {art.problemSolved}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Updated {art.lastUpdatedDate}</span>
              <button
                onClick={() => onNavigate(`/articles/${art.slug}`)}
                className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800"
              >
                <span>Read Complete Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-600 text-sm">No articles matched your search query.</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-semibold text-indigo-600 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
