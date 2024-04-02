import "./App.css";
import Navigation from "../Navigation/Navigation";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#171D1C",
        },
      }}
    >
      <Navigation />
    </ConfigProvider>
  );
}

export default App;
