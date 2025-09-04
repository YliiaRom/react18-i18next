import { useState } from "react";
import { useTranslation } from "react-i18next";

function CodeLangWithDoc() {
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
              export const useChangeLangWithDoc = () =&gt; &#123;
              <br />
              <br />
              const <span className="accentL">&#123; i18n &#125;</span> ={" "}
              <span className="accentL">useTranslation()</span>;<br />
              <br />
              const changeLanguage = useCallback(
              <br />
              (lng) =&gt; &#123;
              <br />
              <span className="accentL"> i18n.changeLanguage(lng);</span>
              <br />
              &#125;,
              <span className="accentL"> [i18n]</span>
              <br />
              );
              <br />
              <br />
              <span className="accentL">
                return &#123; changeLanguage &#125;;
              </span>
              <br />
              &#125;;
              <br />
            </p>
            <hr />
            <p>
              <br /> <br />
              const <span className="accentL">&#123; t &#125;</span> ={" "}
              <span className="accentL">useTranslation()</span>; <br /> const
              [isOpen,
              <br />
              setIsOpen] = useState(false); const
              <br />
              <br />
              <span className="accentL">&#123; changeLanguage &#125;</span>{" "}
              <br />=<span className="accentL"> useChangeLangWithDoc()</span>;
              return
              <br /> &lt; &gt; button type="button" onClick=&#123;() =&gt;
              <span className="accentL"> changeLanguage("ua")</span>&#125;&gt;
              ua &lt; /button &gt; <br /> <br /> &lt; button type="button"
              onClick=&#123;() =&gt;
              <span className="accentL">changeLanguage("en")</span>
              &#125;&gt; en &lt;/button&gt;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CodeLangWithDoc;
