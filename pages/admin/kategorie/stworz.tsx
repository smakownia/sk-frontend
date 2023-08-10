import { NextPage } from "next";
import Head from "next/head";
import { CreateCategoryForm } from "@/features/products";

const CreateCategoryPage: NextPage = () => {
  return (
    <div className="container mt-10 py-16">
      <Head>
        <title>Stworz kategorie - Smakownia</title>
      </Head>

      <CreateCategoryForm />
    </div>
  );
};

export default CreateCategoryPage;
