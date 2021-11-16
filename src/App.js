import projects from './Projects';
import Accordion from './Projects/Accordion/Accordion';
import BirthdayReminder from './Projects/BirthdayReminder/BirthdayReminder'
import MenuApp from './Projects/Menu/MenuApp';
import Reviews from './Projects/Reviews/Reviews'
import Tours from './Projects/Tours/ToursApp';
import Tabs from './Projects/Tabs/Tabs'

function App() {
  return (
    <div className="App">
      <h1 className='text-center font-bold mt-4'>React Projects</h1>
      <BirthdayReminder />
      {/* <Reviews />
      <Tours />
      <Accordion /> 
      <MenuApp/> 
      <Tabs />*/}

      
    </div>
  );
}

export default App;
