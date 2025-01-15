"use client";

import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { ChevronDownIcon } from "lucide-react";
import { i18n } from "../../../../i18n-config";
import Image from "next/image";
export const LanguageSwitcher = () => {
  const { locales } = i18n;
  const locale = useLocale();
  const pathname = usePathname();
  const country = locales.find((l) => l.code === locale)?.icon;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="header-button h-[41px]">
        <div className="flex items-center gap-1">
          <span className="text-xl">
            <Image src={country || "/usa.png"} alt="" height={24} width={24} />
          </span>
          {locale.toUpperCase().slice(0, 2)}
          <ChevronDownIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={locale}>
          {locales.map((c) => (
            <DropdownMenuRadioItem key={c.name} value={c.code}>
              <Link
                className="w-full flex items-center gap-1"
                href={pathname}
                locale={c.code}
              >
                <span className="text-lg">
                  <Image src={c.icon} alt="" height={24} width={24} />
                </span>{" "}
                {c.name}
              </Link>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
