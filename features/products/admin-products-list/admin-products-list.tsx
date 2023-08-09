import { Button, XIcon } from "@/components";
import { useDeleteProductMutation, useProducts } from "@/features/products";
import Image from "next/image";

export function AdminProductsList() {
  const { mutate: deleteProduct } = useDeleteProductMutation();
  const { data: products } = useProducts();

  return (
    <div className="mx-auto w-fit rounded border border-neutral-50">
      <table>
        <thead className="text-left border-b border-neutral-50 bg-neutral-10">
          <tr>
            <th className="font-medium px-6 py-3">Zdjęcie</th>
            <th className="font-medium px-6 py-3">Nazwa</th>
            <th className="font-medium px-6 py-3">Opis</th>
            <th className="font-medium px-6 py-3">Cena</th>
            <th className="font-medium px-6 py-3">Akcje</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td className="px-6 py-3">
                <Image
                  width={60}
                  height={60}
                  alt={product.name}
                  src={`/${product.name}.png`}
                />
              </td>
              <td className="px-6 py-3">{product.name}</td>
              <td className="px-6 py-3">{product.description}</td>
              <td className="px-6 py-3">{product.price / 100}zł</td>
              <td className="px-6 py-3">
                <Button
                  className="px-2"
                  colorScheme="primaryLight"
                  onClick={() => deleteProduct(product.id)}
                >
                  <XIcon className="w-3 h-3" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
