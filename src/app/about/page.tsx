// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Agam Labs — privacy-first Android apps built in India. No data collected, no cloud, everything on-device.",
};

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold gradient-text">About Agam Labs</h1>
        <p className="mt-2 italic text-brand-light">
          &ldquo;Agam&rdquo; means inside — in Tamil.
        </p>
      </section>

      <section className="space-y-4 animate-on-scroll">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground">
          We build Android apps that respect your privacy completely. No data
          collection. No cloud servers. No analytics. No tracking. Everything
          runs on your device, and your data never leaves it.
        </p>
        <p className="text-muted-foreground">
          In a world where every app wants your data, we chose a different path.
          We believe the best apps are the ones that work for you — not the ones
          that work on you.
        </p>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Our Philosophy</h2>
        <div className="grid gap-4 sm:grid-cols-2 animate-on-scroll">
          {[
            {
              title: "Privacy by Design",
              description:
                "Not as a feature, but as an architecture. Our apps don't have the INTERNET permission. They literally cannot send your data anywhere.",
            },
            {
              title: "Built for India",
              description:
                "Designed for the way Indians use their phones — WhatsApp forwards, group photos, screenshots, limited storage. Practical tools for real problems.",
            },
            {
              title: "Simple & Honest",
              description:
                "No dark patterns. No upsell pressure. No subscription traps. One-time purchase for premium. Free tier that's genuinely useful.",
            },
            {
              title: "On-Device Everything",
              description:
                "All processing happens on your phone. Scan results stay in local storage. Uninstall the app and everything is gone — because there's nothing on our side to begin with.",
            },
          ].map((item) => (
            <Card key={item.title} className="border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-alt">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-brand-light">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">The Name</h2>
        <p className="text-muted-foreground">
          &ldquo;Agam&rdquo; <span className="rounded bg-brand/10 px-1.5 py-0.5 font-semibold text-brand-light">(அகம்)</span> is a Tamil word meaning &ldquo;inside&rdquo;
          or &ldquo;within.&rdquo; It represents our core belief: your data
          belongs inside your device. Your photos, your notifications, your
          digital life — it&apos;s all yours. We just build the tools to help you
          manage it better.
        </p>
        <Badge variant="outline" className="border-brand text-brand-light">
          Built inside. For what&apos;s inside.
        </Badge>
      </section>

      <Separator />

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          Questions, feedback, or just want to say hi?
        </p>
        <p>
          <a
            href="mailto:agamlabs@gmail.com"
            className="text-brand-light transition-colors hover:text-brand"
          >
            agamlabs@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}
