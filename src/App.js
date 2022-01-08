import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './components/Home/Home/Home';
import Cart from './components/Cart/Cart/Cart';
import { createContext } from 'react';
import { useState } from 'react';
import AddWatch from './components/Admin/AddWatch/AddWatch';

export const loginContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <loginContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/addWatch">
          <AddWatch></AddWatch>
        </Route>
      </Switch>
    </Router>
    </loginContext.Provider>
  );
}

export default App;
