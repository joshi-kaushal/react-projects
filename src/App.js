import projects from './Projects';
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
// import Navbar from './Projects/Navbar/Navbar'
import ModalApp from './Projects/Modal/ModalApp'
import SubMenuApp from './Projects/SubMenus/SubMenuApp'
import Cart from './Projects/Cart/Cart'
import Cocktail from './Projects/Cocktail/Cocktail'


function App() {
  return (
    <Router>
      <Navbar />
      <Hero />

      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route path='/birthday-reminder' element={<BirthdayReminder />} />
        <Route path='/grocery' element={<Grocery />} />
        <Route path='*' element={<Hero />} />
      </Routes>
    </Router>
  );
}

export default App;
