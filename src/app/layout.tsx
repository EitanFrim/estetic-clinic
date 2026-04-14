import type { Metadata } from "next";
import { frankRuhlLibre, heebo } from "@/lib/fonts";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "ד״ר חיים טל | קליניקה לאסתטיקה רפואית",
  description:
    "קליניקה לאסתטיקה דנטלית ורפואית בחדרה. טיפולי בוטוקס, פילרים, אסתטיקה דנטלית ועיצוב הפנים.",
  keywords: [
    "אסתטיקה רפואית",
    "בוטוקס",
    "פילרים",
    "אסתטיקה דנטלית",
    "חדרה",
    "ד״ר חיים טל",
  ],
  openGraph: {
    title: "ד״ר חיים טל | קליניקה לאסתטיקה רפואית",
    description:
      "קליניקה לאסתטיקה דנטלית ורפואית בחדרה. טיפולי בוטוקס, פילרים ועיצוב הפנים.",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${frankRuhlLibre.variable} ${heebo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <Header />
        <div className="flex-1 overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
