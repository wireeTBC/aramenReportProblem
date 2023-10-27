'use client';

import React from "react";
import styles from "../styles/Header.module.scss";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img
          src="../assets/Aramen logo.svg"
          alt="A RAMEN Icon"
          width={32}
          height={42}
        />
        <span>A RAMEN</span>
      </div>
      <div className={styles.username}>
        <div className={styles.userprofile}>
          <h1>XA</h1>
        </div>
        <span>{userName}</span>
      </div>
    </header>
  );
};

export default Header;
