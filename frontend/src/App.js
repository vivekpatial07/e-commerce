import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Auth/Login/Login';
import Signup from './components/Auth/Signup/Signup';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
      </div>
    </Router>
  );
}

export default App;
