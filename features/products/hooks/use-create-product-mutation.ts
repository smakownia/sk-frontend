import { Key } from "swr";
import useSWRMutation from "swr/mutation";
import { ApiErrorResponse } from "@/lib/types";
import {
  Product,
  CreateProductCommand,
  createProduct,
} from "@/features/products";

export function useCreateProductMutation() {
  return useSWRMutation<Product, ApiErrorResponse, Key, CreateProductCommand>(
    "/api/v1/products",
    (_: string, { arg }: { arg: CreateProductCommand }) => createProduct(arg),
  );
}
