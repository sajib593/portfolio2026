import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import { useState } from "react";


function App() {

   const [dark, setDark] = useState(false);
 

  return (
    <>
     <div className={dark ? "dark" : ""}>

      <button
        onClick={() => setDark(!dark)}
        className="fixed top-4 right-4 z-50"
      >
        Toggle
      </button>



      <Navbar></Navbar>

      <Hero></Hero>

      <About></About>

      <Projects></Projects>

      <Contact></Contact>

     </div>

      
      
    </>
  )
}

export default App
