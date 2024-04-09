import "./App.css";
import Navigation from "../Navigation/Navigation";
import { ConfigProvider } from "antd";
import { useState } from "react";
import { IntlProvider } from "react-intl";
import French from "../Languages/fr.json";
import English from "../Languages/en.json";

const local = navigator.language;

let lang;

if (local === "fr-FR") {
  lang = French;
} else {
  lang = English;
}
function App() {
  const [language, setLanguage] = useState("fr");
  if (language === "fr") {
    lang = French;
  } else {
    lang = English;
  }
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#171D1C",
        },
      }}
    >
      <IntlProvider locale={local} messages={lang}>
        <Navigation language={language} setLanguage={setLanguage} />
      </IntlProvider>
    </ConfigProvider>
  );
}

export default App;
