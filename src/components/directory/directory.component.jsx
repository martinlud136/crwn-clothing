import Directorytem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles";

export const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <Directorytem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
