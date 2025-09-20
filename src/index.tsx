import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FurnitureStoreApp } from "./FurnitureStoreApp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FurnitureStoreApp />
  </StrictMode>,
);
