import Directorytem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

export const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Directorytem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
