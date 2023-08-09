import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ProductsTable } from "@/features/products";

const AdminProductsPage: NextPage = () => {
  return (
    <div className="container flex flex-col gap-8 pt-24 pb-8">
      <Head>
        <title>Produkty - Smakownia</title>
      </Head>

      <h1 className="text-4xl font-medium">Produkty</h1>
      <Link className="btn btn-primary" href="/admin/produkty/stworz">
        Stwórz produkt
      </Link>
      <ProductsTable />
    </div>
  );
};

export default AdminProductsPage;
