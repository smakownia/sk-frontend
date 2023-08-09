import { Button, XIcon } from "@/components";
import { useDeleteProductMutation } from "@/features/products";

export function ProductDeleteButton({ id }: { id: string }) {
  const { mutate: deleteProduct } = useDeleteProductMutation();

  return (
    <Button
      className="px-2"
      colorScheme="primaryLight"
      onClick={() => deleteProduct(id)}
    >
      <XIcon className="w-3 h-3" />
    </Button>
  );
}
