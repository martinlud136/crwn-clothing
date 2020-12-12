import React from "react"
import './App.css';
import {Route, Switch} from "react-router-dom"
import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component.jsx"
import Header from "./component/header/header.component.jsx"
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"

class App extends React.Component {
  constructor(){
    super()

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      //userAuth es el mega objeto con todas las propiedades que la unica que sirve es uid, displayName y email
      //puede ser null si nadie esta logeado
      if(userAuth){
        //aca quiero guardar en el store local los datos almacenado en la db actualizados
        const userRef = await createUserProfileDocument(userAuth)

        //aca obtengo los datos representados en la base de datos
        userRef.onSnapshot(snapShot=>{
          //console.log(snapShot)este es el objeto con exist, id ect. 
          //console.log(snapShot.data()) aca si tengo el objeto que esta en la base de datos
          
          // ahora si utilizo los dos metodos para guardar toda la data que esta en la db
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },()=>console.log(this.state))

          console.log("estado: ", this.state)
        })
      }else{//si userAuth es null, osea que nadie esta logeado
        this.setState({currentUser: userAuth})//equivalente a decir null
      }
       
  })
  }

  componentWillUnmount(){
    //evita memory leaks por la subscripcion de google al desmontar el componente
    this.unsubscribeFromAuth()
  }
  render(){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component= {HomePage}/>
        <Route path="/shop" component= {ShopPage}/>
        <Route path="/signin" component={SignInAndSignUpPage}/>
      </Switch>
      </div>
    );
  }
}

export default App;
