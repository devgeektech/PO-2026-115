import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Navbar from "@/components/Navbar";
import DashboardShell from "@/components/DashboardShell";

/* ---------------- Google Font ---------------- */
const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-ubuntu",
});

/* ---------------- Metadata ---------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Next SSR App",
    template: "%s | Next SSR App",
  },
  description: "SEO-friendly Next.js application using SSR and Tailwind CSS",
  keywords: ["Next.js", "SSR", "Tailwind", "SEO", "Web App"],
  authors: [{ name: "Your Company" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Next SSR App",
    description: "Fast, secure and SEO-optimized Next.js app",
    url: "https://yourdomain.com",
    siteName: "Next SSR App",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next SSR App",
    description: "Modern SSR-first Next.js application",
  },
};

/* ---------------- Root Layout ---------------- */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ubuntu.variable}>
        <DashboardShell>{children}</DashboardShell>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
