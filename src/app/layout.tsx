import type { Metadata } from "next";
import "./globals.css";


import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Google Clone",
  description: "This is a Google Search clone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative min-h-screen'>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
