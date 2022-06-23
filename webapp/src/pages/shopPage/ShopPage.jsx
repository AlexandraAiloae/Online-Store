import React, { useContext, Fragment } from "react";
import "./ShopPageStyles.css";
import Navbar from "../../components/navbarMainPage/Navbar";
import { CategoriesContext } from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

import { Routes, Route } from "react-router-dom";
import CategoriesPreviewPage from "../categoriesPreviewPage/CategoriesPreviewPage";
import Category from "../category/Category";

import ProductCard from "../../components/product-card/ProductCard";



const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default ShopPage;
