import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import reducers from './reducers/reducers';
import {createStore} from "redux"
import { IAction, IState } from './reducers/store';

const store = createStore<IState, IAction, any, any>(reducers);

ReactDOM.render(
  <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
