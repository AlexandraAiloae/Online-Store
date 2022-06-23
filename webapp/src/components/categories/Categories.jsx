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