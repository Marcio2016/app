import { NavbarItemLinkProps } from "./types";
import { cn } from "@/helper/cn";
import Link from "next/link";

import { NavbarListItem } from "./NavbarListemItem";

export const NavbarListLink = ({ href, children, className, ...props }: NavbarItemLinkProps) => {
  return (
    <NavbarListItem className={cn("p-0", className)}>
      <Link href={href}
        className='flex gap-2 items-center rounded-lg p-2 w-full' {...props}>
        {children}
      </Link>
    </NavbarListItem>
    
  );
}