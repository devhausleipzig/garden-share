import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Link } from "@chakra-ui/react";

const MockHeader: NextPage = () => {
  return (
    <div>
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
