import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles"

const CardIcon = () =>{
    const {isCartOpen,cartCount,  setIsCartOpen} = useContext(CartContext)

    const toogleIsCartOpem = ()=>setIsCartOpen(!isCartOpen)

    return(
        <CartIconContainer onClick={toogleIsCartOpem}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon