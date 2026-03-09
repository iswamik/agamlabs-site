// Copyright 2026 Agam Labs. All rights reserved.
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-surface">
      <div className="h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-bold text-brand-light">Agam Labs</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Built inside. For what&apos;s inside.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="mb-2 text-sm font-semibold text-foreground">
              Products
            </p>
            <div className="flex flex-col gap-1">
              <Link
                href="/photofresh"
                className="text-sm text-muted-foreground transition-all duration-200 hover:text-brand-light hover:translate-x-0.5"
              >
                PhotoFresh
              </Link>
              <Link
                href="/notifresh"
                className="text-sm text-muted-foreground transition-all duration-200 hover:text-brand-light hover:translate-x-0.5"
              >
                NotiFresh
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-2 text-sm font-semibold text-foreground">Legal</p>
            <div className="flex flex-col gap-1">
              <Link
                href="/photofresh/privacy"
                className="text-sm text-muted-foreground transition-all duration-200 hover:text-brand-light hover:translate-x-0.5"
              >
                Privacy Policy
              </Link>
              <Link
                href="/photofresh/support"
                className="text-sm text-muted-foreground transition-all duration-200 hover:text-brand-light hover:translate-x-0.5"
              >
                Support
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground transition-all duration-200 hover:text-brand-light hover:translate-x-0.5"
              >
                About
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; 2026 Agam Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
