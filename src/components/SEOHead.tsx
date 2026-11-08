import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  keywords?: string[];
  schemaData?: Record<string, unknown>;
}

export const BASE_URL = 'https://azmediabot.online';

export function SEOHead({
  title,
  description,
  canonicalPath = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  keywords,
  schemaData,
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Update Title
    const fullTitle = title.includes('khmedia') ? title : `${title} | khmedia`;
    document.title = fullTitle;

    // 2. Canonical URL
    const cleanPath = canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`;
    const canonicalUrl = `${BASE_URL}${cleanPath === '/' ? '' : cleanPath}`;
    
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 3. Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    }

    // 4. OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) ogType.setAttribute('content', type);

    // 5. Twitter Card
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute('content', fullTitle);

    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute('content', description);

    // 6. Keywords
    if (keywords && keywords.length > 0) {
      let metaKw = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
      if (!metaKw) {
        metaKw = document.createElement('meta');
        metaKw.setAttribute('name', 'keywords');
        document.head.appendChild(metaKw);
      }
      metaKw.setAttribute('content', keywords.join(', '));
    }

    // 7. Inject specific structured data if provided
    let dynamicScript = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
    if (schemaData) {
      if (!dynamicScript) {
        dynamicScript = document.createElement('script');
        dynamicScript.id = 'dynamic-jsonld';
        dynamicScript.type = 'application/ld+json';
        document.head.appendChild(dynamicScript);
      }
      dynamicScript.textContent = JSON.stringify(schemaData);
    } else if (dynamicScript) {
      dynamicScript.remove();
    }

    // Window scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title, description, canonicalPath, type, publishedTime, modifiedTime, keywords, schemaData]);

  return null;
}
