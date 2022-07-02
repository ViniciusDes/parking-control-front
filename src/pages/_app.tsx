import GlobalStyle from "../styles/global";
import type { AppProps } from "next/app";
// import "../styles/globals.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
