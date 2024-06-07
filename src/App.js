import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Hireme from './components/HireMe/Hireme';
import Services from './components/Services/Services';
import Discuss from './components/Discuss/Discuss';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Hireme />
      <Services />
      <Discuss />
      <Contact />
    </div>
  );
}

export default App;
