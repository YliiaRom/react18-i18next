import { useState } from "react";
import { useChangeLangWithDoc } from "../model/changeLangDoc.js";
import { useTranslation } from "react-i18next";
import CodeLangWithDoc from "./CodeLangWithDoc.jsx";

function LangWithDoc() {
  const { changeLanguage } = useChangeLangWithDoc();
  return (
    <>
      <button type="button" onClick={() => changeLanguage("ua")}>
        ua
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        en
      </button>
      <br />
      <br />
      <CodeLangWithDoc />
    </>
  );
}

export default LangWithDoc;
