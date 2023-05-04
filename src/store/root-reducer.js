import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { categoriesReducers } from "./categories/category.reducer"
import { cartReducer } from "./cart/cart.reducer"

export const rootReducer =  combineReducers({
    user: userReducer,
    categories: categoriesReducers,
    cart: cartReducer
})