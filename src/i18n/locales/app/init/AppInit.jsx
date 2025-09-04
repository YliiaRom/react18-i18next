//------ AppInit -----
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
export default function AppInit() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const onStorage = (e) => {
      if (
        e.key === "i18nextLng" &&
        e.newValue &&
        e.newValue !== i18n.language
      ) {
        i18n.changeLanguage(e.newValue);
      }
    };
    //---- додаємо прослуховування на зміну значення у localStorage
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [i18n]);
  return null;
}
