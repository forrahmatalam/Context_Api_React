import { createRoot } from "react-dom/client";
import "./index.css";
import { MyCartContextProvider } from "./context/MyCart";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <MyCartContextProvider>
    <App />
  </MyCartContextProvider>
);