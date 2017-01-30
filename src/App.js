import React, { Component } from 'react';
import './App.css';
import QuoteInput from './containers/quote_input'

class App extends Component {
  render() {
    return (
      <div className="App">
      	<QuoteInput />
        <div>
          Hello world!
        </div>
      </div>
    );
  }
}

export default App;
