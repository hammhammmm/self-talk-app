import './globals.css'
import type { Metadata } from 'next'
import { Sriracha } from 'next/font/google'

const sriracha = Sriracha({
  weight: '400',
  subsets: ["thai"]
})

const title = `Self Talk | Everyday`;
const description = "Self Talk | Everyday";
const keywords = ["self talk,self love,self care"];

export const metadata: Metadata = {
  title: title,
  description: description,
  generator: "Next.js",
  keywords: keywords,
  authors: [
    { name: "Thitipat Na Nakorn" },
    {
      name: "Thitipat Na Nakorn",
      url: "https://www.linkedin.com/in/thitipat-na-nakorn/",
    },
    {
      name: "Thitipat Na Nakorn",
      url: "https://www.tiktok.com/@hamm.hammmm",
    },
    {
      name: "Thitipat Na Nakorn",
      url: "https://github.com/hammhammmm",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/apple-touch-icon.png" },
    { rel: "icon", url: "icons/favicon-32x32.png" },
  ],
  openGraph: {
    type: "website",
    url: process.env.NEXT_PUBLIC_URL,
    title: title,
    description: description,
    siteName: title,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/cover.png`,
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={sriracha.className}>{children}</body>
    </html>
  )
}
