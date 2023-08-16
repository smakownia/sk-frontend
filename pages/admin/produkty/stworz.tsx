import { NextPage } from "next";
import Head from "next/head";
import { IdentityProtected, IdentityRole } from "@/features/identity";
import { CreateProductForm } from "@/features/products";

const CreateProductPage: NextPage = () => {
  return (
    <IdentityProtected role={IdentityRole.Admin}>
      <div className="container mt-10 py-16">
        <Head>
          <title>Stworz produkt - Smakownia</title>
        </Head>

        <CreateProductForm />
      </div>
    </IdentityProtected>
  );
};

export default CreateProductPage;
