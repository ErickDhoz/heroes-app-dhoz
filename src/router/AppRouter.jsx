import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/pages";
import { PrivatesRoutes } from "./PrivatesRoutes";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/*"
          element={
            <PrivatesRoutes>
              <HeroesRoutes />
            </PrivatesRoutes>
          }
        />
      </Routes>
    </>
  );
};
