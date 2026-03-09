// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { getProduct } from "@/lib/products";
import {
  Copy,
  Eye,
  Clock,
  Trash2,
  MessageCircle,
  WifiOff,
} from "lucide-react";
import { Check } from "lucide-react";
import { PhotoFreshLogomark } from "@/components/logos/photofresh-logo";

const product = getProduct("photofresh")!;

export const metadata: Metadata = {
  title: "PhotoFresh — Clean Gallery, Clear Mind",
  description: product.description,
};

const featureIcons = [Copy, Eye, Clock, Trash2, MessageCircle, WifiOff];

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PhotoFresh",
  description: product.description,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "299",
    priceCurrency: "INR",
    offerCount: 3,
  },
  author: {
    "@type": "Organization",
    name: "Agam Labs",
    url: "https://agamlabs.dev",
  },
};

export default function PhotoFreshPage() {
  return (
    <div className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      {/* ─── Hero ─── */}
      <section className="gradient-mesh flex flex-col items-center justify-center px-6 py-20 text-center md:py-28">
        <PhotoFreshLogomark size={48} className="text-emerald-400 animate-on-scroll" />
        <p className="text-label mt-6 animate-on-scroll">Privacy-First Gallery Cleaner</p>
        <h1 className="text-display gradient-text mt-4 animate-on-scroll">
          {product.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-emerald-400 animate-on-scroll">
          {product.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 leading-relaxed animate-on-scroll">
          {product.description}
        </p>
        <p className="mt-8 text-sm font-medium tracking-wide text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40 animate-on-scroll">
          Coming soon to Google Play
        </p>
      </section>

      {/* ─── Features ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="text-label animate-on-scroll">Features</p>
        <h2 className="text-headline mt-3 animate-on-scroll">
          Everything you need to
          <br />
          <span className="gradient-text">reclaim your gallery.</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {product.features.map((feature, i) => {
            const Icon = featureIcons[i];
            return (
              <div
                key={feature.title}
                className="glass-card p-6 animate-on-scroll"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10">
                  <Icon className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mt-4 font-semibold text-white/90 dark:text-white/90 [html:not(.dark)_&]:text-black/80">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── Pricing ─── */}
      {product.pricing && (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="text-label text-center animate-on-scroll">Pricing</p>
          <h2 className="text-headline mt-3 text-center animate-on-scroll">
            Simple, honest pricing.
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 animate-on-scroll">
            Free is generous. Premium is powerful. No dark patterns.
          </p>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
            {/* Free tier */}
            <div className="glass-card p-8 animate-on-scroll">
              <p className="text-sm font-medium text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
                Free
              </p>
              <p className="mt-2 text-3xl font-bold text-white/90 dark:text-white/90 [html:not(.dark)_&]:text-black/80">
                ₹0
              </p>
              <p className="mt-1 text-sm text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
                Forever
              </p>
              <div className="mt-6 h-px bg-white/[0.06]" />
              <ul className="mt-6 space-y-3">
                {[
                  "Quick Scan — unlimited",
                  "Duplicates, screenshots, old media",
                  "WhatsApp base cleanup",
                  "Unlimited deletes",
                  "100% offline",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly tier */}
            <div className="glass-card p-8 animate-on-scroll">
              <p className="text-sm font-medium text-emerald-400">
                Premium Monthly
              </p>
              <p className="mt-2 text-3xl font-bold text-white/90 dark:text-white/90 [html:not(.dark)_&]:text-black/80">
                {product.pricing.monthly}
              </p>
              <p className="mt-1 text-sm text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
                Billed monthly
              </p>
              <div className="mt-6 h-px bg-white/[0.06]" />
              <ul className="mt-6 space-y-3">
                {[
                  "Everything in Free",
                  "Deep Scan (blur, near-dupes, burst)",
                  "Advanced WhatsApp tools",
                  "Auto-cleanup scheduler",
                  "Full scan history",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Yearly tier */}
            <div className="rotating-border animate-on-scroll">
              <div className="relative rounded-[1rem] bg-[#141414] p-8 dark:bg-[#141414] [html:not(.dark)_&]:bg-white">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-emerald-400">
                    Premium Yearly
                  </p>
                  <Badge className="shimmer-badge text-white text-xs">
                    {product.pricing.yearlySavings}
                  </Badge>
                </div>
                <p className="mt-2 text-3xl font-bold text-white/90 dark:text-white/90 [html:not(.dark)_&]:text-black/80">
                  {product.pricing.yearly}
                </p>
                <p className="mt-1 text-sm text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
                  {product.pricing.freeTrial}
                </p>
                <div className="mt-6 h-px bg-white/[0.06]" />
                <ul className="mt-6 space-y-3">
                  {[
                    "Everything in Premium",
                    "3-day free trial",
                    "₹25/mo effective price",
                    "Best value for regular users",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ─── */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <div className="glass-card mx-auto max-w-2xl p-12 animate-on-scroll">
          <h2 className="text-headline gradient-text">Coming Soon</h2>
          <p className="mt-4 text-xl text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50">
            PhotoFresh will be available on Google Play soon.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 px-6 py-3 text-sm font-medium text-emerald-400">
            Stay tuned for launch
          </div>
        </div>
      </section>
    </div>
  );
}
