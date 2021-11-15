import projects from './Projects';
import Accordion from './Projects/Accordion/Accordion';
import BirthdayReminder from './Projects/BirthdayReminder/BirthdayReminder'
import Reviews from './Projects/Reviews/Reviews'
import Tours from './Projects/Tours/ToursApp';


function App() {
  return (
    <div className="App">
      <h1>React Projects</h1>
      <BirthdayReminder />
      <Reviews />
      <Tours />
      <Accordion />
    </div>
  );
}

export default App;
