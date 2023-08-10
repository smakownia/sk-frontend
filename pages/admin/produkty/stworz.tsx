import { NextPage } from "next";
import Head from "next/head";
import { CreateProductForm } from "@/features/products";

const CreateProductPage: NextPage = () => {
  return (
    <div className="container mt-10 py-16">
      <Head>
        <title>Stworz produkt - Smakownia</title>
      </Head>

      <CreateProductForm />
    </div>
  );
};

export default CreateProductPage;
