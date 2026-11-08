import React from 'react';
import { ShieldCheck, Info } from 'lucide-react';

interface AffiliateNoticeProps {
  compact?: boolean;
}

export function AffiliateNotice({ compact = false }: AffiliateNoticeProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-100/80 border border-slate-200/80 rounded-md px-3 py-1.5 my-3">
        <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span>
          <strong>Affiliate Transparency:</strong> We may earn a commission from links on this page at no additional cost to you.
        </span>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-4 sm:p-5 my-6 text-sm text-slate-700">
      <div className="flex items-start gap-3">
        <div className="p-1.5 bg-emerald-100 text-emerald-800 rounded-lg shrink-0 mt-0.5">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
            Editorial Independence & Affiliate Disclosure
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Some links on this website may be affiliate links. This means we may earn a commission if you purchase
            through certain links, at no additional cost to you. Our editorial opinions are independent, and we aim to
            provide useful and transparent information to help readers make informed decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
