import React from 'react';
import { Shield, Mail, Globe, MapPin, CheckCircle, ExternalLink } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand & Editorial Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-black text-base flex items-center justify-center">
                kh
              </div>
              <span className="font-black text-xl text-white tracking-tight">khmedia</span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              khmedia is an independent digital publishing website focused on researching, reviewing, and comparing AI
              tools and SaaS software for freelancers, entrepreneurs, and small businesses.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>
                  Official Domain: <strong className="text-white">azmediabot.online</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Publisher Origin: Algeria &bull; Primary Audience: United States</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Editorial Desk: contact@azmediabot.online</span>
              </div>
            </div>

            {/* Application Compliance Badges */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                <Shield className="w-3.5 h-3.5 text-indigo-400" />
                <span>Impact.com & PartnerStack Ready Publisher</span>
              </span>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Software Verticals
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.slug}>
                  <button
                    onClick={() => onNavigate(`/category/${cat.slug}`)}
                    className="text-slate-400 hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Content & Reviews Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Content & Guides
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('/reviews')} className="hover:text-white transition-colors">
                  All Software Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/articles')} className="hover:text-white transition-colors">
                  Educational Guides & Playbooks
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/articles/best-ai-tools-for-small-businesses')}
                  className="hover:text-white transition-colors"
                >
                  Best AI Tools for Small Businesses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/articles/best-crm-software-for-small-businesses')}
                  className="hover:text-white transition-colors"
                >
                  Best CRM Software Comparison
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/articles/best-email-marketing-software-for-beginners')}
                  className="hover:text-white transition-colors"
                >
                  Email Marketing for Beginners
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('/articles/how-to-choose-the-right-saas-software-for-your-business')}
                  className="hover:text-white transition-colors"
                >
                  SaaS Evaluation Framework
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Governance Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Transparency & Legal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => onNavigate('/about')} className="hover:text-white transition-colors">
                  About Us & Editorial Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/publisher-info')} className="hover:text-white transition-colors font-semibold text-emerald-400">
                  Publisher Media Kit & Partners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/affiliate-disclosure')} className="hover:text-white transition-colors">
                  Affiliate Disclosure (FTC Compliant)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-white transition-colors">
                  Privacy Policy (CAN-SPAM & Law 18-07)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
                  Contact Editorial Desk
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Affiliate & CAN-SPAM Disclosure Statement */}
        <div className="py-8 border-b border-slate-800/80 text-xs text-slate-400 space-y-3">
          <div className="flex items-start gap-2.5">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-200">Mandatory Affiliate Disclosure:</strong> Some links on this website
              may be affiliate links. This means we may earn a commission if you purchase through certain links, at no
              additional cost to you. Our editorial opinions are independent, and we aim to provide useful and
              transparent information to help readers make informed decisions. Product pricing and availability are
              accurate as of the date of verification and are subject to change by vendors without notice.
            </div>
          </div>

          <div className="text-[11px] text-slate-400/90 pl-6 space-y-1">
            <p>
              <strong>US Commercial Email Compliance (CAN-SPAM):</strong> khmedia practices strictly permission-based
              email marketing. Commercial postal physical address registration:
              <span className="text-slate-300 ml-1">
                khmedia Editorial Desk, C/O Registered Business Mailbox, Algiers, Algeria (Postal Code: 16000).
              </span>
            </p>
            <p>
              <strong>Algerian Personal Data Protection (Law 18-07):</strong> Subscribers retain full rights to inspect,
              rectify, or erase their stored email address at any time via immediate 1-click unsubscribe or by emailing
              contact@azmediabot.online.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            &copy; {new Date().getFullYear()} <strong className="text-slate-300">khmedia</strong>. All rights reserved.
            Published at <span className="text-indigo-400">https://azmediabot.online</span>.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('/privacy-policy')} className="hover:text-white transition-colors">
              Privacy
            </button>
            <button onClick={() => onNavigate('/terms')} className="hover:text-white transition-colors">
              Terms
            </button>
            <button onClick={() => onNavigate('/affiliate-disclosure')} className="hover:text-white transition-colors">
              Disclosures
            </button>
            <button onClick={() => onNavigate('/contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
