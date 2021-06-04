import './style/App.scss';
import Home from './components/Home.js'
import SpecialItems from './components/SpecialItems.js'
import Faq from './components/Faq.js'
import Contact from './components/Contact.js'

function App() {
  return (
    <div className="App ">
      <header className="wrapper">
        <Home />
      </header>
        <SpecialItems />
        <Contact />
        <Faq />
    </div>
  );
}

export default App;
