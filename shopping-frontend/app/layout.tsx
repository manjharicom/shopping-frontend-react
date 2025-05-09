import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "@/app/ui/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight:['400', '700'],
  style:['normal', 'italic'],
  subsets: ["latin"],
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Shopping List Manager",
  description: "Generated by Manjhari Ltd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
