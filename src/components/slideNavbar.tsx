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
              className={`${pathname == "/" ? styles.itemActive : styles.item}`}
            >
              <img src="/assets/Percent.svg" alt="" />
              Problem
            </li>
          </Link>
          <Link href="/Suggestion">
            <li
              className={`${
                pathname == "/Suggestion" ? styles.itemActive : styles.item
              }`}
            >
              <img src="/assets/Newspaper.svg" alt="" />
              Suggestion
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
