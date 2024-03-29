import { useEffect } from "react"
import {Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";

const App =()=> {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsuscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsuscribe;
  }, []);
 

  return (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="auth" element={<Authentication/>}/>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  </Routes>
  )
}

export default App;
