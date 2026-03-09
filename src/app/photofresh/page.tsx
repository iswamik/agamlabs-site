// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FeatureCard } from "@/components/feature-card";
import { getProduct } from "@/lib/products";

const product = getProduct("photofresh")!;

export const metadata: Metadata = {
  title: "PhotoFresh — Clean Gallery, Clear Mind",
  description: product.description,
};

export default function PhotoFreshPage() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <section>
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold gradient-text">{product.name}</h1>
          <Badge className="shimmer-badge text-white">Available</Badge>
        </div>
        <p className="mt-2 italic text-brand-light">{product.tagline}</p>
        <p className="mt-4 text-muted-foreground">{product.description}</p>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Features</h2>
        <div className="grid gap-4 sm:grid-cols-2 animate-on-scroll">
          {product.features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <Separator />

      {/* Pricing */}
      {product.pricing && (
        <section>
          <h2 className="mb-4 text-xl font-semibold">Pricing</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="border-border bg-surface">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Free</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {product.pricing.free}
                </p>
              </CardContent>
            </Card>
            <Card className="border-brand bg-surface animate-[glow-pulse_4s_ease-in-out_infinite] transition-all duration-300 hover:-translate-y-0.5">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base text-brand-light">
                    Premium
                  </CardTitle>
                  <Badge variant="outline" className="border-brand text-brand-light animate-[border-glow_3s_ease-in-out_infinite]">
                    {product.pricing.premiumPrice}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {product.pricing.premium}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <Separator />

      {/* CTA */}
      <section className="py-8 text-center animate-on-scroll">
        <p className="text-lg text-muted-foreground">Coming soon on Google Play</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-6 py-2 text-sm text-brand-light">
          Stay tuned for launch
        </div>
      </section>
    </div>
  );
}
