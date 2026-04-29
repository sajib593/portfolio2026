import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Hero from "./components/sections/Hero"
import Projects from "./components/sections/Projects"
import { useState } from "react";


function App() {

   const [dark, setDark] = useState(false);
 

  return (
    
     <div className={dark ? "dark" : ""}>

     



      <Navbar dark={dark} setDark={setDark}></Navbar>

      <Hero></Hero>

      <About></About>

      <Projects></Projects>

      <Contact></Contact>

      <Footer></Footer>

     </div>

      
      
    
  )
}

export default App
