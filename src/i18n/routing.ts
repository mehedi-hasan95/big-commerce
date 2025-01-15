import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { i18n } from "../../i18n-config";

export const routing = defineRouting({
  locales: i18n.locales.map((locale) => locale.code),
  defaultLocale: "en-US",
  localePrefix: "as-needed",
  pathnames: {},
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
