import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose} from 'redux';
import './index.css';
import App from './containers/App'
import  thunk from 'redux-thunk';
import reducers from './reducers';
import './index.css';
import promise from 'redux-promise-middleware';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  {},
  composeEnhancers(
  applyMiddleware(promise(),thunk)
)
);
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
