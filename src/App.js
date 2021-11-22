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

function App() {
  return (
    <div className="App">
      <h1 className='text-center font-bold m-4 text-5xl'>React Projects</h1>

      <Grocery />
      {/*  <BirthdayReminder />
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
