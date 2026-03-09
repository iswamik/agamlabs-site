// Copyright 2026 Agam Labs. All rights reserved.
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComingSoon({
  productName,
  tagline,
  description,
}: {
  productName: string;
  tagline: string;
  description: string;
}) {
  return (
    <div className="hero-glow flex min-h-[60vh] items-center justify-center">
      <Card className="mx-auto max-w-md border-border bg-surface text-center animate-[float_4s_ease-in-out_infinite]">
        <CardHeader>
          <Badge variant="secondary" className="mx-auto mb-2 w-fit animate-[glow-pulse_3s_ease-in-out_infinite]">
            Coming Soon
          </Badge>
          <CardTitle className="text-2xl">{productName}</CardTitle>
          <p className="text-brand-light italic">{tagline}</p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
}
