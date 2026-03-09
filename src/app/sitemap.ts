// Copyright 2026 Agam Labs. All rights reserved.
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agamlabs.dev";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/photofresh`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/notifresh`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/photofresh/support`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/notifresh/support`, lastModified: now, changeFrequency: "monthly", priority: 0.4 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/photofresh/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/notifresh/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}
