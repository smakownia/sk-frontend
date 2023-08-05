import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import type { Category, Product } from "@/features/products";
import {
  getAllCategoriesWithProducts,
  ProductsCategoriesList,
} from "@/features/products";

type MenuPageProps = {
  categories: Category[];
  products: Product[][];
};

const MenuPage: NextPage<MenuPageProps> = ({ categories, products }) => {
  return (
    <div className="pt-16 pb-8">
      <Head>
        <title>Menu - Smakownia</title>
      </Head>

      <ProductsCategoriesList categories={categories} products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: await getAllCategoriesWithProducts() };
};

export default MenuPage;
