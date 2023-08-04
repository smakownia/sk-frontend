import type { AppProps } from "next/app";
import { Navbar } from "@/components";
import { BasketDrawerProvider, BasketProvider } from "@/features/basket";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BasketProvider>
      <BasketDrawerProvider>
        <Navbar />
        <Component {...pageProps} />
      </BasketDrawerProvider>
    </BasketProvider>
  );
}

export default MyApp;
