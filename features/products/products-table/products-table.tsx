import { Table } from "@/components";
import { useProducts } from "@/features/products";
import { ProductRow } from "./product-row";

export function ProductsTable() {
  const { data: products } = useProducts();

  return (
    <Table>
      <Table.Head>
        <tr>
          <Table.H>Zdjęcie</Table.H>
          <Table.H>Nazwa</Table.H>
          <Table.H>Kategoria</Table.H>
          <Table.H>Opis</Table.H>
          <Table.H>Cena</Table.H>
          <Table.H />
        </tr>
      </Table.Head>

      <Table.Body>
        {products?.map((product) => (
          <ProductRow key={product.id} {...product} />
        ))}
      </Table.Body>
    </Table>
  );
}
