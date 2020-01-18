import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';
import ChildComponent from './ChildComponent';
import { Decorator } from './decorator';

export default
@Decorator()
class App extends PureComponent {
  componentDidUpdate() {
    console.log('isParentUpdate');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ChildComponent />
        </header>
      </div>
    );
  }
}
