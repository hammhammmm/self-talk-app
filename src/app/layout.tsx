import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";


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
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_URL}/images/cover.png`}
      />
      <body>
        <div>{children}</div>
        <div className="absolute bottom-0 w-full bg-black/20 p-4">
          <div className="flex gap-2 items-center justify-center opacity-30">
            <p className=" capitalize text-center">self talk </p>
            <Link
              href={
                "https://www.tiktok.com/@hamm.hammmm?is_from_webapp=1&sender_device=pc"
              }
            >
              by hamm.hammmm
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
