import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/common/colors.css";
import Hero from "./Components/Common/Hero/Hero.jsx";
import App from "./App.jsx"

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <App></App>
  </StrictMode>
);
