import { NextPage } from "next";
import Head from "next/head";
import { IdentityProtected, IdentityRole } from "@/features/identity";
import { CreateCategoryForm } from "@/features/products";

const CreateCategoryPage: NextPage = () => {
  return (
    <IdentityProtected role={IdentityRole.Admin}>
      <div className="container mt-10 py-16">
        <Head>
          <title>Stworz kategorie - Smakownia</title>
        </Head>

        <CreateCategoryForm />
      </div>
    </IdentityProtected>
  );
};

export default CreateCategoryPage;
