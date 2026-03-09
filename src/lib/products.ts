// Copyright 2026 Agam Labs. All rights reserved.

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: "live" | "coming-soon";
  playStoreUrl?: string;
  pricing?: { free: string; premium: string; premiumPrice: string };
  features: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  privacy: {
    lastUpdated: string;
    developer: string;
    contactEmail: string;
    sections: { title: string; content: string }[];
  };
}

export const products: Product[] = [
  {
    slug: "photofresh",
    name: "PhotoFresh",
    tagline: "Clean gallery. Clear mind.",
    description:
      "Your gallery is full of duplicates, blurry shots, and old screenshots you'll never open again. PhotoFresh finds them all — and helps you clean up in minutes. Everything runs on your device. No uploads. No cloud. No accounts. Your photos stay yours.",
    status: "live",
    pricing: {
      free: "Scan your entire gallery and delete a limited number of items",
      premium: "Unlimited cleanup and advanced detection features",
      premiumPrice: "₹299 one-time",
    },
    features: [
      {
        title: "Duplicate Detection",
        description:
          "Finds near-identical photos using perceptual hashing — even if they've been resized or slightly edited.",
      },
      {
        title: "Blur Detection",
        description:
          "Spots blurry and out-of-focus photos so you can keep only the sharp ones.",
      },
      {
        title: "Old Media Cleanup",
        description:
          "Surface screenshots, memes, and media older than a year that's just taking up space.",
      },
      {
        title: "Safe Deletion",
        description:
          "Every delete goes through Android's system trash — recoverable for 30 days. Nothing is permanent until you say so.",
      },
      {
        title: "WhatsApp Cleaner",
        description:
          "Scans your WhatsApp media folder for forwarded memes, old images, and duplicates clogging your storage.",
      },
      {
        title: "100% Offline",
        description:
          "No internet permission. No analytics. No tracking. Not even crash reports. Your data never leaves your phone.",
      },
    ],
    faqs: [
      {
        question: "Does PhotoFresh access my photos?",
        answer:
          "Yes, with your permission — but it never uploads them. All scanning and analysis happens entirely on your device. We have no servers, no cloud, no way to see your photos even if we wanted to.",
      },
      {
        question: "Is my data sent anywhere?",
        answer:
          "No. PhotoFresh does not have internet access. Zero data leaves your device. The only network activity is Google Play Billing if you purchase premium — and that's handled by Google, not us.",
      },
      {
        question: "How do I restore deleted photos?",
        answer:
          "PhotoFresh moves deleted items to Android's system trash, where they're recoverable for 30 days. Open your device's Gallery or Files app and look for the Trash or Recently Deleted section.",
      },
      {
        question: "Is PhotoFresh free?",
        answer:
          "Free users can scan their entire gallery and delete a limited number of items. PhotoFresh Premium (₹299 one-time) unlocks unlimited cleanup and advanced detection features.",
      },
      {
        question: "Why does PhotoFresh need the notification permission?",
        answer:
          "Only for optional cleanup reminders. You can deny this permission and the app works perfectly fine without it.",
      },
      {
        question: "What about WhatsApp photos?",
        answer:
          "PhotoFresh can scan your WhatsApp media folder to find forwarded memes, duplicates, and old images. This requires you to manually grant access via Android's folder picker — we never access it without your explicit action.",
      },
    ],
    privacy: {
      lastUpdated: "March 8, 2026",
      developer: "Agam Labs (Swaminathan K)",
      contactEmail: "agamlabs@gmail.com",
      sections: [
        {
          title: "1. Overview",
          content:
            "PhotoFresh is a privacy-first gallery cleaner for Android. It runs entirely on your device. We do not collect, store, or transmit any personal data.",
        },
        {
          title: "2. Data We Collect",
          content:
            "None. PhotoFresh does not collect any data. Specifically:\n• No personal information (name, email, phone number)\n• No device identifiers\n• No usage analytics or crash reports\n• No location data\n• No browsing history\n• No cookies or tracking pixels",
        },
        {
          title: "3. Data We Access (On Your Device Only)",
          content:
            "PhotoFresh accesses your photos and videos through Android's MediaStore API to analyze your gallery. This includes:\n• File metadata (size, date, type, folder name)\n• Image thumbnails (for duplicate and blur detection)\n• WhatsApp media folder (via Storage Access Framework, with your explicit permission)\n\nThis data is processed entirely on your device. It is never uploaded, transmitted, or shared with anyone — including us.",
        },
        {
          title: "4. Internet Access",
          content:
            "PhotoFresh does not use the INTERNET permission. The only exception is Google Play Billing for premium purchases, which is handled entirely by Google Play Services.",
        },
        {
          title: "5. Third-Party Services",
          content:
            "PhotoFresh does not integrate any third-party SDKs, analytics tools, advertising networks, or cloud services. There is no Firebase, no Crashlytics, no Mixpanel, no Amplitude — nothing.",
        },
        {
          title: "6. Data Deletion",
          content:
            "When you delete items through PhotoFresh, they are moved to your device's system trash (recoverable for 30 days via Android's built-in trash). PhotoFresh uses Android's standard MediaStore.createDeleteRequest API, which requires your explicit confirmation before any deletion occurs.",
        },
        {
          title: "7. Data Storage",
          content:
            "Scan results and app preferences are stored locally on your device using Android's Room database and SharedPreferences. This data never leaves your device and is automatically removed if you uninstall the app.",
        },
        {
          title: "8. Children's Privacy",
          content:
            "PhotoFresh is not directed at children under 13. We do not knowingly collect any data from children — or from anyone.",
        },
        {
          title: "9. Permissions",
          content:
            "• READ_MEDIA_IMAGES / READ_MEDIA_VIDEO: To scan your gallery\n• READ_MEDIA_VISUAL_USER_SELECTED: For partial photo access (Android 14+)\n• POST_NOTIFICATIONS: For optional cleanup reminders\n• Storage Access Framework: For WhatsApp folder access (user-initiated)",
        },
        {
          title: "10. Changes to This Policy",
          content:
            "If we update this policy, we will post the new version at this URL. Since we collect no data, changes are unlikely.",
        },
        {
          title: "11. Contact",
          content:
            "For questions about this privacy policy:\nEmail: agamlabs@gmail.com",
        },
      ],
    },
  },
  {
    slug: "notifresh",
    name: "NotiFresh",
    tagline: "Tame your notifications.",
    description:
      "NotiFresh helps you take control of your Android notifications. Smart categorization, quiet hours, and batch management — all on-device, all private.",
    status: "coming-soon",
    features: [],
    faqs: [],
    privacy: {
      lastUpdated: "March 8, 2026",
      developer: "Agam Labs (Swaminathan K)",
      contactEmail: "agamlabs@gmail.com",
      sections: [
        {
          title: "1. Overview",
          content:
            "NotiFresh is a privacy-first notification manager for Android. Like all Agam Labs apps, it runs entirely on your device. We do not collect, store, or transmit any personal data.",
        },
        {
          title: "2. Data Collection",
          content:
            "None. NotiFresh does not collect any data. Full privacy policy will be published before launch.",
        },
        {
          title: "3. Contact",
          content:
            "For questions about this privacy policy:\nEmail: agamlabs@gmail.com",
        },
      ],
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
