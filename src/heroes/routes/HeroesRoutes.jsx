import React from "react";
import { NavBar } from "../component/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  DcPage,
  HeroesHomePage,
  HeroPage,
  MarvelPage,
  SearchPage,
} from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="home" element={<HeroesHomePage />} />

          <Route path="/" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </>
  );
};
