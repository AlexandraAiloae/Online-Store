import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import "./CategoriesPreviewPageStyles.css";
import Navbar from "../../components/navbarMainPage/Navbar";
import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreviewPage = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <div className="categories-preview-page">
      <Navbar Navbar color="#111" />
      <div className="categories-preview-page-container">
        {isLoading ? (
          <Spinner />
        ) : (
          Object.keys(categoriesMap).map((key) => {
            const products = categoriesMap[key];
            return (
              <CategoryPreview key={key} title={key} products={products} />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CategoriesPreviewPage;
