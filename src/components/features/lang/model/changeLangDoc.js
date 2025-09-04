import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const useChangeLangWithDoc = () => {
  const { i18n } = useTranslation();

  const changeLanguage = useCallback(
    (lng) => {
      i18n.changeLanguage(lng);
    },
    [i18n]
  );
  return { changeLanguage };
};
