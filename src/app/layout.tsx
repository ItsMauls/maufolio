import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layouts/Layout";
import { Analytics } from "@vercel/analytics/react"
import { METADATA_DESCRIPTION } from "@/constants/profile";
const title = "Maulana Ibrahim Adiputra - Software Engineer | Web Developer"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title,
  description: METADATA_DESCRIPTION,
  openGraph: {
    title,
    description: METADATA_DESCRIPTION,
    url: 'https://mauportofolio.site',
    siteName: "Maulana Ibrahim Adiputra - Software Engineer Portfolio",
    images: [
      {
        url: "/images/foto_linkedin.png",
        width: 800,
        height: 600,
      },
      {
        url: "/images/foto_linkedin.png",
        width: 1800,
        height: 1600,
        alt: 'Maulana Ibrahim Adiputra - Software Engineer',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950`}>
        <Layout>
          {children}
          <Analytics />
        </Layout>
      </body>
    </html>
  );
}
