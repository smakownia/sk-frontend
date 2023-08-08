import { NextPage } from "next";
import Link from "next/link";

const AdminCategoriesPage: NextPage = () => {
  return (
    <div>
      <Link href="/admin">Admin</Link>
      Kategorie
    </div>
  );
};

export default AdminCategoriesPage;
