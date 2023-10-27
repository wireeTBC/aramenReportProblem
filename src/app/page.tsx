import Header from "@/components/header";
import Image from "next/image";
import styles from "../styles/Page.module.scss";
import Link from "next/link";
import Table from "@/components/table";

export default function Home() {
  return (
    <main>
      <div className={`${styles.container}  h-screen`}>
        <div className="flex justify-between w-full">
          <h1 className={`${styles.title}`}>Promotion</h1>
          <Link className={styles.btnDone} href="/createPromotion">
            <div className={styles.done}>Create Promotion</div>
          </Link>
        </div>
        <div className={styles.card}>
          <Table />
        </div>
      </div>
    </main>
  );
}
