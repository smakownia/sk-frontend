import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const AdminPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Head>
        <title>Admin - Smakownia</title>
      </Head>

      <Link className="btn btn-primary" href="/admin/produkty">
        Produkty
      </Link>
    </div>
  );
};

export default AdminPage;
