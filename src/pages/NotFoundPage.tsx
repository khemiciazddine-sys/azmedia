import React from 'react';
import { Search, Home, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export function NotFoundPage({ onNavigate, onOpenSearch }: NotFoundPageProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center space-y-8">
      <SEOHead
        title="Page Not Found (404) – khmedia"
        description="The requested page could not be located on khmedia (azmediabot.online). Browse our software reviews or educational guides."
        canonicalPath="/404"
      />

      <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 font-black text-2xl flex items-center justify-center mx-auto border border-indigo-100">
        404
      </div>

      <div className="space-y-3">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
          The link you followed may be outdated, or the software resource may have been relocated.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={() => onNavigate('/')}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </button>

        <button
          onClick={onOpenSearch}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-semibold text-sm transition-all"
        >
          <Search className="w-4 h-4 text-slate-500" />
          <span>Search All Reviews & Guides</span>
        </button>
      </div>

      {/* Suggested destinations */}
      <div className="pt-8 border-t border-slate-200 text-left max-w-lg mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block text-center">
          Popular Destinations
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <button
            onClick={() => onNavigate('/reviews')}
            className="p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-medium flex items-center justify-between group text-left"
          >
            <span>All Software Reviews</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
          </button>
          <button
            onClick={() => onNavigate('/articles')}
            className="p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-medium flex items-center justify-between group text-left"
          >
            <span>Guides & Playbooks</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
          </button>
          <button
            onClick={() => onNavigate('/publisher-info')}
            className="p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-medium flex items-center justify-between group text-left"
          >
            <span>Publisher Media Kit</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="p-3 rounded-xl bg-white border border-slate-200 hover:border-indigo-400 text-slate-800 font-medium flex items-center justify-between group text-left"
          >
            <span>Contact Desk</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
