import "./CategoriesStyles.css";
import DirectoryItem from '../directory-item/DirectoryItem';

const Categories = ({ categories }) => {
    return (
      <div className='categories-container'>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </div>
    );
  };

  export default Categories;

// import "./CategoriesStyles.css";
// import CategoryItem from '../category-item/CategoryItem';

// const Categories = ({ categories }) => {
//     return (
//       <div className='categories-container'>
//         {categories.map((category) => (
//           <CategoryItem key={category.id} category={category} />
//         ))}
//       </div>
//     );
//   };
//   export default Categories;