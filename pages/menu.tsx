import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { SWRConfig, SWRConfiguration } from "swr";
import {
  CategoriesList,
  getCategoriesWithProductsFallback,
} from "@/features/products";

type MenuPageProps = {
  fallback: SWRConfiguration["fallback"];
};

const MenuPage: NextPage<MenuPageProps> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>Menu - Smakownia</title>
      </Head>

      <div className="pt-16 pb-8">
        <CategoriesList />
      </div>
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      fallback: await getCategoriesWithProductsFallback(),
    },
  };
};

export default MenuPage;
