import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Dash from "../components/Dashboard/Dash";
import { useAuth } from "../context/authContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { user } = useAuth();
  return (
    <div>
      {/* {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
      {!user && "No user foud"} */}
      <Dash />
    </div>
  );
};

export default Home;
