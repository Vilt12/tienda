import logo from './logo.svg';
import './App.css';
import Navbar from './nav-bar';
import Section from './section-1';
import Section2 from './section-2';
import Foother from './foother';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
function App() {
  return (
  <div>
 <Navbar></Navbar>
  <Section></Section>
  <Section2></Section2>
  <Foother></Foother>
  </div>
  
  
  );
}

export default App;
