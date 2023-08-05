import { ComponentProps, forwardRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMergedClassName } from "@/hooks";

type NavLinkProps = ComponentProps<typeof Link> & {
  classNameActive?: string;
  classNameNotActive?: string;
};

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const {
      children,
      className,
      classNameActive,
      classNameNotActive,
      ...rest
    } = props;

    const router = useRouter();

    const classNameActiveMerged = useMergedClassName(
      "border-primary-500",
      classNameActive,
    );

    const classNameNotActiveMerged = useMergedClassName(
      "text-neutral-600 border-transparent hover:border-neutral-100 hover:text-black",
      classNameNotActive,
    );

    const classNameMerged = useMergedClassName(
      "transition-colors",
      router.pathname === rest.href
        ? classNameActiveMerged
        : classNameNotActiveMerged,
      className,
    );

    return (
      <Link ref={ref} className={classNameMerged} {...rest}>
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";
