import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { AuthProvider } from "../context/authContext";
import { Header } from "../components/Header/Header";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <div>
      <AuthProvider>
        <ChakraProvider>
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
