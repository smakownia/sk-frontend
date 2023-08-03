import { ReactNode, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { twMerge } from "tailwind-merge";

type NavLinkProps = {
  children: ReactNode;
  href: string;
};

export function NavLink({ children, href }: NavLinkProps) {
  const router = useRouter();

  const mergedClassName = useMemo(
    () =>
      twMerge(
        router.pathname === href
          ? "border-primary-500"
          : "text-neutral-600 border-transparent hover:border-neutral-100 hover:text-black",
        `translate-y-px flex items-center h-full border-b-[2px] transition-colors`,
      ),
    [router, href],
  );

  return (
    <Link className={mergedClassName} href={href}>
      {children}
    </Link>
  );
}
