import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";

const geistSans: NextFontWithVariable = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono: NextFontWithVariable = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Justin Fagan",
  description: "Justin Fagan is a software engineer and entrepreneur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
