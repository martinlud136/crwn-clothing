import { useSelector, useDispatch } from "react-redux"

import { selectCartCount, selectIsCartOpen } from "../../store/cart/cart.selector"
import { setIsCartOpen } from "../../store/cart/cart.action"
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles"

const CardIcon = () =>{
    const dispatch =  useDispatch()
    
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    
    const toogleIsCartOpem = ()=>dispatch(setIsCartOpen(!isCartOpen))

    return(
        <CartIconContainer onClick={toogleIsCartOpem}>
            <ShoppingIcon className="shopping-icon"/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CardIcon