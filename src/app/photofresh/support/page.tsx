// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getProduct } from "@/lib/products";
import { Mail } from "lucide-react";

const product = getProduct("photofresh")!;

export const metadata: Metadata = {
  title: "Support — PhotoFresh",
  description:
    "Get help with PhotoFresh. Contact Agam Labs support or browse frequently asked questions.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: product.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PhotoFreshSupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* ─── Header ─── */}
      <header className="animate-on-scroll">
        <p className="text-label">Support</p>
        <h1 className="text-headline mt-3">{product.name}</h1>
      </header>

      {/* ─── Contact Card ─── */}
      <div className="glass-card mt-12 p-8 text-center animate-on-scroll">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
          <Mail className="h-6 w-6 text-emerald-400" />
        </div>
        <p className="mt-4 text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50">
          Need help? Reach out anytime.
        </p>
        <a
          href={`mailto:${product.privacy.contactEmail}`}
          className="mt-2 inline-block text-lg font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
        >
          {product.privacy.contactEmail}
        </a>
      </div>

      {/* ─── FAQ ─── */}
      <section className="mt-16">
        <p className="text-label animate-on-scroll">FAQ</p>
        <h2 className="text-headline mt-3 animate-on-scroll">
          Frequently asked questions.
        </h2>

        <Accordion className="mt-8 space-y-3">
          {product.faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="glass-card overflow-hidden px-6 animate-on-scroll"
            >
              <AccordionTrigger className="py-4 text-left font-medium text-white/80 dark:text-white/80 [html:not(.dark)_&]:text-black/70">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
