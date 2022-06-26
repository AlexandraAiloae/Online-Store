import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import CategoriesPreviewPage from "../categoriesPreviewPage/CategoriesPreviewPage";
import Category from "../category/Category";
import { getCategoriesAndDocuments } from "../../utils/firebase/Firebase";
import { setCategories } from "../../store/categories/category.action";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments("categories");
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreviewPage />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default ShopPage;
