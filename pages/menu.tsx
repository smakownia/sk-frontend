import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { QueryClient, dehydrate } from "react-query";
import {
  CategoriesList,
  getCategories,
  getProducts,
} from "@/features/products";

const MenuPage: NextPage = () => {
  return (
    <div className="container mt-10 py-16">
      <Head>
        <title>Menu - Smakownia</title>
      </Head>

      <CategoriesList />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  queryClient.prefetchQuery("categories", getCategories);
  queryClient.prefetchQuery("products", getProducts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default MenuPage;
