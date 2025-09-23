import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from '@/data/config';

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: 'linktree, social links, profile, bio, links, ajittree',
  authors: [{ name: 'Ajit Kumar' }],
  creator: 'Ajit Kumar',
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: 'AjitTree',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
