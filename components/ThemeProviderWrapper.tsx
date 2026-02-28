"use client"; // This marks it as a client component

import { ThemeProvider } from "@/components/theme-provider";
import { ReactNode } from "react";

export default function ThemeProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}