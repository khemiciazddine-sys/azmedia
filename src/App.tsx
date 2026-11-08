import React, { useState, useEffect, useTransition } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ReviewsHubPage } from './pages/ReviewsHubPage';
import { ReviewDetailPage } from './pages/ReviewDetailPage';
import { ArticlesHubPage } from './pages/ArticlesHubPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { PublisherInfoPage } from './pages/PublisherInfoPage';
import { AffiliateDisclosurePage } from './pages/AffiliateDisclosurePage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Data
import { REVIEWS } from './data/reviews';
import { ARTICLES } from './data/articles';
import { CATEGORIES } from './data/categories';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Check if path or hash is used
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    return window.location.pathname || '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [, startTransition] = useTransition();

  // Listen to popstate for browser forward/backward buttons
  useEffect(() => {
    const handlePopState = () => {
      let path = window.location.pathname || '/';
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        path = window.location.hash.slice(1);
      }
      startTransition(() => {
        setCurrentPath(path);
      });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Global keyboard shortcut for search (/ or Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA')) {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) return;

    try {
      window.history.pushState({}, '', path);
    } catch {
      // Fallback for sandboxed or restricted iframes
      window.location.hash = `#${path}`;
    }

    startTransition(() => {
      setCurrentPath(path);
    });
  };

  // Route matching helper
  const renderContent = () => {
    // Normalization: strip trailing slash (except for root '/')
    const normalized = currentPath.length > 1 && currentPath.endsWith('/')
      ? currentPath.slice(0, -1)
      : currentPath;

    // 1. Home
    if (normalized === '/' || normalized === '') {
      return <HomePage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }

    // 2. Reviews Hub
    if (normalized === '/reviews') {
      return <ReviewsHubPage onNavigate={navigate} />;
    }

    // 3. Review Detail: /reviews/:slug
    if (normalized.startsWith('/reviews/')) {
      const slug = normalized.replace('/reviews/', '');
      const review = REVIEWS.find((r) => r.slug === slug);
      if (review) {
        return <ReviewDetailPage review={review} onNavigate={navigate} />;
      }
      return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }

    // 4. Articles Hub
    if (normalized === '/articles') {
      return <ArticlesHubPage onNavigate={navigate} />;
    }

    // 5. Article Detail: /articles/:slug
    if (normalized.startsWith('/articles/')) {
      const slug = normalized.replace('/articles/', '');
      const article = ARTICLES.find((a) => a.slug === slug);
      if (article) {
        return <ArticleDetailPage article={article} onNavigate={navigate} />;
      }
      return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }

    // 6. Category: /category/:slug
    if (normalized.startsWith('/category/')) {
      const slug = normalized.replace('/category/', '');
      const category = CATEGORIES.find((c) => c.slug === slug);
      if (category) {
        return <CategoryPage category={category} onNavigate={navigate} />;
      }
      return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
    }

    // 7. About Us
    if (normalized === '/about') {
      return <AboutPage onNavigate={navigate} />;
    }

    // 8. Publisher Profile & Media Kit (for PartnerStack / Impact)
    if (normalized === '/publisher-info') {
      return <PublisherInfoPage onNavigate={navigate} />;
    }

    // 9. Affiliate Disclosure
    if (normalized === '/affiliate-disclosure') {
      return <AffiliateDisclosurePage onNavigate={navigate} />;
    }

    // 10. Privacy Policy
    if (normalized === '/privacy-policy') {
      return <PrivacyPolicyPage />;
    }

    // 11. Terms of Service
    if (normalized === '/terms') {
      return <TermsPage />;
    }

    // 12. Contact Us
    if (normalized === '/contact') {
      return <ContactPage />;
    }

    // 13. Fallback: 404
    return <NotFoundPage onNavigate={navigate} onOpenSearch={() => setIsSearchOpen(true)} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
}
