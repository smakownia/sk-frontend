import { Button, Table, XIcon } from "@/components";
import { useCategories, useDeleteCategoryMutation } from "@/features/products";

export function CategoriesTable() {
  const { data: categories } = useCategories();
  const { mutate: deleteCategory } = useDeleteCategoryMutation();

  return (
    <Table>
      <Table.Head>
        <tr>
          <Table.H>Nazwa</Table.H>
          <Table.H>Akcje</Table.H>
        </tr>
      </Table.Head>
      <Table.Body>
        {categories?.map(({ id, name }) => (
          <tr key={id}>
            <Table.D>{name}</Table.D>
            <Table.D>
              <Button
                className="px-2"
                colorScheme="primaryLight"
                onClick={() => deleteCategory(id)}
              >
                <XIcon className="w-3 h-3" />
              </Button>
            </Table.D>
          </tr>
        ))}
      </Table.Body>
    </Table>
  );
}
