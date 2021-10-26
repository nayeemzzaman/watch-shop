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
function App() {
  return (
    <Router>
      <Switch>
        <Home></Home>
      </Switch>
    </Router>
  );
}

export default App;
