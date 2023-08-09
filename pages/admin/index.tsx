import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const AdminPage: NextPage = () => {
  return (
    <div className="container pt-24 pb-8">
      <Head>
        <title>Admin - Smakownia</title>
      </Head>

      <h1 className="mb-4 text-4xl font-medium">Admin</h1>
      <Link className="btn btn-primary" href="/admin/produkty">
        Produkty
      </Link>
    </div>
  );
};

export default AdminPage;
