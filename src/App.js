import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import {Route} from 'react-router-dom'



function App() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="App">
      <Nav setValue={setValue} value={value}/>
      {/* {value === 0 && <Home />}
      {value === 1 && <Skills />}
      {value === 2 && <Projects />}
      {value === 3 && <Contact />} */}
      <Route exact path="/" component={Home}/>
      <Route path="/skills" component={Skills}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/contact" component={Contact}/>
      <div>
        <Footer setValue={setValue} value={value}/>
      </div>
      
      
      
    </div>
  );
}

export default App;
