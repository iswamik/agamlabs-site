// Copyright 2026 Agam Labs. All rights reserved.
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="hero-glow relative py-16 text-center">
        <h1 className="gradient-text text-4xl font-extrabold tracking-tight sm:text-5xl">
          Agam Labs
        </h1>
        <p className="mt-2 text-lg italic text-brand-light">
          Built inside. For what&apos;s inside.
        </p>
        <Badge className="mt-6 shimmer-badge text-white">
          Zero data collected. Ever.
        </Badge>
      </section>

      {/* Product Cards */}
      <section>
        <h2 className="mb-6 text-2xl font-bold animate-on-scroll">Our Products</h2>
        <div className="grid gap-6 sm:grid-cols-2 animate-on-scroll">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
