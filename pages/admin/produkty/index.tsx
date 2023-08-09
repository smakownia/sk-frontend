import { NextPage } from "next";
import Link from "next/link";
import { AdminProductsList } from "@/features/products";

const AdminProductsPage: NextPage = () => {
  return (
    <div className="container flex flex-col gap-4 pt-24 pb-8">
      <h1 className="text-4xl font-medium">Produkty</h1>
      <Link className="btn btn-primary" href="/admin/produkty/stworz">
        Stwórz produkt
      </Link>
      <AdminProductsList />
    </div>
  );
};

export default AdminProductsPage;
