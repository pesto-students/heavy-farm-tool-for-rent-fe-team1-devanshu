import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
 
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}>
        </Route>
      </Routes>
    </BrowserRouter>
  ,
);
