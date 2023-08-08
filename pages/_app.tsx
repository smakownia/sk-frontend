import { AppProps } from "next/app";
import { SWRConfig } from "swr";
import { Navbar } from "@/components";
import { BasketDrawerProvider } from "@/features/basket";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
      }}
    >
      <BasketDrawerProvider>
        <Navbar />
        <Component {...pageProps} />
      </BasketDrawerProvider>
    </SWRConfig>
  );
}

export default MyApp;
