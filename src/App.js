import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox/Checkbox'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Babylon Health Tech Test</h1>
        </header>
        <Checkbox label={'Example'}/>
        <Checkbox label={'Example2'}/>
      </div>
    );
  }
}

export default App;
