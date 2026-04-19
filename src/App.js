import logo from './logo.svg';
import './App.css';
import HeroSection from './pages/HeroSection';
import About from './pages/About';
import Projects from './pages/Projects';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <About />
      <Projects />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

