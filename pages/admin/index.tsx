import { NextPage } from "next";
import Link from "next/link";

const AdminPage: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link className="btn btn-primary" href="/admin/produkty">
        Produkty
      </Link>
    </div>
  );
};

export default AdminPage;
