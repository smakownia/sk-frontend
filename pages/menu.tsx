import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import {
  Category,
  getAllCategories,
  getAllProducts,
  Product,
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
  const { data: categories } = await getAllCategories();

  const products = await Promise.all<Product[]>(
    categories.map(async ({ id }) => (await getAllProducts(id)).data),
  );

  return { props: { categories, products } };
};

export default MenuPage;
