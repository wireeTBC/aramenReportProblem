"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/Slide.module.scss";
import { usePathname } from "next/navigation";

const Sidebar: React.FC<{ isOpen: boolean; toggleSidebar: () => void }> = ({
  isOpen,
  toggleSidebar,
}) => {
  const pathname = usePathname();
  return (
    <nav
      className={`${styles.slide}  ${
        isOpen ? "" : "-translate-x-full"
      }  transition-transform ease-in-out duration-300 transform`}
    >
      <div className="pt-16">
        <span>Module</span>
        <ul>
          <Link href="/suggestion">
            <li
              className={`${
                pathname == "/" ? styles.itemActive : styles.item
              } mt-2`}
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
          <Link href="/userDelete">
            <li
              className={`${
                pathname == "/userDelete" ? styles.itemActive : styles.item
              }`}
            >
              <img src="/assets/Newspaper.svg" alt="" />
              User Delete
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
