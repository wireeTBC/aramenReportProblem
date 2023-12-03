"use client";

import React, { useEffect, useRef, useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/slideNavbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "A RAMEN Report",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
  };
  const pathname = usePathname();

  return (
    <html
      lang="en"
      suppressHydrationWarning={true}
      style={{ backgroundColor: "#f2f3fa" }}
    >
      <head>
        <title>A RAMEN Report </title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="assets/Aramen logo.svg"
        ></link>
      </head>
      <body>
        <div>
          {pathname != '/' ? (
            <Header
              userName="Wirawat Jaiarree"
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
          ) : (
            <div></div>
          )}
        </div>

        <div className="flex flex-row">
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          ></Sidebar>

          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
