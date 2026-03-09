// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { getProduct } from "@/lib/products";

const product = getProduct("notifresh")!;
const { privacy } = product;

export const metadata: Metadata = {
  title: "Privacy Policy — NotiFresh",
  description:
    "NotiFresh privacy policy. No data collected. Full policy will be published before launch.",
};

export default function NotiFreshPrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header className="animate-on-scroll">
        <p className="text-label">Privacy Policy</p>
        <h1 className="text-headline mt-3">{product.name}</h1>
        <p className="mt-3 text-sm text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
          Last updated: {privacy.lastUpdated} &middot; {privacy.developer}
        </p>
      </header>

      <div className="mt-8 h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent" />

      <div className="mt-12 space-y-10">
        {privacy.sections.map((section) => (
          <section key={section.title} className="animate-on-scroll">
            <h2 className="text-lg font-semibold text-emerald-400">
              {section.title}
            </h2>
            <div className="mt-3 space-y-2">
              {section.content.split("\n").map((line, i) => (
                <p
                  key={i}
                  className="text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50 leading-relaxed"
                >
                  {line}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent" />

      <p className="mt-8 text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
        For questions:{" "}
        <a
          href={`mailto:${privacy.contactEmail}`}
          className="text-emerald-400 transition-colors hover:text-emerald-300"
        >
          {privacy.contactEmail}
        </a>
      </p>
    </div>
  );
}
