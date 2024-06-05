import { BrowserRouter } from "react-router-dom";
import {
  About, Contact, Experience, Hero, Navbar, Projects, Hobbies
} from
  './components';
import Techstack from "./components/Techstack";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Techstack />
        <Experience />
        <Projects />
        <Hobbies/>
        <div className="relative z-0"> 
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
