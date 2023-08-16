import { NextPage } from "next";
import Head from "next/head";
import { HeroSection } from "@/components";

const HomePage: NextPage = () => {
  return (
    <div className="mt-10">
      <Head>
        <title>Strona Główna - Smakownia</title>
      </Head>

      <HeroSection />
    </div>
  );
};

export default HomePage;
