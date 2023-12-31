import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { IdentityProtected, IdentityRole } from "@/features/identity";
import { ProductsTable } from "@/features/products";

const AdminProductsPage: NextPage = () => {
  return (
    <IdentityProtected role={IdentityRole.Admin}>
      <div className="container mt-10 py-16">
        <Head>
          <title>Produkty - Smakownia</title>
        </Head>

        <h1 className="mb-8 text-4xl font-medium">Produkty</h1>

        <Link className="btn mb-8" href="/admin/produkty/stworz">
          Stwórz produkt
        </Link>

        <ProductsTable />
      </div>
    </IdentityProtected>
  );
};

export default AdminProductsPage;
