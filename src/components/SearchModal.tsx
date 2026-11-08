import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { REVIEWS } from '../data/reviews';
import { CATEGORIES } from '../data/categories';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export function SearchModal({ isOpen, onClose, onNavigate }: SearchModalProps) {
  const [query, setQuery] = useState('');

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return { articles: ARTICLES.slice(0, 3), reviews: REVIEWS.slice(0, 3), categories: CATEGORIES.slice(0, 4) };
    }

    const matchedArticles = ARTICLES.filter(
      (a) =>
        a.title.toLowerCase().includes(trimmed) ||
        a.subtitle.toLowerCase().includes(trimmed) ||
        a.category.toLowerCase().includes(trimmed) ||
        a.keywords.some((k) => k.toLowerCase().includes(trimmed))
    );

    const matchedReviews = REVIEWS.filter(
      (r) =>
        r.name.toLowerCase().includes(trimmed) ||
        r.tagline.toLowerCase().includes(trimmed) ||
        r.category.toLowerCase().includes(trimmed) ||
        r.primaryUseCase.toLowerCase().includes(trimmed)
    );

    const matchedCategories = CATEGORIES.filter(
      (c) =>
        c.name.toLowerCase().includes(trimmed) ||
        c.shortDescription.toLowerCase().includes(trimmed)
    );

    return { articles: matchedArticles, reviews: matchedReviews, categories: matchedCategories };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search software reviews, AI guides, CRM tools..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-slate-800 placeholder-slate-400 text-base focus:outline-none bg-transparent"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs font-medium text-slate-500 bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded border border-slate-200 transition-colors"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[65vh] overflow-y-auto p-4 space-y-6">
          {/* Reviews Section */}
          {results.reviews.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
                <span>Software Reviews</span>
              </div>
              <div className="space-y-1.5">
                {results.reviews.map((rev) => (
                  <button
                    key={rev.id}
                    onClick={() => {
                      onNavigate(`/reviews/${rev.slug}`);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">
                          {rev.name}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-medium">
                          {rev.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{rev.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Articles Section */}
          {results.articles.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                <span>Guides & Comparisons</span>
              </div>
              <div className="space-y-1.5">
                {results.articles.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => {
                      onNavigate(`/articles/${art.slug}`);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                          {art.title}
                        </span>
                        <span className="text-[11px] text-slate-400 shrink-0 font-normal">
                          {art.readTime}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">{art.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Categories Section */}
          {results.categories.length > 0 && (
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                <Layers className="w-3.5 h-3.5 text-amber-500" />
                <span>Categories</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {results.categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => {
                      onNavigate(`/category/${cat.slug}`);
                      onClose();
                    }}
                    className="text-left p-2.5 rounded-xl bg-slate-50/70 hover:bg-indigo-50/50 border border-slate-200/60 hover:border-indigo-200 transition-all text-xs"
                  >
                    <div className="font-semibold text-slate-800">{cat.name}</div>
                    <div className="text-slate-500 line-clamp-1 text-[11px] mt-0.5">
                      {cat.shortDescription}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {results.reviews.length === 0 && results.articles.length === 0 && results.categories.length === 0 && (
            <div className="text-center py-10 text-slate-500 text-sm">
              No results found for &ldquo;<span className="text-slate-800 font-semibold">{query}</span>&rdquo;.
              <div className="text-xs text-slate-400 mt-1">Try searching for &quot;Notion&quot;, &quot;CRM&quot;, or &quot;Automation&quot;.</div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-slate-50 px-4 py-2.5 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Search khmedia independent reviews database</span>
          <span className="font-mono">https://azmediabot.online</span>
        </div>
      </div>
    </div>
  );
}
