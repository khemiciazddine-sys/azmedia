import React from 'react';
import { ShieldCheck, Target, Search, DollarSign, Globe, CheckCircle2, User, BookOpen } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { AffiliateNotice } from '../components/AffiliateNotice';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <SEOHead
        title="About khmedia – Independent AI & SaaS Review Publisher"
        description="Learn about khmedia, our editorial review methodology, target audience in the United States, and transparent affiliate disclosure policy."
        canonicalPath="/about"
      />

      {/* Header */}
      <div className="space-y-4">
        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
          Editorial Standards & Mission
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About khmedia
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          An independent digital publishing website focused on researching, reviewing, and comparing AI tools and SaaS
          software for freelancers, entrepreneurs, and small businesses.
        </p>
      </div>

      <AffiliateNotice />

      {/* Mission & Background */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-indigo-600" />
          <span>Why khmedia Was Created</span>
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            The software industry has experienced an explosion of new tools, particularly in generative AI and cloud
            automation. Unfortunately, finding straightforward, candid information about whether a tool actually delivers
            ROI has become harder than ever. Many review websites are either bloated comparison farms funded by the
            highest bidder or unedited AI scrapers repeating marketing claims verbatim.
          </p>
          <p>
            <strong>khmedia</strong> was launched to provide a grounded, practical counterweight. We cut through promotional
            buzzwords, verify true pricing tiers (including sneaky overage cliffs), test features in realistic workflow
            scenarios, and state clearly when a tool is <em>not</em> worth your money.
          </p>
        </div>
      </section>

      {/* Who is the Publisher */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <User className="w-5 h-5 text-indigo-600" />
          <span>Who Operates khmedia?</span>
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            khmedia is published by an <strong>independent technology publisher based in Algeria</strong>, conducting
            diligent research on modern software tools tailored specifically for the <strong>United States market</strong>.
          </p>
          <p>
            We believe in complete transparency: we do not claim to be a 50-person multinational agency or an enterprise
            consultancy with bloated overhead. We are independent digital researchers and practitioners who examine
            software documentation, trial interfaces, audit pricing matrices, and synthesize verified customer feedback.
          </p>
        </div>
      </section>

      {/* Target Audience & Verticals */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-600" />
          <span>Who We Write For & What We Cover</span>
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          Our editorial content is crafted specifically for US freelancers, independent creators, startup founders, and
          small business teams who need reliable software without enterprise friction.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong>Artificial Intelligence Tools:</strong> Writing assistants, research synthesizers, and smart task copilots.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong>CRM Software:</strong> Visual pipelines, contact management, and deal stages for lean teams.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong>Email Marketing:</strong> Newsletter platforms, broadcast tools, and CAN-SPAM compliant list builders.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong>Marketing Automation:</strong> Multi-app connectors, webhook routers, and no-code scenario triggers.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong>Productivity Tools:</strong> All-in-one workspaces, project boards, and async communication tools.
          </div>
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
            <strong>Business Growth Guides:</strong> Pragmatic software evaluation frameworks and operational playbooks.
          </div>
        </div>
      </section>

      {/* Editorial & Review Methodology */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Search className="w-5 h-5 text-indigo-600" />
          <span>Our Review & Verification Methodology</span>
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            To maintain strict credibility, our evaluations follow four disciplined rules:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>No Arbitrary Rating Inflation:</strong> We do not publish unsubstantiated numeric scores like
                &ldquo;4.9/5&rdquo; without an empirical testing rubric. Instead, we issue descriptive badges such as
                <em>&ldquo;Best for Beginners&rdquo;</em> or <em>&ldquo;Best for Small Teams&rdquo;</em> based on feature fit.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Primary Source Verification:</strong> All pricing tiers, free plan limits, and trial terms are
                checked directly against published vendor documentation with the verification date explicitly disclosed.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>Honest Limitations:</strong> Every review includes a dedicated &ldquo;Who We Do NOT Recommend
                This For&rdquo; section, ensuring readers do not waste capital on unsuitable tools.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong>No Pay-to-Play Rankings:</strong> Software vendors cannot purchase favorable rankings or censor
                editorial criticism on khmedia.
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Monetization & Affiliate Model */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-emerald-400" />
          <span>How We Monetize This Website</span>
        </h2>
        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Operating khmedia involves research time, hosting infrastructure, and testing costs. We fund our work
            primarily through affiliate marketing partnerships. When a reader clicks certain links on our site and
            subsequently subscribes to a software tool, we may receive a referral commission from the vendor.
          </p>
          <p className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-slate-200">
            <strong>Key Guarantee:</strong> This commission comes at <strong>zero additional cost to you</strong>. In many
            cases, partner links provide exclusive discounts or extended trial periods. However, commission potential
            never dictates our editorial conclusions. If a tool has severe flaws, we disclose them candidly.
          </p>
        </div>

        <div className="pt-2 flex flex-wrap gap-4 text-xs">
          <button
            onClick={() => onNavigate('/affiliate-disclosure')}
            className="text-indigo-400 hover:text-white underline underline-offset-4"
          >
            Read Full Affiliate Disclosure
          </button>
          <button
            onClick={() => onNavigate('/publisher-info')}
            className="text-emerald-400 hover:text-white underline underline-offset-4"
          >
            View Publisher Profile & Media Kit
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="text-slate-400 hover:text-white underline underline-offset-4"
          >
            Contact Editorial Desk
          </button>
        </div>
      </section>
    </div>
  );
}
