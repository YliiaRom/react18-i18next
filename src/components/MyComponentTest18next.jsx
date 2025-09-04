import React from "react";

import { useTranslation } from "react-i18next";
import LangSelect from "./features/lang/ui/LangSelect";
import LangWithDoc from "./features/lang/ui/LangWithDoc";

function MyComponentTest18next() {
  const { t } = useTranslation();

  return (
    <div className="mainWrapper">
      <p>{t("home.menuLabel")}</p>
      <h1>{t("home.title")}</h1>
      <p>{t("home.description")}</p>
      <a href="https://react.i18next.com/guides/quick-start" target="_blank">
        {t("home.linkDoc")} https://react.i18next.com/guides/quick-start
      </a>{" "}
      <br />
      <a href="https://www.youtube.com/live/AokEUO1Frt4" target="_blank">
        {t("home.linkLesson")}
      </a>
      <br />
      <br />
      <hr />
      <LangSelect />
      <hr />
      <LangWithDoc />
    </div>
  );
}

export default MyComponentTest18next;
