import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Hireme from './components/HireMe/Hireme';
import Services from './components/Services/Services';
import Discuss from './components/Discuss/Discuss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Hireme />
      <Services />
      <Discuss />
    </div>
  );
}

export default App;
