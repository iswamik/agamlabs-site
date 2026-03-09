// Copyright 2026 Agam Labs. All rights reserved.
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://agamlabs.dev/sitemap.xml",
  };
}
