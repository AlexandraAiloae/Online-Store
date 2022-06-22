// import React, { useContext, Fragment } from "react";
// import "./ShopPageStyles.css";
// import Navbar from "../../components/navbarMainPage/Navbar";
// import { CategoriesContext } from "../../contexts/categories.context";
// import CategoryPreview from "../../components/category-preview/CategoryPreview";

import { Routes, Route } from "react-router-dom";
import CategoriesPreviewPage from "../categoriesPreviewPage/CategoriesPreviewPage";
import Category from "../category/Category";

// const ShopPage = () => {
//   const { categoriesMap } = useContext(CategoriesContext);

//   return (
//     <div className="shop">
//       <Navbar Navbar color="#111" />
//       <div className='shop-container'>
//       {Object.keys(categoriesMap).map((key) => {
//         const products = categoriesMap[key];
//         return <CategoryPreview key={key} title={key} products={products} />;
//       })}
//     </div>
//     </div>
//   );
// };

const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default ShopPage;
