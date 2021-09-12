import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Link } from "react-router-dom";

import { createStore } from 'redux';
import allReducers from './reducers';//בגלל הקובץ אינדקס לא צריך נתיב יותר מדיוק
import { Provider } from 'react-redux';//npm install @reduxjs/toolkit react-redux
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
//<Provider store={store}>