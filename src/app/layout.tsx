import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/slideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A RAMEN Report",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      style={{ backgroundColor: "#f2f3fa" }}
    >
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="assets/Aramen logo.svg"
        ></link>
      </head>
      <body>
        <Header userName="Wirawat Jaiarree" />
        <div className="flex flex-row">
          {/* <Sidebar></Sidebar> */}
          <div className="flex-1">{children}</div>
          {/* <div>test</div> */}
        </div>
      </body>
    </html>
  );
}
