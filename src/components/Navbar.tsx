import React, { useState, useRef, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Sparkles, BookOpen, Layers, ShieldCheck, Mail } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
}

export function Navbar({ currentPath, onNavigate, onOpenSearch }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCategoriesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'Articles & Guides', path: '/articles' },
    { label: 'About Us', path: '/about' },
    { label: 'Publisher Info', path: '/publisher-info', badge: 'Media Kit' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    setCategoriesDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top Banner Notice: Target Audience & Independent Status */}
      <div className="bg-slate-900 text-slate-300 text-[11px] sm:text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>
              <strong>khmedia</strong> &bull; Independent AI & SaaS Review Publisher for US Freelancers & SMBs
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-400">
            <span className="font-mono text-[11px]">Official: azmediabot.online</span>
            <button
              onClick={() => handleLinkClick('/affiliate-disclosure')}
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              Affiliate Disclosure
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-2.5 text-left group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-700 to-indigo-900 text-white font-black text-lg flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              kh
            </div>
            <div>
              <span className="font-black text-lg tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                khmedia
              </span>
              <span className="block text-[10px] text-slate-500 font-medium tracking-wide -mt-1">
                AI & SaaS Reviews
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-700">
            <button
              onClick={() => handleLinkClick('/')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/' ? 'text-indigo-600 bg-indigo-50/70 font-semibold' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('/reviews')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath.startsWith('/reviews') ? 'text-indigo-600 bg-indigo-50/70 font-semibold' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Reviews
            </button>

            <button
              onClick={() => handleLinkClick('/articles')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath.startsWith('/articles') ? 'text-indigo-600 bg-indigo-50/70 font-semibold' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Guides & Articles
            </button>

            {/* Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCategoriesDropdownOpen(!categoriesDropdownOpen)}
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                  currentPath.startsWith('/category') ? 'text-indigo-600 bg-indigo-50/70 font-semibold' : 'hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Categories</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${categoriesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {categoriesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                    Software Verticals
                  </div>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => handleLinkClick(`/category/${cat.slug}`)}
                      className="w-full text-left px-3.5 py-2 hover:bg-slate-50 transition-colors flex items-center justify-between text-xs group"
                    >
                      <span className="font-medium text-slate-800 group-hover:text-indigo-600">
                        {cat.name}
                      </span>
                      <span className="text-[11px] text-slate-400 font-normal">Explore &rarr;</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('/about')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/about' ? 'text-indigo-600 bg-indigo-50/70 font-semibold' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleLinkClick('/publisher-info')}
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/publisher-info' ? 'text-indigo-600 bg-indigo-50/70 font-semibold' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <span>Publisher Profile</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded-full">
                Partners
              </span>
            </button>

            <button
              onClick={() => handleLinkClick('/contact')}
              className={`px-3 py-2 rounded-lg transition-colors ${
                currentPath === '/contact' ? 'text-indigo-600 bg-indigo-50/70 font-semibold' : 'hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200/80 rounded-lg border border-slate-200 transition-colors"
              title="Search website (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Search Tools...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white text-slate-500 rounded border border-slate-200">
                /
              </kbd>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-medium flex items-center justify-between ${
                  currentPath === link.path
                    ? 'text-indigo-600 bg-indigo-50 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-400">
              Browse Verticals
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mt-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleLinkClick(`/category/${cat.slug}`)}
                  className="w-full text-left px-3.5 py-2 rounded-lg text-xs text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => handleLinkClick('/affiliate-disclosure')}
              className="w-full text-left px-3.5 py-2 rounded-lg text-xs text-slate-500 hover:text-slate-800"
            >
              &bull; Affiliate Transparency Disclosure
            </button>
            <button
              onClick={() => handleLinkClick('/privacy-policy')}
              className="w-full text-left px-3.5 py-2 rounded-lg text-xs text-slate-500 hover:text-slate-800"
            >
              &bull; Privacy Policy (CAN-SPAM & Law 18-07)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
