import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore from './store';

const store = configureStore();
const rootElement = document.getElementById('root');

function render (Component) {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>,
    rootElement
  );
}
