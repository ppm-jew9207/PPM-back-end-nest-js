import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history } from '@ppm/data-access/redux-configuration';
import App from './app/app';
import { SnackbarProvider } from 'notistack';


const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <SnackbarProvider maxSnack={3}>
          <App />
      </SnackbarProvider>
    </ConnectedRouter>
  </Provider>,
  MOUNT_NODE
);
