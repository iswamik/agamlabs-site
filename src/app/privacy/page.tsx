// Copyright 2026 Agam Labs. All rights reserved.
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Agam Labs privacy policy. We collect zero data — no cookies, no analytics, no tracking. Your privacy is the architecture.",
};

const sections = [
  {
    title: "1. Overview",
    content:
      "Agam Labs builds privacy-first Android apps for Indian users. This policy covers our company website (agamlabs.dev) and general data practices. Individual app policies are linked below.",
  },
  {
    title: "2. Website Data",
    content:
      "This website does not use cookies, analytics, tracking pixels, or third-party scripts. We do not collect any data about your visit. There are no sign-ups, no accounts, no forms that transmit data to us.",
  },
  {
    title: "3. Our Apps",
    content:
      "Each Agam Labs app has its own privacy policy with specific details about permissions and on-device data handling. Please refer to the individual app policies for complete information.",
  },
  {
    title: "4. Data Collection",
    content:
      "None. Agam Labs does not collect, store, process, or transmit any personal data — not from this website, and not from our apps. We have no databases, no user accounts, no analytics dashboards.",
  },
  {
    title: "5. Third-Party Services",
    content:
      "This website is hosted on Cloudflare Pages. Cloudflare may collect standard infrastructure logs (IP addresses, request timestamps) as part of their hosting service. We do not access or process these logs. Our apps use Google Play Billing for premium purchases, handled entirely by Google Play Services.",
  },
  {
    title: "6. Children's Privacy",
    content:
      "Our services are not directed at children under 13. Since we collect no data from anyone, no children's data is collected either.",
  },
  {
    title: "7. Changes to This Policy",
    content:
      "If we update this policy, the new version will be posted at this URL. Since we collect no data, changes are unlikely.",
  },
  {
    title: "8. Contact",
    content: "For questions about this privacy policy:\nEmail: hello@agamlabs.dev",
  },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <header className="animate-on-scroll">
        <p className="text-label">Privacy Policy</p>
        <h1 className="text-headline mt-3">Agam Labs</h1>
        <p className="mt-3 text-sm text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
          Last updated: March 9, 2026 &middot; Agam Labs (Swaminathan K)
        </p>
      </header>

      <div className="mt-8 h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent" />

      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="animate-on-scroll">
            <h2 className="text-lg font-semibold text-emerald-400">
              {section.title}
            </h2>
            <div className="mt-3 space-y-2">
              {section.content.split("\n").map((line, i) =>
                line.startsWith("•") ? (
                  <li
                    key={i}
                    className="ml-4 list-inside text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50 leading-relaxed"
                  >
                    {line.slice(2)}
                  </li>
                ) : (
                  <p
                    key={i}
                    className="text-white/60 dark:text-white/60 [html:not(.dark)_&]:text-black/50 leading-relaxed"
                  >
                    {line}
                  </p>
                ),
              )}
            </div>
            {section.title === "3. Our Apps" && (
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/photofresh/privacy"
                  className="text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  PhotoFresh Privacy Policy &rarr;
                </Link>
                <Link
                  href="/notifresh/privacy"
                  className="text-emerald-400 transition-colors hover:text-emerald-300"
                >
                  NotiFresh Privacy Policy &rarr;
                </Link>
              </div>
            )}
          </section>
        ))}
      </div>

      <div className="mt-12 h-px bg-gradient-to-r from-emerald-500/30 via-emerald-500/10 to-transparent" />

      <p className="mt-8 text-white/40 dark:text-white/40 [html:not(.dark)_&]:text-black/40">
        For questions about this privacy policy:{" "}
        <a
          href="mailto:hello@agamlabs.dev"
          className="text-emerald-400 transition-colors hover:text-emerald-300"
        >
          hello@agamlabs.dev
        </a>
      </p>
    </div>
  );
}
