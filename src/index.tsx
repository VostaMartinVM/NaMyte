import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./Styles/styles.scss";
import Routes from "./Routes";

createRoot(document.getElementById("root") as Element).render(
  <RouterProvider router={Routes} />,
);
