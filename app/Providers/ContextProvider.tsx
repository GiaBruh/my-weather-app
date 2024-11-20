"use client";

import * as React from "react";
import { GlobalContextProvider } from "@/app/context/globalContext";
export function ContextProvider({
  children,
  ...props
}: React.ComponentProps<typeof GlobalContextProvider>) {
  return <GlobalContextProvider {...props}>{children}</GlobalContextProvider>;
}
