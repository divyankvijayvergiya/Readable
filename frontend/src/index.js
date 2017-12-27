import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux';
import './index.css';
import App from './containers/App'
import  thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk)
);
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
