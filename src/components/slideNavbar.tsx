"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Slide.module.scss";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.slide}>
      <div className="pt-16">
        <span>Module</span>
        <ul>
          <Link href="/">
            <li
              className={`${pathname == "/" ? styles.itemActive : styles.item} mt-2`}
            >
              <img src="/assets/Percent.svg" alt="" />
               Problem / Suggestion
            </li>
          </Link>
          <Link href="/dashboard">
            <li
              className={`${
                pathname == "/dashboard" ? styles.itemActive : styles.item
              }`}
            >
              <img src="/assets/Newspaper.svg" alt="" />
              Dashboard
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
