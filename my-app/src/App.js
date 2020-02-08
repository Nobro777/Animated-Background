import React from 'react';
import Particles from 'react-particles-js';
import './App.css';

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'assets/particles.json', function() {
//   console.log('callback - particles.js config loaded');
// });

const particleOpt = {
  particles: {
    number: {
      value: 125,
      density: {
        enable: true,
        value_area: 5000
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles 
                params={particleOpt} />
    <h1>background-testing</h1>
      <Particles 
                params={particleOpt} />
    </div>
  );
}

export default App;
