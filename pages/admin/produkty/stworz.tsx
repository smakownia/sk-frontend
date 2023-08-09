import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CreateProductForm } from "@/features/products";

const CreateProductPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Stworz produkt - Smakownia</title>
      </Head>

      <Link href="/admin">Admin</Link>
      <CreateProductForm />
    </div>
  );
};

export default CreateProductPage;
