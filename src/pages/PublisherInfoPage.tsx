import React from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Globe,
  Award,
  Layers,
  Megaphone,
  Mail,
  ExternalLink,
  Lock,
  ArrowRight,
  FileCheck,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface PublisherInfoPageProps {
  onNavigate: (path: string) => void;
}

export function PublisherInfoPage({ onNavigate }: PublisherInfoPageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      <SEOHead
        title="Publisher Profile & Affiliate Media Kit – khmedia"
        description="Comprehensive publisher profile and media kit for PartnerStack and Impact.com program managers. Promotional methods, audience focus, and brand safety compliance."
        canonicalPath="/publisher-info"
      />

      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
          <FileCheck className="w-3.5 h-3.5" />
          <span>Affiliate Network & Program Manager Briefing</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Publisher Media Kit & Compliance Profile
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Detailed operational information for affiliate managers at <strong>PartnerStack</strong>, <strong>Impact.com</strong>,
          and software vendor partner programs reviewing our collaboration applications.
        </p>
      </div>

      {/* Quick Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200">
          <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Brand Name</span>
          <span className="font-bold text-slate-900 text-lg">khmedia</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200">
          <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Official Domain</span>
          <span className="font-bold text-indigo-600 text-sm font-mono break-all">azmediabot.online</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200">
          <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Publisher Type</span>
          <span className="font-bold text-slate-900 text-sm">Independent Review Publisher</span>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200">
          <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1">Primary Market</span>
          <span className="font-bold text-emerald-700 text-sm">United States (US Audience)</span>
        </div>
      </div>

      {/* Promotional Methods & Traffic Strategy */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-xs">
        <div>
          <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">Distribution Strategy</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">How We Drive Qualified Customer Traffic</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            We employ an educational, value-first promotion model designed to refer pre-educated, high-intent subscribers to
            partner software vendors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Layers className="w-4 h-4 text-indigo-600" />
              <span>1. Long-Form Educational Content & SEO</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We publish comprehensive, technical buyer guides and comparisons targeting high-intent commercial keywords.
              Visitors read in-depth breakdowns before clicking through to vendor signup pages.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Award className="w-4 h-4 text-indigo-600" />
              <span>2. Dedicated Software Reviews & Comparisons</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Standalone, objective product reviews verifying pricing tiers, feature lists, and competitor differentiators.
              Links are accompanied by clear sponsored disclaimers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Megaphone className="w-4 h-4 text-indigo-600" />
              <span>3. Targeted Social Campaigns (Meta / Facebook / Instagram)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              We run educational ad campaigns directing US freelancers and entrepreneurs to our free software guides and
              comparison matrices. We never run misleading bait-and-switch ads.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Mail className="w-4 h-4 text-indigo-600" />
              <span>4. Permission-Based Email Marketing</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Subscribers actively opt in via our Brevo integration with explicit consent checkboxes. We send bi-weekly
              software breakdowns with visible 1-click unsubscribe links and postal physical address compliance under CAN-SPAM.
            </p>
          </div>
        </div>
      </section>

      {/* Target Niches & Verticals */}
      <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-xs">
        <h2 className="text-xl font-bold text-slate-900">Covered Software Verticals</h2>
        <p className="text-xs sm:text-sm text-slate-600">
          Our editorial calendar focuses exclusively on modern digital products with high utility for US business growth:
        </p>

        <div className="flex flex-wrap gap-2 pt-1 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
            AI Software & Tools
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
            SaaS Applications
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
            Marketing Automation
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
            Email Marketing Software
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
            CRM Software
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
            Productivity & Workflow Tools
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-700 font-semibold border border-indigo-100">
            Business Growth Playbooks
          </span>
        </div>
      </section>

      {/* Brand Safety, FTC, & Regulatory Compliance Pledge */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Brand Safety & Compliance Guarantees</span>
        </div>

        <h2 className="text-2xl font-bold text-white">Our Commitments to Partner Programs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="flex items-start gap-2.5 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">FTC Disclosure Compliance</strong>
              All sponsored or affiliate links feature proximity disclosures and proper <code>rel=&quot;sponsored&quot;</code> tags.
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">No Trademark Bidding</strong>
              We never bid on vendor brand names or trademarks in Google Ads, Bing, or search engine paid campaigns.
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">Strict Zero-Spam Email</strong>
              Email subscribers opt-in willingly. We never send to scraped, purchased, or borrowed contact lists.
            </div>
          </div>

          <div className="flex items-start gap-2.5 bg-slate-800/80 p-4 rounded-xl border border-slate-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-0.5">No Incentivized Traffic</strong>
              We never use cashbacks, fake coupon codes, or incentives to force artificial trial signups.
            </div>
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-400">
          Program managers seeking custom partnership agreements or specific compliance documents may contact us at{' '}
          <a href="mailto:contact@azmediabot.online" className="text-indigo-400 underline font-mono">
            contact@azmediabot.online
          </a>.
        </div>
      </section>

      {/* Navigation action */}
      <div className="flex justify-between items-center text-xs text-slate-500 pt-4">
        <button onClick={() => onNavigate('/about')} className="hover:text-slate-900 transition-colors">
          &larr; About Editorial Standards
        </button>
        <button onClick={() => onNavigate('/contact')} className="hover:text-indigo-600 font-semibold">
          Contact Editorial Desk &rarr;
        </button>
      </div>
    </div>
  );
}
