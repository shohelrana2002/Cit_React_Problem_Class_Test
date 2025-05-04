import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayOut from "./LayOut/MainLayOut.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainLayOut />
  </StrictMode>
);
