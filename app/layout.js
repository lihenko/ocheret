import "../styles/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin", "cyrillic"], // додаємо кирилицю
  variable: "--font-inter",        // для Tailwind
  display: "swap",                 // щоб текст відразу відображався
});

export const metadata = {
  title: "Очерет",
  description: "Перевірені майстри у Камʼянському: електрики, сантехніки, ремонт квартир. Швидкий підбір спеціаліста.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32" },
      { url: "/favicon-16x16.png", sizes: "16x16" }
    ]
  },
  verification: {
    google: "2YihlYbouhjdUSllMbdxcygnJCeQsEfXNqx3XFOlzpQ",
  },
  robots: {
    index: true,
    follow: true
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={inter.variable}>
      <head />
      <body className="bg-gray-50">
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6RV5TMKKGJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6RV5TMKKGJ');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
