"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { hideCustomToast, showCustomToast } from "../Toast";
import { usePathname } from "next/navigation";

export const queryClient = new QueryClient();

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      showCustomToast();
      firstLoad.current = false;
    } else {
      hideCustomToast();
    }
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
