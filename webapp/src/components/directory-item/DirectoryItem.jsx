import "./DirectoryItemStyles.css";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`, //this allow me to use a string variable inside of another string
        }}
      />
      <div className="directory-item-body">
        <h3>{title}</h3>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
