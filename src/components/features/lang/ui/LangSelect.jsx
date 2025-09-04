import { useLangWithSelect } from "../model/changeLangWithSelect.js";
import CodeLangSelect from "./CodeLangSelect.jsx";
function LangSelect() {
  const { lang, changeLangWithSelect } = useLangWithSelect();
  return (
    <div className="langWithSelectWrap">
      <select value={lang} onChange={(e) => changeLangWithSelect(e)}>
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>

      <div>
        <CodeLangSelect />
      </div>
    </div>
  );
}

export default LangSelect;
