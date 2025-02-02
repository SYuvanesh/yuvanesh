import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';

import Aboutus from './About-us';
import { Route, Router, Routes } from 'react-router-dom';
import Footer from './Footer';
import Products from './Products';
import Rating from './Rating';
import Contact from './Contact';
import GiftCards from './GiftCards';
import SpinWin from './SpinWin';
import SignUp from './Signup';

function App() {

  return (
    <>
      <Routes> 
      <Route  path='/' element={<Home />} />
      <Route path='/aboutus' element={<Aboutus />} />
      <Route path='/products' element={<Products />} />
      <Route path='/rating' element={<Rating />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/giftcards' element={<GiftCards />} />
      <Route path='/spinandwin' element={<SpinWin />} />
      <Route path='/signup' element={<SignUp />} />
      </Routes> 
    </>
  );
}

export default App;
