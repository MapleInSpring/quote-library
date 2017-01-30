import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import quotes from './reducers/quotes'
import App from './App';
import './index.css';

let store = createStore(quotes)

ReactDOM.render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  document.getElementById('root')
);
