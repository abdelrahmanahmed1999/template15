import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducers';
import 'bootstrap/dist/css/bootstrap.css';

const datastore=createStore(reducer);

ReactDOM.render(
  <Provider store={datastore}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();