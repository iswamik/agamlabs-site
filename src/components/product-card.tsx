// Copyright 2026 Agam Labs. All rights reserved.
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_var(--brand-glow)] hover:border-brand/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{product.name}</CardTitle>
          <Badge
            variant={product.status === "live" ? "default" : "secondary"}
            className={
              product.status === "live" ? "shimmer-badge text-white" : "animate-pulse"
            }
          >
            {product.status === "live" ? "Available" : "Coming Soon"}
          </Badge>
        </div>
        <CardDescription className="text-brand-light italic">
          {product.tagline}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <Link
          href={`/${product.slug}`}
          className="inline-flex h-8 w-full items-center justify-center rounded-lg border border-border bg-background px-2.5 text-sm font-medium transition-all duration-300 hover:bg-muted hover:text-foreground hover:border-brand/40"
        >
          {product.status === "live" ? "Learn More" : "View Details"}
        </Link>
      </CardContent>
    </Card>
  );
}
