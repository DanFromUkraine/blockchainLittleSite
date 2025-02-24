"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import { GoBackButtonUI, Link as LinkType, NavLinkUI } from "./UI";

export function GoBackButton() {
  const router = useRouter();
  const onClick = useCallback(() => router.back(), []);
  return <GoBackButtonUI onClick={onClick} />;
}

export function NavLink({ href, label }: LinkType) {
  const pathname = usePathname();

  return <NavLinkUI {...{ href, label, pathname }} />;
}
