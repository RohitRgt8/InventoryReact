import './App.css';
// import Header from './components/home/header'
import { useState } from 'react';
import Login from './components/login/login'
import Signup from './components/signup/signup';
import NavBar from './components/NavBar';
import Nav from './components/Nav';
import Body from './components/Body';
import SimpleSlider from './components/HeroCarousel';
import HeroSection from './components/HeroSection';
import OurBestSellers from './components/OurBestSellers';
import Ingridients from './components/Ingridients';
import JournalSection from './components/JournalSection';
import BsText from './components/BsText';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import SinglePage from "./components/SinglePage";
import JournalPage from "./components/JournalPage";
import Cart from './components/Cart';
import FollowONIG from './components/FollowONIG';
import Products from './components/Products';
import CartHold from './components/CartHold';
import SPFooter from './components/SPFooter';
import Bricks from './components/Bricks';
import Cement from './components/Cement';
import Sand from './components/Sand';
import Dust from './components/Dust';
import MobileNav from './components/MobileNav';

function App() {

  return (
    <div className="App">
      <BrowserRouter>

        <Routes >
        <Route path='/' exact element={<>   <Nav/> <MobileNav />  <SimpleSlider />  <HeroSection />  <BsText />  {<Products />}<FollowONIG /> <SPFooter />  </>} />
        <Route path='/dash' exact element={<>   <NavBar /> <MobileNav />  <SimpleSlider />  <HeroSection />  <BsText />  {<Products />}<FollowONIG /> <SPFooter />  </>} />
         
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route> 
          <Route path='/' exact element={<>   <NavBar /> <MobileNav />  <SimpleSlider />  <HeroSection />  <BsText />  {<Products />}<FollowONIG /> <SPFooter />  </>} />
          <Route path='/:id' exact element={<> <NavBar /> <MobileNav />  <SinglePage /> </>} />
          <Route path='/journal/april' element={<> <NavBar /> <MobileNav />  <JournalPage /> </>} />
          <Route path='/cart' exact element={<>  <NavBar /> <CartHold /></>} />
          <Route path='/Bricks' element={<> <NavBar />  <Bricks /> </>} />
          <Route path='/cement' element={<> <NavBar />  <Cement /> </>} />
          <Route path='/Sand' element={<> <NavBar />  <Sand /> </>} />
          <Route path='/Dust' element={<> <NavBar />  <Dust /> </>} />
        </Routes>

      </BrowserRouter>




    </div>
  );
}

export default App;
