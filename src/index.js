import React from 'react';
import {Provider} from 'react-redux';
import Navigation from '@navigation';
import store from '@redux/store';

const Route = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default Route;
