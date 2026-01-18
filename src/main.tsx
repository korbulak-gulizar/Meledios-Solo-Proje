import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./styles/_reset.scss";
import "./main.scss";

import AuthLayout from "./layouts/AuthLayout/AuthLayout.tsx";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import Home from "./pages/Home/Home.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>
);
