"use client";

import { ReactElement, ReactNode } from "react";
import { DisclosureContext } from "./disclosure-context";
import { useDisclosureContext } from "./use-disclosure-context";
import { DisclosureType } from "./types";

type DisclosureProviderProps = {
  children: ReactNode;
  disclosure: DisclosureType;
};

function DisclosureProvider({ children, disclosure }: DisclosureProviderProps) {
  return (
    <DisclosureContext.Provider value={disclosure}>
      {children}
    </DisclosureContext.Provider>
  );
}

function Content({ children }: { children: ReactElement }) {
  const { isVisible } = useDisclosureContext();

  if (!isVisible) return null;

  return children;
}

export const Disclosure = Object.assign(DisclosureProvider, { Content });
