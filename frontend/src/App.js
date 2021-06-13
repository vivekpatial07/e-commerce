import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';
import Home from './components/Home/Home';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/ecommerce' component={Home}/>
          <Redirect from="/" to="/ecommerce" />
          
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
