import React from 'react';
import { Mail, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { SEOHead } from '../components/SEOHead';

export function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <SEOHead
        title="Contact Editorial Desk – khmedia"
        description="Get in touch with the khmedia editorial desk. Inquiries regarding software reviews, verified pricing corrections, and affiliate program partnerships."
        canonicalPath="/contact"
      />

      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
          Direct Inquiries
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          Have feedback on a software review, a correction regarding verified vendor pricing, or a partnership inquiry
          for our publisher desk? Send a message through our secure form below.
        </p>
      </div>

      {/* Working Netlify Contact Form */}
      <ContactForm />
    </div>
  );
}
