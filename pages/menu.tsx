import { GetServerSideProps, NextPage } from "next";
import { getAllProducts, Product, ProductsList } from "@/features/products";
import Head from "next/head";

type MenuPageProps = {
  products: Product[];
};

const MenuPage: NextPage<MenuPageProps> = ({ products }) => {
  return (
    <div className="pt-16 pb-8">
      <Head>
        <title>Menu - Smakownia</title>
      </Head>

      <ProductsList products={products} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: products } = await getAllProducts();

  return { props: { products } };
};

export default MenuPage;
