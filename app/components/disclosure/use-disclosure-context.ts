"use client";

import { useContext } from "react";
import { DisclosureContext } from "./disclosure-context";
import { ContextNullError } from "@/app/lib/errors";

export function useDisclosureContext() {
  const context = useContext(DisclosureContext);

  if (!context) {
    throw new ContextNullError(DisclosureContext.displayName);
  }

  return context;
}
