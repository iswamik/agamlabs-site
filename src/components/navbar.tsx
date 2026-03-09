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

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/photofresh", label: "PhotoFresh" },
  { href: "/notifresh", label: "NotiFresh" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-surface/60 backdrop-blur-md backdrop-saturate-150 transition-all duration-300">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-xl font-bold text-brand-light transition-all duration-300 hover:text-brand hover:drop-shadow-[0_0_8px_rgba(76,175,80,0.4)]"
        >
          Agam Labs
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative rounded-md px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-brand after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-3/4"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
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
            <SheetContent side="right" className="w-64 bg-surface">
              <SheetHeader>
                <SheetTitle className="text-brand-light">Agam Labs</SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
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
