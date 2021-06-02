import './style/App.scss';
import Home from './components/Home.js'
import SpecialItems from './components/SpecialItems.js'

function App() {
  return (
    <div className="App ">
      <header className="wrapper">
        <Home />
      </header>
        <SpecialItems />
    </div>
  );
}

export default App;
