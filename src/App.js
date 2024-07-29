import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Service from './pages/Service';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';

import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Fade cascade damping={0.5}>
        <About />
      </Fade>
      <Service />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
