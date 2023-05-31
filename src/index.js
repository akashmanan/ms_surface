import React from 'react';
import {Provider} from 'react-redux';
import App from './navigation/index';
import store from './redux/store';

const Route = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Route;
