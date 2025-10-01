import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: "/shortcut.png",
    shortcut: "/shortcut.png",
    apple: "/shortcut.png",
  },
  metadataBase: new URL("https://learnshortcuts.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
