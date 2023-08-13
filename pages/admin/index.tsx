import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const AdminPage: NextPage = () => {
  return (
    <div className="container mt-10 py-16">
      <Head>
        <title>Admin - Smakownia</title>
      </Head>

      <h1 className="mb-8 text-4xl font-medium">Admin</h1>

      <ul className="flex gap-4">
        <li>
          <Link className="btn" href="/admin/produkty">
            Produkty
          </Link>
        </li>
        <li>
          <Link className="btn" href="/admin/kategorie">
            Kategorie
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
