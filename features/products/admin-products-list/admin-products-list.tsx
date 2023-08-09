import { Button, XIcon } from "@/components";
import { useDeleteProductMutation, useProducts } from "@/features/products";
import Image from "next/image";

export function AdminProductsList() {
  const { mutate: deleteProduct } = useDeleteProductMutation();
  const { data: products } = useProducts();

  return (
    <div className="block overflow-x-auto rounded border border-neutral-50">
      <table className="w-full">
        <thead className="text-left border-b border-neutral-50 bg-neutral-10">
          <tr>
            <th className="px-6 py-3 font-medium">Zdjęcie</th>
            <th className="px-6 py-3 font-medium">Nazwa</th>
            <th className="px-6 py-3 font-medium">Opis</th>
            <th className="px-6 py-3 font-medium">Cena</th>
            <th />
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-50">
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
