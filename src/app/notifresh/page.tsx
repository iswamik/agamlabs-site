// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { ComingSoon } from "@/components/coming-soon";
import { getProduct } from "@/lib/products";

const product = getProduct("notifresh")!;

export const metadata: Metadata = {
  title: "NotiFresh — Coming Soon",
  description: product.description,
};

export default function NotiFreshPage() {
  return (
    <ComingSoon
      productName={product.name}
      tagline={product.tagline}
      description={product.description}
    />
  );
}
