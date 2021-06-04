import './style/App.scss';
import Home from './components/Home.js'
import SpecialItems from './components/SpecialItems.js'
import Faq from './components/Faq.js'

function App() {
  return (
    <div className="App ">
      <header className="wrapper">
        <Home />
      </header>
        <SpecialItems />
        <Faq />
    </div>
  );
}

export default App;
