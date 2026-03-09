// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { getProduct } from "@/lib/products";
import { NotiFreshLogomark } from "@/components/logos/notifresh-logo";

const product = getProduct("notifresh")!;

export const metadata: Metadata = {
  title: "NotiFresh — Coming Soon",
  description: product.description,
};

export default function NotiFreshPage() {
  return (
    <div className="relative">
      <section className="gradient-mesh flex min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center md:py-24">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 animate-on-scroll">
          <NotiFreshLogomark size={32} className="text-emerald-400" />
        </div>
        <p className="text-label mt-8 animate-on-scroll">Coming Soon</p>
        <h1 className="text-display gradient-text mt-4 animate-on-scroll">
          {product.name}
        </h1>
        <p className="mt-4 text-xl font-medium text-emerald-400 animate-on-scroll">
          {product.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-xl text-white/50 dark:text-white/50 [html:not(.dark)_&]:text-black/50 leading-relaxed animate-on-scroll">
          {product.description}
        </p>
        <Badge
          variant="outline"
          className="mt-8 border-emerald-500/30 px-5 py-2 text-sm !h-auto text-emerald-400 animate-on-scroll"
        >
          In Development
        </Badge>
        <p className="mt-8 text-sm text-white/30 dark:text-white/30 [html:not(.dark)_&]:text-black/30 animate-on-scroll">
          Questions?{" "}
          <a
            href="mailto:hello@agamlabs.dev"
            className="text-emerald-400 transition-colors hover:text-emerald-300"
          >
            hello@agamlabs.dev
          </a>
        </p>
      </section>
    </div>
  );
}
