import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./styles/_reset.scss";
import "./main.scss";

import AuthLayout from "./layouts/AuthLayout/AuthLayout.tsx";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import Home from "./pages/Home/Home.tsx";

import App from "./App.tsx";
import Discover from "./pages/Discover/Discover.tsx";
import Albums from "./pages/Albums/Albums.tsx";
import Artists from "./pages/Artists/Artists.tsx";
import LoginPage from "./pages/Login/LoginPage.tsx";
import CreateAccount from "./pages/CreateAccount/CreateAccount.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/artists" element={<Artists />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/signup" element={<p>Sign Up Page</p>} />

        <Route path="/auth" element={<AuthLayout />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>
);
