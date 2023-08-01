"use client";

import { useCallback, useState } from "react";
import { DisclosureType } from "./types";

export function useDisclosure(): DisclosureType {
  const [isVisible, setIsVisible] = useState(false);

  const open = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const close = useCallback(() => {
    setIsVisible(false);
  }, [setIsVisible]);

  return { isVisible, open, close };
}
