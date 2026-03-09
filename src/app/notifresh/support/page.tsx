// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — NotiFresh",
  description: "NotiFresh support. Contact Agam Labs for help.",
};

export default function NotiFreshSupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <header className="animate-on-scroll">
        <p className="text-label">Support</p>
        <h1 className="text-headline mt-3">NotiFresh</h1>
      </header>

      <div className="glass-card mt-12 p-12 text-center animate-on-scroll">
        <Badge
          variant="outline"
          className="border-emerald-500/30 text-emerald-400"
        >
          Coming Soon
        </Badge>
        <p className="mt-6 text-lg text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50">
          NotiFresh is not yet available. Support will be available when the app
          launches.
        </p>
        <div className="mt-8 h-px bg-white/[0.06]" />
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/10">
            <Mail className="h-5 w-5 text-emerald-400" />
          </div>
          <p className="text-sm text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
            General questions?
          </p>
          <a
            href="mailto:hello@agamlabs.dev"
            className="text-emerald-400 transition-colors hover:text-emerald-300"
          >
            hello@agamlabs.dev
          </a>
        </div>
      </div>
    </div>
  );
}
