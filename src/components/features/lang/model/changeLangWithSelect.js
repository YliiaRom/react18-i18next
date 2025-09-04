import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const useLangWithSelect = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language || "en";
  const changeLangWithSelect = useCallback(
    (e) => {
      const newlang = e.target.value;
      //-----змінюємо мову
      i18n.changeLanguage(newlang);
      //-----зберігаємо вибрану мову у localStorage
      localStorage.setItem("i18nextLng", newlang);
    },
    [i18n]
  );
  return { lang, changeLangWithSelect };
};
