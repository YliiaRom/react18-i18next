import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function CodeLangSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <div>
      <button onClick={() => setIsOpen((v) => !v)}>
        {t("home.buttonCode")}
      </button>
      <div>
        {isOpen && (
          <div className="codeText">
            <p>
              <br />
              export const useLangWithSelect = () =&gt; &#123;
              <br />
              const <span className="accentL">&#123; i18n &#125;</span> ={" "}
              <span className="accentL">useTranslation()</span>;
              <br />
              <br />
              const lang = <span className="accentL">i18n.language</span> ||
              "en";
              <br />
              <br />
              const changeLangWithSelect ={" "}
              <span className="accentL">useCallback</span>(
              <br />
              (e) =&gt; &#123;
              <br />
              const newlang = e.target.value;
              <br />
              //-----змінюємо мову
              <br />
              <span className="accentL">i18n.changeLanguage</span>(newlang);
              <br />
              //-----зберігаємо вибрану мову у localStorage
              <br />
              <span className="accentL">localStorage.setItem</span>
              ("i18nextLng", newlang); &#125;,
              <br />
              [i18n] );
              <br />
              <span className="accentL">
                {" "}
                return &#123; lang, changeLangWithSelect &#125;;
              </span>
              <br />
              &#125;;
              <br />
            </p>
            <hr />
            <p>
              <br />
              function LangSelect() &#123;
              <br />
              const &#123; lang, changeLangWithSelect &#125; =
              <span className="accentL"> useLangWithSelect()</span>;
              <br />
              return (<br />
              &lt;div"&gt;
              <br />
              &lt;select <span className="accentL">
                value=&#123;lang&#125;
              </span>{" "}
              onChange=&#123;(e) =&gt;{" "}
              <span className="accentL">changeLangWithSelect(e)</span>&#125;&gt;
              <br />
              &lt;option value="en"&gt;EN&lt;/option&gt;
              <br />
              &lt;option value="ua"&gt;UA&lt;/option&gt;
              <br />
              &gt;/select&gt;
              <br />
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeLangSelect;
