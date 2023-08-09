import { NextPage } from "next";
import Head from "next/head";
import { CreateProductForm } from "@/features/products";

const CreateProductPage: NextPage = () => {
  return (
    <div className="container pt-24 pb-8">
      <Head>
        <title>Stworz produkt - Smakownia</title>
      </Head>

      <CreateProductForm />
    </div>
  );
};

export default CreateProductPage;
