import React from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  CheckCircle2,
  XCircle,
  ExternalLink,
  BookOpen,
  ShieldCheck,
  List,
  Sparkles,
} from 'lucide-react';
import { Article } from '../types';
import { SEOHead } from '../components/SEOHead';
import { AffiliateNotice } from '../components/AffiliateNotice';
import { NewsletterSection } from '../components/NewsletterSection';

interface ArticleDetailPageProps {
  article: Article;
  onNavigate: (path: string) => void;
}

export function ArticleDetailPage({ article, onNavigate }: ArticleDetailPageProps) {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.subtitle,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <SEOHead
        title={article.title}
        description={article.metaDescription}
        canonicalPath={`/articles/${article.slug}`}
        type="article"
        publishedTime={article.publishedDate}
        modifiedTime={article.lastUpdatedDate}
        keywords={article.keywords}
        schemaData={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.publishedDate,
          dateModified: article.lastUpdatedDate,
          author: {
            '@type': 'Organization',
            name: 'khmedia',
            url: 'https://azmediabot.online',
          },
          publisher: {
            '@type': 'Organization',
            name: 'khmedia',
            url: 'https://azmediabot.online',
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://azmediabot.online/articles/${article.slug}`,
          },
        }}
      />

      {/* Navigation Breadcrumbs */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('/articles')}
            className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Guides</span>
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate(`/category/${article.categorySlug}`)}
            className="hover:text-slate-900 transition-colors"
          >
            {article.category}
          </button>
        </div>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
        >
          <Share2 className="w-3.5 h-3.5 text-slate-500" />
          <span>Share</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="space-y-4 max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-600">
          <span>{article.category}</span>
          <span className="text-slate-300">&bull;</span>
          <span className="text-slate-500 font-normal flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
          {article.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-600 leading-relaxed">
          {article.subtitle}
        </p>

        {/* Metadata Bar */}
        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500 border-t border-slate-200/80">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Published: {article.publishedDate}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
            <span>Last Updated: {article.lastUpdatedDate}</span>
          </div>
          <div>
            <span>By <strong>khmedia Editorial Desk</strong></span>
          </div>
        </div>
      </header>

      <AffiliateNotice />

      {/* Problem Solved Highlight Box */}
      <div className="bg-indigo-50/80 border border-indigo-200/90 rounded-2xl p-6 sm:p-7 space-y-2">
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-indigo-600" />
          <span>Core Challenge Addressed</span>
        </div>
        <p className="text-sm sm:text-base text-indigo-950 leading-relaxed font-medium">
          {article.problemSolved}
        </p>
      </div>

      {/* Table of Contents Box */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
          <List className="w-4 h-4 text-indigo-600" />
          <span>In This Guide (Table of Contents)</span>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm">
          {article.sections.map((sec, idx) => (
            <li key={sec.id}>
              <button
                onClick={() => handleScrollToSection(sec.id)}
                className="text-left text-indigo-600 hover:text-indigo-800 font-medium hover:underline flex items-center gap-2"
              >
                <span className="text-slate-400 font-mono text-xs">{idx + 1}.</span>
                <span>{sec.title}</span>
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handleScrollToSection('conclusion-and-verdict')}
              className="text-left text-indigo-600 hover:text-indigo-800 font-medium hover:underline flex items-center gap-2"
            >
              <span className="text-slate-400 font-mono text-xs">{article.sections.length + 1}.</span>
              <span>Conclusion & Editorial Recommendation</span>
            </button>
          </li>
        </ul>
      </div>

      {/* Article Content Sections */}
      <div className="space-y-12">
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight pt-2">
              {section.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              {section.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Takeaways */}
            {section.keyTakeaways && section.keyTakeaways.length > 0 && (
              <div className="bg-slate-50 border-l-4 border-indigo-600 rounded-r-xl p-5 space-y-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                  Practical Takeaways:
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {section.keyTakeaways.map((item, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Comparison Table if Present */}
            {section.comparisonTable && (
              <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      {section.comparisonTable.headers.map((h, hIdx) => (
                        <th key={hIdx} className="px-4 py-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {section.comparisonTable.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-3 ${cIdx === 0 ? 'font-semibold text-slate-900' : 'text-slate-600'}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pros & Cons Section if Present */}
            {(section.pros || section.cons) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {section.pros && (
                  <div className="bg-white border border-emerald-200 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Core Advantages</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {section.pros.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">&bull;</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {section.cons && (
                  <div className="bg-white border border-amber-200 rounded-xl p-5 space-y-2">
                    <div className="flex items-center gap-1.5 text-amber-900 font-bold text-sm">
                      <XCircle className="w-4 h-4 text-amber-600" />
                      <span>Key Limitations</span>
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                      {section.cons.map((c, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold">&bull;</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </section>
        ))}

        {/* Conclusion and Recommendation Box */}
        <section
          id="conclusion-and-verdict"
          className="scroll-mt-24 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Conclusion & Final Recommendation</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Our Editorial Takeaway
          </h3>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {article.conclusion}
          </p>

          <div className="bg-slate-800/90 rounded-xl p-4 border border-slate-700/80 space-y-1.5">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
              Action Plan:
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              {article.verdictRecommendation}
            </p>
          </div>
        </section>

        {/* Official Sources Cited */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
            Verified Official Sources & References
          </h3>
          <p className="text-xs text-slate-500">
            In compliance with our editorial standards, all claims, pricing structures, and compliance frameworks cited in
            this guide are checked against official primary documentation:
          </p>
          <ul className="space-y-2 text-xs">
            {article.officialSources.map((source, idx) => (
              <li key={idx} className="flex items-start justify-between gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <div>
                  <span className="font-semibold text-slate-800">{source.name}</span>
                  <p className="text-slate-500 text-[11px]">{source.note}</p>
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-800 shrink-0 font-medium"
                >
                  <span>Source</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Newsletter Signup Inside Article */}
        <NewsletterSection />
      </div>
    </div>
  );
}
