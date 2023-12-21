"use client";

import React, { useEffect, useRef, useState } from "react";
import "./globals.css";
import Header from "@/components/header";
import Sidebar from "@/components/slideNavbar";
import { usePathname, useRouter } from "next/navigation";
import { getToken, isTokenValid } from "@/utils/auth";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    console.log(isSidebarOpen);
    setSidebarOpen(!isSidebarOpen);
  };
  const pathname = usePathname();
  const token = getToken() ?? "";
  useEffect(() => {
    if (!isTokenValid(token)) {
      router.push("/");
    }
  }, [router]);
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
          {pathname != "/" ? (
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
