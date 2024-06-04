import Navbar from './components/Navbar/Navbar';
import "./App.css";
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Hireme from './components/HireMe/Hireme';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Hireme />
    </div>
  );
}

export default App;
