import { useMemo } from "react";
import Image from "next/image";
import { Table } from "@/components";
import { Product, useCategories } from "@/features/products";
import { ProductDeleteButton } from "./product-delete-button";

export function ProductRow(product: Product) {
  const { id, categoryId, imageUrl, name, description, price } = product;
  const { data: categories } = useCategories();

  const categoryName = useMemo(
    () => categories?.find((category) => category.id === categoryId)?.name,
    [categories, categoryId],
  );

  return (
    <tr>
      <Table.D>{categoryName}</Table.D>
      <Table.D>
        <Image width={60} height={60} alt={name} src={imageUrl} />
      </Table.D>
      <Table.D>{name}</Table.D>
      <Table.D>{description}</Table.D>
      <Table.D>{price.formatted}</Table.D>
      <Table.D>
        <ProductDeleteButton id={id} />
      </Table.D>
    </tr>
  );
}
