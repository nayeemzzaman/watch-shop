import React, { useState, useEffect, useContext } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint, MdFavoriteBorder } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiSearch, BiUser } from 'react-icons/bi';
import { FiShoppingCart, FiTwitter } from 'react-icons/fi';
import { RiFacebookCircleLine, RiInstagramLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import { getDatabaseCart } from '../../../utilities/databaseManager';
import fakeData from '../../../fakeData/fakedata';
import CartContext, { CartState } from '../../../Context/Context';
import CartSideItem from '../CartSideItem/CartSideItem';
import ReactModal from 'react-modal';
import Login from '../../Login/Login/Login';
import Register from '../../Login/Register/Register';
import { loginContext } from '../../../App';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    }
  }, []);
  

  
  // const handleCartClick = ()=>{
  //   <CartSide></CartSide>
  // }
  // const changeClass = () =>{
  //   setActiveCart({stateValue: true});
  // }
  const [activeCart, setActiveCart] = useState(false)
  const activeCartHandle = (stateValue) => {
    setActiveCart(stateValue);
  }
  const { cartItem } = useContext(CartContext);
  let totalItemQty = 0;
  for (let i = 0; i < cartItem.length; i++) {
    totalItemQty += cartItem[i].quantity;
  }
  let subTotal = 0;
  for (let i = 0; i < cartItem.length; i++) {
    subTotal += (cartItem[i].price * cartItem[i].quantity);
  }
  // console.log(totalItemQty)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const [loggedInUser, setLoggedInUser] = useContext(loginContext);
  const {isSignedIn} = loggedInUser;
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    fetch('https://vast-earth-93758.herokuapp.com/isAdmin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email: loggedInUser.email })
    })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
}, [loggedInUser.email]);
  return (
    <>
      {/* <CartSide handleCart ={activeCartHandle} activeCart={activeCart} /> */}
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='sidebar'>
          <div className='sidebar-container '>
            <ul className={click ? 'cart-menu active' : 'cart-menu'}>
              <li className='cart-item'>
                <Link><BiSearch /></Link>
              </li>
              <li className='cart-item'>
                <Link><BiUser onClick={() => openModal()} /></Link>
              </li>
              <li className='cart-item'>
                <Link><MdFavoriteBorder /></Link>
                <span className="wish-count">0</span>
              </li>
              <li className='cart-item'
                onClick={() => activeCartHandle(true)}
              >
                <Link><FiShoppingCart /></Link>
                <span className="watch-count">{totalItemQty}</span>
              </li>
            </ul>
            <Link to='/' className='sidebar-logo' onClick={closeMobileMenu}>
              LUSION
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? 'sidebar-menu active' : 'sidebar-menu'}>
              <li className='sidebar-item'>
                <Link to='/' className='sidebar-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='sidebar-item'>
                <Link
                  to='/'
                  className='sidebar-links'
                  onClick={closeMobileMenu}
                >
                  New Arrival
                </Link>
              </li>
              <li className='sidebar-item'>
                <Link
                  to='/'
                  className='sidebar-links'
                  onClick={closeMobileMenu}
                >
                  Limited Edition
                </Link>
              </li>
              <li className='sidebar-item'>
                <Link
                  to='/'
                  className='sidebar-links'
                  onClick={closeMobileMenu}
                >
                  Sale
                </Link>
              </li>
              <li className='sidebar-item'>
                <Link
                  to='/'
                  className='sidebar-links'
                  onClick={closeMobileMenu}
                >
                  Brands
                </Link>
              </li>
              {
                  isAdmin ?
                  <li className='sidebar-item'>
                    <Link
                      to='/addWatch'
                      className='sidebar-links'
                      onClick={closeMobileMenu}
                    >
                      Add Watch
                    </Link>
                  </li>
                  :
                  ''
                  // <li className='sidebar-item'>
                  //   <Link
                  //     to='/'
                  //     className='sidebar-links'
                  //     onClick={closeMobileMenu}
                  //   >
                  //     Contact Us
                  //   </Link>
                  // </li>

              }
              
            </ul>
            <ul className="social-menu">
              <li className="social-item">
                <Link ><FiTwitter /></Link>
              </li>
              <li className="social-item">
                <Link><RiFacebookCircleLine /></Link>
              </li>
              <li className="social-item">
                <Link><RiInstagramLine /></Link>
              </li>
            </ul>
          </div>

        </div>
      </IconContext.Provider>
      <div className={activeCart ? 'cart-sidebar-active' : 'cart-sidebar-inactive'}>
        <div className='cartSidebar-background'
          onClick={() => activeCartHandle(false)}
        >
        </div>
        <div className='cart-sidebar'>
          <div className='cart-bar'>
            <h4>Shopping Cart</h4>
            <div className='cart-menu-icon' onClick={() => activeCartHandle(false)}>
              <FaTimes />
            </div>
          </div>
          {
            totalItemQty ?
              <div className='cart-sidebar-details'>
                <div className='cart-sidebar-item'>
                  {
                    cartItem.map(item => <CartSideItem key={item.key} orderItem={item} />)
                  }
                </div>
                <div className="subtotal">
                  <h5>Subtotal</h5>
                  <h4 className='amount'>${subTotal}</h4>
                </div>
                <div className='cart-btn'>
                  <Link to='/cart'><button className="shopNowBtn viewCart">View Cart</button></Link>
                  <br />
                  <Link ><button className="shopNowBtn checkout">Check Out</button></Link>
                </div>
              </div>
              :
              <div className='empty-cart'>
                <h5>Your cart is currently empty.</h5>
              </div>
          }
        </div>
      </div>
      {
        isLoginPage ?
          <ReactModal
            isOpen={modalIsOpen}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            className='user-modal'
            overlayClassName="Overlay"
            z-index={9999}
          ><Login closeModal={closeModal} setIsLoginPage={setIsLoginPage}></Login>
          </ReactModal>
          :
          <ReactModal
            isOpen={modalIsOpen}
            closeTimeoutMS={200}
            onRequestClose={closeModal}
            className='user-modal'
            overlayClassName="Overlay"
          ><Register closeModal={closeModal}setIsLoginPage={setIsLoginPage}></Register>
          </ReactModal>
        }
    </>
  );
}

export default Navbar;
