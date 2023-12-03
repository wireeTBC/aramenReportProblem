"use client";

import React from "react";
import styles from "../styles/Header.module.scss";

interface HeaderProps {
  userName: string;
  toggleSidebar: () => void;
  isSidebarOpen : boolean;
}

const Header: React.FC<HeaderProps> = ({ userName, toggleSidebar,isSidebarOpen }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div
          className="top-0 left-0 p-4 cursor-pointer"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
              // Close Icon
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
        </div>
        <img
          src="../assets/Aramen logo.svg"
          alt="A RAMEN Icon"
          width={32}
          height={42}
          className="pt-1"
        />
        <span>A RAMEN</span>
        
      </div>
    </header>
  );
};

export default Header;
