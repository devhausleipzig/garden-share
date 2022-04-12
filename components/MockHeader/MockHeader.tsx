import type { NextPage } from "next";

import styles from "../../styles/MockHeader.module.css";
import Link from "next/link";

const MockHeader: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/calendar">
        <a>Calendar</a>
      </Link>
      <Link href="/messageBoard">
        <a>Messages</a>
      </Link>
      <Link href="/tasks">
        <a>Tasks</a>
      </Link>
      <Link href="/booking">
        <a>Booking</a>
      </Link>
      <Link href="/admin">
        <a>Admin</a>
      </Link>
    </div>
  );
};

export default MockHeader;
