
import { Routes, Route } from "react-router-dom";
import CategoriesPreviewPage from "../categoriesPreviewPage/CategoriesPreviewPage";
import Category from "../category/Category";



const ShopPage = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default ShopPage;
