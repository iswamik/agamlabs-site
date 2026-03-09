// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import { getProduct } from "@/lib/products";

const product = getProduct("photofresh")!;
const { privacy } = product;

export const metadata: Metadata = {
  title: "Privacy Policy — PhotoFresh",
  description:
    "PhotoFresh privacy policy. No data collected. No data shared. No data transmitted. Everything stays on your device.",
};

export default function PhotoFreshPrivacyPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold">
          Privacy Policy — {product.name}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Last updated: {privacy.lastUpdated} &middot; Developer:{" "}
          {privacy.developer}
        </p>
      </section>

      <Separator />

      {privacy.sections.map((section) => (
        <section key={section.title} className="space-y-2">
          <h2 className="relative inline-block text-lg font-semibold text-brand-light after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-8 after:bg-brand/40">
            {section.title}
          </h2>
          {section.content.split("\n").map((line, i) =>
            line.startsWith("•") ? (
              <li
                key={i}
                className="ml-4 list-inside text-sm text-muted-foreground"
              >
                {line.slice(2)}
              </li>
            ) : (
              <p key={i} className="text-sm text-muted-foreground">
                {line}
              </p>
            ),
          )}
        </section>
      ))}

      <Separator />

      <section>
        <p className="text-sm text-muted-foreground">
          For questions about this privacy policy:{" "}
          <a
            href={`mailto:${privacy.contactEmail}`}
            className="text-brand-light transition-colors hover:text-brand"
          >
            {privacy.contactEmail}
          </a>
        </p>
      </section>
    </div>
  );
}
