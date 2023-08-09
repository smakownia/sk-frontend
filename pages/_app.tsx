import { useState } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Navbar } from "@/components";
import { BasketDrawerProvider } from "@/features/basket";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();
  const isAdminPage = router.pathname.startsWith("/admin");

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {isAdminPage ? (
          <Component {...pageProps} />
        ) : (
          <BasketDrawerProvider>
            <Navbar />
            <Component {...pageProps} />
          </BasketDrawerProvider>
        )}
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
