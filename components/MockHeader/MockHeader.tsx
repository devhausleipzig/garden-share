import type { NextPage } from "next";

import styles from "../styles/MockHeader.module.css";
import { Link } from "@chakra-ui/react";

const MockHeader: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <Link href="/calendar">Calendar</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">SignUp</Link>
      <Link href="/message-board">Messages</Link>
      <Link href="/tasks">Tasks</Link>
      <Link href="/booking">Booking</Link>
      <Link href="/admin">Admin</Link>
    </div>
  );
};

export default MockHeader;
