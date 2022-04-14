import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "react-datepicker/dist/react-datepicker.css";
import "../components/AddTaskDrawer/styles.css";
import MockHeader from "../components/MockHeader/MockHeader";
import "../styles/globals.css";
import customTheme from "../utils/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ChakraProvider theme={customTheme}>
        <MockHeader />
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
}

export default MyApp;
