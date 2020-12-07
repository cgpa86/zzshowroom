import React ,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';

import {Grid, IconButton} from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import WebIcon from '@material-ui/icons/Web';

//probando material ui darkmode
import { Switch, createMuiTheme, ThemeProvider, Paper,FormHelperText} from '@material-ui/core';



function App() {

//material ui dark mode 
const [darkState, setDarkState] = useState(false);
const palletType = darkState ? "dark" : "light";
const darkTheme = createMuiTheme({
  palette: {
    type: palletType,
  }
});
const handleThemeChange = () => {
  setDarkState(!darkState);
};
  


  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };


  return (
   

    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
            Zazushowroom | Ropa y Accesorios
            </Link>
          </div>
        
          <div>
            <Link to="/cart">
              Cesta
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">Perfil</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Pedidos</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Salir
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Tablero</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Productos</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Ordenes</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Usuarios</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

        </header>
        <ThemeProvider theme={darkTheme}> 
     <Paper component='div' > 
      
        <main>

        {/* Material-UI botón modo oscuro */}
        <Switch checked={darkState} onChange={handleThemeChange}  />
      <FormHelperText>Modo Oscuro</FormHelperText>
              {/* Material-UI botón modo oscuro */}

          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen} exact></Route>
          <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAddressScreen}></Route>
          <Route path="/payment" component={PaymentMethodScreen}></Route>
          <Route path="/placeorder" component={PlaceOrderScreen}></Route>
          <Route path="/order/:id" component={OrderScreen}></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>

<AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
          ></AdminRoute>
                     <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
          <Route path="/" component={HomeScreen} exact></Route>
        </main>
       </Paper> 
    </ThemeProvider>
        <footer className="row center">
          Zazushowroom® 2020 | Todos los Derechos Reservados | by PACG {"    "}
        <Grid item >
                    <IconButton >
                        <InstagramIcon />
                        <a href="https://www.instagram.com/zazu.s" target="_blank" rel="noopener noreferrer">
                        Ig
                        </a>
                    </IconButton>                   
                        <IconButton >
                         <FacebookIcon />
                         <a href="https://www.facebook.com/zazu.showroom" target="_blank" rel="noopener noreferrer">
                            Fb
                            </a>
                         </IconButton>

                         <IconButton >
                    <WebIcon/>
                    <a href="https://www.zazushowroom.com" target="_blank" rel="noopener noreferrer">
                        Web
                        </a>
                     </IconButton>                  
                </Grid>
                
           </footer>

      </div>
    </BrowserRouter>
  
  );
}

export default App;
