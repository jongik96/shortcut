import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - LearnShortcuts.dev",
  description: "Get in touch with LearnShortcuts.dev team. We're here to help you master keyboard shortcuts and improve your productivity.",
  keywords: [
    "contact",
    "support",
    "help",
    "feedback",
    "LearnShortcuts",
    "keyboard shortcuts",
    "productivity"
  ],
  openGraph: {
    title: "Contact Us - LearnShortcuts.dev",
    description: "Get in touch with LearnShortcuts.dev team. We're here to help you master keyboard shortcuts and improve your productivity.",
    url: "https://learnshortcuts.dev/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Us - LearnShortcuts.dev",
    description: "Get in touch with LearnShortcuts.dev team. We're here to help you master keyboard shortcuts and improve your productivity.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
