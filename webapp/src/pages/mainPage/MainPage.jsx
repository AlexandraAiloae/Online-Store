import React from "react";
import Navbar from "../../components/navbarMainPage/Navbar";
import Hero from "../../components/heroMainPage/Hero";
import Categories from "../../components/categories/Categories";
import { Outlet } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Navbar color="#fff" />
      <Hero />
      <Categories />
      <Outlet />
    </div>
  );
}

export default MainPage;
