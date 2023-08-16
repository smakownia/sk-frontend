import { useState } from "react";
import { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Footer, Navbar } from "@/components";
import { BasketDrawerProvider } from "@/features/basket";
import {
  IdentityProvider,
  LoginFormProvider,
  RegisterFormProvider,
} from "@/features/identity";
import "@/styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <IdentityProvider>
          <BasketDrawerProvider>
            <RegisterFormProvider>
              <LoginFormProvider>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </LoginFormProvider>
            </RegisterFormProvider>
          </BasketDrawerProvider>
        </IdentityProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
