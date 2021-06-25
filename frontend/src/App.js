import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import CartPage from './components/Cart/CartPage/CartPage';
import AddressPage from './components/AddressPage/AddressPage';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Profile from './components/Profile/Profile';
import PaymentPage from './components/PaymentPage/PaymentPage';

function App() {

  return (
    <Router>
      <div className='App'>
      
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/ecommerce/product/:category/:id' component={ProductPage}/>
          <Route path='/ecommerce/cart' component={CartPage}/>
          <ProtectedRoute path='/ecommerce/placeOrder/pay' component={PaymentPage}/>
          <ProtectedRoute path='/ecommerce/placeOrder' component={AddressPage} exact/>
          <Route path='/ecommerce/user/profile' component={Profile}/>
          <Route path='/ecommerce' component={Home} exact/>

          <Redirect from="/" to="/ecommerce"/>
          
          {/* <Redirect
                from="/"
                to={userData && userData.userType === 'hoolimeuser:provider' ? '/dashboard/access-denied' : '/contact/admin'}
              />
          */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
