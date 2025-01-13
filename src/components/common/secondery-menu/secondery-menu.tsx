"use client";
import { SeconderyMenuConstants } from "@/constants/menu-constants";
import { useNavigation } from "@/hooks/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SeconderyMenu = () => {
  const { onSetSection, section } = useNavigation();
  const pathName = usePathname();
  return (
    <div className="bg-gray-500">
      <div className="container_this flex items-center">
        {SeconderyMenuConstants.map((menu) => (
          <Link
            key={menu.id}
            href={menu.url}
            {...(menu.inPage && { onClick: () => onSetSection(menu.url) })}
            className={cn(
              pathName !== "/" && menu.inPage && "hidden",
              section === menu.url ? "bg-slate-300 px-2 py-2" : "px-5 py-2"
            )}
          >
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
