import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import { Navbar } from "@/components";
import { BasketDrawerProvider } from "@/features/basket";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");

  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateIfStale: false,
      }}
    >
      {isAdminPage ? (
        <Component {...pageProps} />
      ) : (
        <BasketDrawerProvider>
          <Navbar />
          <Component {...pageProps} />
        </BasketDrawerProvider>
      )}
    </SWRConfig>
  );
}

export default MyApp;
