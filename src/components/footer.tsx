// Copyright 2026 Agam Labs. All rights reserved.
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative">
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="font-bold text-emerald-400">Agam Labs</p>
            <p className="mt-1 text-sm text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
              Built inside. For what&apos;s inside.
            </p>
          </div>

          {/* Products */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50">
              Products
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/photofresh"
                className="text-sm text-white/40 transition-colors duration-200 hover:text-emerald-400 dark:text-white/40 [html:not(.dark)_&]:text-black/40 [html:not(.dark)_&]:hover:text-emerald-600"
              >
                PhotoFresh
              </Link>
              <Link
                href="/notifresh"
                className="text-sm text-white/40 transition-colors duration-200 hover:text-emerald-400 dark:text-white/40 [html:not(.dark)_&]:text-black/40 [html:not(.dark)_&]:hover:text-emerald-600"
              >
                NotiFresh
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50">
              Company
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/about"
                className="text-sm text-white/40 transition-colors duration-200 hover:text-emerald-400 dark:text-white/40 [html:not(.dark)_&]:text-black/40 [html:not(.dark)_&]:hover:text-emerald-600"
              >
                About
              </Link>
              <Link
                href="/photofresh/privacy"
                className="text-sm text-white/40 transition-colors duration-200 hover:text-emerald-400 dark:text-white/40 [html:not(.dark)_&]:text-black/40 [html:not(.dark)_&]:hover:text-emerald-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/photofresh/support"
                className="text-sm text-white/40 transition-colors duration-200 hover:text-emerald-400 dark:text-white/40 [html:not(.dark)_&]:text-black/40 [html:not(.dark)_&]:hover:text-emerald-600"
              >
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        <p className="mt-6 text-center text-sm text-white/30 dark:text-white/30 [html:not(.dark)_&]:text-black/30">
          &copy; 2026 Agam Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
