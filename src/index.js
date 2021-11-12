import React from 'react';
import ReactDOM from 'react-dom';

// Step 1: Setup the the Redux Store here in this file
import { createStore, applyMiddleware } from 'redux';

// Step 5: importing rootReducer to be given to createStore()
import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Step 6: Provide the store data to the entire app 
import { Provider } from 'react-redux'; 
// Explainer for Step 6: 
//Definition: The Provider component uses something 
//called as React Context which allows you to pass the 
//store object to any components 
//that needs to access it without the need to pass props.
//Provider should be imported from react-redux 

// Step 14: Let's fix async action error related middleware issue 
// Step 14.1
// install the following packages. npm i redux-logger redux-thunk
// step 14.2 
import logger from 'redux-logger'; // npm i redux-logger 
import thunk from 'redux-thunk';  //npm i redux-thunk

// Step 2: Exec createStore() method and save it in a variable 
// Step 5: continues ... Setup store by passing rootReducer inside createStore()
const store = createStore(rootReducer, applyMiddleware(thunk, logger) ); //this needs a special argument called 'reducer'
//Step 14.3 - applyMiddleware with thunk and logger

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> { /* Step 6: continues.. this is how we provide store data to the app */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
