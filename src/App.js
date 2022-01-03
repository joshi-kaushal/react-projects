import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';

import Accordion from './Projects/Accordion/Accordion';
import BirthdayReminder from './Projects/BirthdayReminder/BirthdayReminder'
import MenuApp from './Projects/Menu/MenuApp';
import Reviews from './Projects/Reviews/Reviews'
import Tours from './Projects/Tours/ToursApp';
import Tabs from './Projects/Tabs/Tabs'
import Slider from './Projects/Slider/Slider'
import LoremIpsum from './Projects/LoremIpsum/LoremIpsum'
import ColorGenerator from './Projects/ColorGenerator/ColorGenerator'
import Grocery from './Projects/Grocery/Grocery'
import NavbarApp from './Projects/Navbar/Navbar'
import ModalApp from './Projects/Modal/ModalApp'
import SubMenuApp from './Projects/SubMenus/SubMenuApp'
import Cart from './Projects/Cart/Cart'

import Cocktail from './Projects/Cocktail/Cocktail'
import Home from './Projects/Cocktail/pages/Home';
import About from './Projects/Cocktail/pages/About';
import SingleCocktail from './Projects/Cocktail/pages/SingleCocktail';
import Error from './Projects/Cocktail/pages/Error';


function App() {

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route path='/birthday-reminder' element={<BirthdayReminder />} />
        <Route path='/stripe-homepage' element={<SubMenuApp />} />
        <Route path='/modal' element={<ModalApp />} />
        <Route path='/grocery' element={<Grocery />} />
        <Route path='/lorem-ipsum' element={<LoremIpsum />} />
        <Route path='/color-generator' element={<ColorGenerator />} />
        <Route path='/cafe-menu' element={<MenuApp />} />
        <Route path='/modal' element={<ModalApp />} />
        <Route path='/navbar' element={<NavbarApp />} />
        <Route path='/product-reviews' element={<Reviews />} />
        <Route path='/designation-slider' element={<Slider />} />
        <Route path='/job-showcase' element={<Tabs/>} />
        <Route path='/tour-planner' element={<Tours />} />
        <Route path='/accordion' element={<Accordion />} />
        <Route path='/cart' element={<Cart />} />
        
        {/* Main Cocktail Route and its subroutes */}
        <Route path='/cocktail' element={<Cocktail />} />
        <Route exact path='/cocktail' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cocktail/:id' element={<SingleCocktail />} />
        <Route path='/cocktail/*' element={<Error />} />
        
        <Route path='*' element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
