import { useContext } from "react";
import {productsContext} from "../../context/products.context"

const Shop = () => {
    const {products} = useContext(productsContext)

  return (
    <div>
      {products.map(({ id, name }) => (
        <div id={id}>
        <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
