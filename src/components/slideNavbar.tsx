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
          <Link href="/coupon">
            <li
              className={`${
                pathname == "/coupon" ? styles.itemActive : styles.item
              }`}
            >
              <img src="/assets/Ticket.svg" alt="" />
              Coupon
            </li>
          </Link>
          <Link href="/">
            <li
              className={`${pathname == "/" ? styles.itemActive : styles.item}`}
            >
              <img src="/assets/Percent.svg" alt="" />
              Promotion
            </li>
          </Link>
          <Link href="/news">
            <li
              className={`${
                pathname == "/news" ? styles.itemActive : styles.item
              }`}
            >
              <img src="/assets/Newspaper.svg" alt="" />
              News
            </li>
          </Link>
        </ul>
      </div>
      <div className={styles.item}>
        <img src="/assets/GearSix.svg" alt="" />
        <Link href="/contact">Setting</Link>
      </div>
    </nav>
  );
};

export default Sidebar;
