import type { NextPage } from "next";
import MockHeader from "../components/MockHeader/MockHeader";
import styles from "../styles/Home.module.css";

const Booking: NextPage = () => {
  return (
    <div className={styles.container}>
      <MockHeader />
    </div>
  );
};

export default Booking;
