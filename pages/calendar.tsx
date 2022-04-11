import type { NextPage } from "next";
import MockHeader from "../components/MockHeader/MockHeader";
import styles from "../styles/Home.module.css";

const Calendar: NextPage = () => {
  return (
    <div className={styles.container}>
      <MockHeader />
    </div>
  );
};

export default Calendar;
