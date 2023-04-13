import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import "./card-icon.styles.scss"
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

const CardIcon = () =>{
    const {isCartOpen, setIsCartOpen} = useContext(CartContext)

    const toogleIsCartOpem = ()=>setIsCartOpen(!isCartOpen)

    return(
        <div className="cart-icon-container"  onClick={toogleIsCartOpem}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

export default CardIcon