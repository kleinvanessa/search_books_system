import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import Searchbooks from './container/Search';

function App() {
  const logo = 'Busque Books'
  return (
    <div className="container">
      <Navbar logo={logo}/>
      <h2><center>#FIQUEEMCASA</center></h2>
     
    </div>
  );
}

export default App;
