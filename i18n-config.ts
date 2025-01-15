export const i18n = {
  locales: [
    { code: "en-US", name: "English", icon: "/usa.png" },
    { code: "fr", name: "Français", icon: "/fr.png" },
    { code: "ar", name: "العربية", icon: "/sa.png" },
  ],
  defaultLocale: "en-US",
};

export const getDirection = (locale: string) => {
  return locale === "ar" ? "rtl" : "ltr";
};
export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
