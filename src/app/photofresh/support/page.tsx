// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProduct } from "@/lib/products";

const product = getProduct("photofresh")!;

export const metadata: Metadata = {
  title: "Support — PhotoFresh",
  description:
    "Get help with PhotoFresh. Contact Agam Labs support or browse frequently asked questions.",
};

export default function PhotoFreshSupportPage() {
  return (
    <div className="space-y-12">
      {/* Contact */}
      <section>
        <h1 className="text-2xl font-bold">Support — {product.name}</h1>
        <Card className="mt-6 border-brand bg-surface text-center animate-[glow-pulse_4s_ease-in-out_infinite]">
          <CardHeader>
            <CardTitle className="text-base">Need help?</CardTitle>
          </CardHeader>
          <CardContent>
            <a
              href={`mailto:${product.privacy.contactEmail}`}
              className="text-lg font-semibold text-brand-light transition-colors hover:text-brand"
            >
              {product.privacy.contactEmail}
            </a>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* FAQ */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">
          Frequently Asked Questions
        </h2>
        <Accordion className="space-y-2">
          {product.faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-lg border border-border bg-surface px-4 transition-all duration-200 hover:bg-surface-alt hover:border-brand/20"
            >
              <AccordionTrigger className="text-left text-sm font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
