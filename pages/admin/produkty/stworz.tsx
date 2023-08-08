import { NextPage } from "next";
import Link from "next/link";
import { CreateProductForm } from "@/features/products";

const CreateProductPage: NextPage = () => {
  return (
    <div>
      <Link href="/admin">Admin</Link>
      <CreateProductForm />
    </div>
  );
};

export default CreateProductPage;
