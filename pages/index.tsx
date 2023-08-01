import { GetServerSideProps, NextPage } from "next";
import { Navbar } from "@/components";
import { BasketProvider } from "@/features/basket";
import { getAllProducts, Product, ProductsList } from "@/features/products";

type HomePageProps = {
  products: Product[];
};

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  return (
    <BasketProvider>
      <Navbar />
      <ProductsList products={products} />
    </BasketProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: products } = await getAllProducts();

  return { props: { products } };
};

export default HomePage;
