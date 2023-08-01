"use client";

import { createContext } from "react";
import { DisclosureType } from "./types";

export const DisclosureContext = createContext<DisclosureType | null>(null);

DisclosureContext.displayName = "DisclosureContext";
