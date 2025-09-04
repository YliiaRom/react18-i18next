import { useTranslation } from "react-i18next";
import "./App.css";
import MyComponentTest18next from "./components/MyComponentTest18next";
import { t } from "i18next";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <MyComponentTest18next />
    </>
  );
}

export default App;
