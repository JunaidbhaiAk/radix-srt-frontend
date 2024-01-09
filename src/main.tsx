
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../app/globals.css";
import DataProvider from "./context/DataContext.tsx";
import SubtitleProvider from "./context/SubtitleContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DataProvider>
    <SubtitleProvider>
      <App />
    </SubtitleProvider>
  </DataProvider>
);
