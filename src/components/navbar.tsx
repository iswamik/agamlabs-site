// Copyright 2026 Agam Labs. All rights reserved.
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { AgamLogomark } from "@/components/logos/agam-logo";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/photofresh", label: "PhotoFresh" },
  { href: "/notifresh", label: "NotiFresh" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0a0a0a]/60 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 dark:border-white/[0.08] dark:bg-[#0a0a0a]/60 [html:not(.dark)_&]:border-black/[0.06] [html:not(.dark)_&]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-emerald-400 transition-all duration-300 hover:text-emerald-300 hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]"
        >
          <AgamLogomark size={24} className="text-emerald-400" />
          Agam Labs
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-4 py-2 text-sm text-white/60 transition-all duration-200 hover:text-white/90 dark:text-white/60 dark:hover:text-white/90 [html:not(.dark)_&]:text-black/50 [html:not(.dark)_&]:hover:text-black/80"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile nav */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-64 bg-[#141414] dark:bg-[#141414] [html:not(.dark)_&]:bg-white">
              <SheetHeader>
                <SheetTitle className="text-emerald-400">Agam Labs</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-white/60 transition-colors hover:bg-white/[0.05] hover:text-white/90 dark:text-white/60 dark:hover:bg-white/[0.05] dark:hover:text-white/90 [html:not(.dark)_&]:text-black/60 [html:not(.dark)_&]:hover:bg-black/[0.03] [html:not(.dark)_&]:hover:text-black/80"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
