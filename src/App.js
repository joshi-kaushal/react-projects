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

function App() {
  return (
    <div className="App">
      <h1 className='text-center font-bold m-4 text-5xl'>React Projects</h1>

      <ModalApp />
      {/*  <BirthdayReminder />
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
