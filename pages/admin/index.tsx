import { NextPage } from "next";
import Link from "next/link";

const AdminPage: NextPage = () => {
  return (
    <div>
      <Link href="/admin/produkty">Produkty</Link>
      <Link href="/admin/kategorie">Kategorie</Link>
    </div>
  );
};

export default AdminPage;
