import { NavbarItemListProps } from "./types";
import { cn } from "@/helper/cn";

export const NavbarListItem = ({ children, className, ...props }: NavbarItemListProps) => {
  return (
    <li className={cn("my-2 rounded-lg bg-transparent p-2 hover:bg-indigo-800/40 hover:text-slate-100 cursor-pointer flex gap-2 items-center", className)}>
      {children}
     </li>
  );
}