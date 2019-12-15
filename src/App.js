import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Contact from "./components/Contact"


function App() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <Nav setValue = {setValue} value = {value}/>
      {value === 0 && <Home />}
      {value === 1 && <Skills />}
      {value === 2 && <Projects />}
      {value === 3 && <Contact />}
      <Footer />
      
      
    </div>
  );
}

export default App;
