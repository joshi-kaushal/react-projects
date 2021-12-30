import projects from './Projects';
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
import Navbar from './Projects/Navbar/Navbar'
import ModalApp from './Projects/Modal/ModalApp'
import SubMenuApp from './Projects/SubMenus/SubMenuApp'
import Cart from './Projects/Cart/Cart'
import Cocktail from './Projects/Cocktail/Cocktail'

function App() {
  return (
    <div className="App">

      <Cocktail />
      {/*  <BirthdayReminder />
      <SubMenuApp />
      <Cart />
      <ModalApp />
      <Navbar />
      <Grocery />
      <ColorGenerator />
      <LoremIpsum />
      <Tours />
      <Reviews />
      <Accordion /> 
      <MenuApp/> 
      <Tabs />
      <Slider /> */}
      
    </div>
  );
}

export default App;
