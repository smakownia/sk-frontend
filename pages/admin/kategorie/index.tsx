import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { CategoriesTable } from "@/features/products";

const AdminCategoriesPage: NextPage = () => {
  return (
    <div className="container mt-10 py-16">
      <Head>
        <title>Kategorie - Smakownia</title>
      </Head>

      <h1 className="mb-8 text-4xl font-medium">Kategorie</h1>

      <Link className="btn btn-primary mb-8" href="/admin/kategorie/stworz">
        Stwórz kategorie
      </Link>

      <CategoriesTable />
    </div>
  );
};

export default AdminCategoriesPage;
