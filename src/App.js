import React from 'react';
import {AppConsumer} from './store/store';
import Main from './components/Main';

const App = () => (
  <div className="container">
    <AppConsumer>
      {value => (
        <Main />
      )}
    </AppConsumer>
  </div>
);

export default App;
