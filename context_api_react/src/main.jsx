import { createRoot } from "react-dom/client";
import "./index.css";
import Test from "./Test.jsx";
import { ContextProvider } from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <Test />
  </ContextProvider>
);