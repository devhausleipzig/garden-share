import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "react-datepicker/dist/react-datepicker.css";
// import "../components/AddTaskDrawer/styles.css";
import "../components/BookingForm/styles.css";

import customTheme from "../utils/theme";
import "../styles/globals.css";
import { AuthProvider } from "../context/authContext";
import { Header } from "../components/header/Header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh" }}>
      <AuthProvider>
        <ChakraProvider theme={customTheme}>
          {router.pathname === "/login" ||
          router.pathname === "/signup" ? null : (
            <Header />
          )}
          <Component {...pageProps} />
        </ChakraProvider>
      </AuthProvider>
    </div>
  );
}

export default MyApp;
