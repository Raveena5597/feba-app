import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import SecondNav from './layout/SecondNav';
import Tabbar from './layout/Tabbar';
import Results from './layout/Results';

function App() {
  return (
    <div key="app_div" className="App">
      <Navbar />
      <SecondNav />
      <Results />
      <Tabbar />
    </div>
  );
}

export default App;
