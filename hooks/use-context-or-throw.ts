import { Context, useContext } from "react";
import { ContextNullError } from "@/lib/errors";

export function useContextOrThrow<T>(context: Context<T>) {
  const ctx = useContext(context);

  if (ctx === null) {
    throw new ContextNullError(context.displayName);
  }

  return ctx;
}
