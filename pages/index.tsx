import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";
import styles from "../styles/Home.module.css";
import { User } from "../utils/types";

const Home: NextPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const { user } = useAuth();
  useEffect(() => {
    setLoggedInUser(user);
  }, [user]);
  return (
    <div>
      {loggedInUser && <pre>{JSON.stringify(loggedInUser, null, 2)}</pre>}
      {!loggedInUser && "No user foud"}
    </div>
  );
};

export default Home;
