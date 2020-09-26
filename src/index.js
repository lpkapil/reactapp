import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import { login, logout } from './actions/actions';
import store from './store';


/**
 * ###### Start Logging
 * Logging to see how things work
 */

console.log('Initital store state');
console.log(store.getState());

console.log('Subscribe to store state change');
store.subscribe(() => {
  console.log('Store state changed');
  console.log(store.getState());
});
/**
 * ###### End logging
 */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
