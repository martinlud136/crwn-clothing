import React from "react"
import {Link} from "react-router-dom"
//sintaxis para importar svg
import { ReactComponent as Logo} from "../../assets/crown.svg"
 
import "./header.component.styles.scss"

const Header = () =>{
    return(
        <div className= "header">
           <Link className="logo-container" to="/">
            <Logo className="logo"/>
           </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option">CONTACT</Link>
                <Link className="option">SING IN</Link>
            </div>
        </div>
    )
}

export default Header