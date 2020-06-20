import React, { Component } from 'react';
import './App.css';
import Wallet from './components/Wallet';
import Loot from './components/Loot';

class App extends Component {
 render() {
  return (
    <div className="App">
      <h1>Loot Check</h1>
      <hr />
      <Wallet />
      <Loot />
    </div>
  );
 }
}
export default App;
