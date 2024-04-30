import "./App.scss";
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
          colorBorder: "#171D1C",
          colorBgContainer: "#EFE9F4",
          colorPrimary: "#171D1C",
          fontFamily: "Roboto",
        },
        components: {
          Tabs: {
            horizontalItemGutter: 48,
            titleFontSize: 14,

            itemColor: "#EFE9F4",
            itemHoverColor: "#EFE9F4",
            itemSelectedColor: "#EFE9F4",
          },
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
