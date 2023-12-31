import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { IdentityProtected, IdentityRole } from "@/features/identity";
import { CategoriesTable } from "@/features/products";

const AdminCategoriesPage: NextPage = () => {
  return (
    <IdentityProtected role={IdentityRole.Admin}>
      <div className="container mt-10 py-16">
        <Head>
          <title>Kategorie - Smakownia</title>
        </Head>

        <h1 className="mb-8 text-4xl font-medium">Kategorie</h1>

        <Link className="btn mb-8" href="/admin/kategorie/stworz">
          Stwórz kategorie
        </Link>

        <CategoriesTable />
      </div>
    </IdentityProtected>
  );
};

export default AdminCategoriesPage;
