import { NextPage } from "next";
import Link from "next/link";

const AdminProductsPage: NextPage = () => {
  return (
    <div>
      <Link href="/admin">Admin</Link>
      <h1 className="text-4xl font-medium">Produkty</h1>
      <Link href="/admin/produkty/stworz">Stwórz produkt</Link>
    </div>
  );
};

export default AdminProductsPage;
