// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Support — NotiFresh",
  description: "NotiFresh support. Contact Agam Labs for help.",
};

export default function NotiFreshSupportPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Card className="mx-auto max-w-md border-border bg-surface text-center">
        <CardHeader>
          <Badge variant="secondary" className="mx-auto mb-2 w-fit">
            Coming Soon
          </Badge>
          <CardTitle className="text-xl">NotiFresh Support</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            NotiFresh is not yet available. Support will be available when the
            app launches.
          </p>
          <p className="text-sm text-muted-foreground">
            General questions?{" "}
            <a
              href="mailto:agamlabs@gmail.com"
              className="text-brand-light transition-colors hover:text-brand"
            >
              agamlabs@gmail.com
            </a>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
