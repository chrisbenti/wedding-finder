import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Index } from "./pages/index";
import { HashRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route index element={<Index />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
