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
import Carts from './components/Cart/Carts/Carts';
function App() {
  return (
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
      </Switch>
    </Router>
  );
}

export default App;
