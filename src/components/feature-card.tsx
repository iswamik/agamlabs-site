// Copyright 2026 Agam Labs. All rights reserved.
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card className="border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-alt relative overflow-hidden before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-brand before:transition-all before:duration-300 hover:before:w-[3px]">
      <CardHeader className="pb-2">
        <CardTitle className="text-base text-brand-light">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
