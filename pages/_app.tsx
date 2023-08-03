import type { AppProps } from "next/app";
import { Navbar } from "@/components";
import { BasketProvider } from "@/features/basket";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketProvider>
      <Navbar />
      <Component {...pageProps} />
    </BasketProvider>
  );
}

export default MyApp;
