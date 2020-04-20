import React from 'react';
import {AppConsumer} from './store/store';
import ChatController from './components/ChatController';

const App = () => (
  <div className="container">
    <AppConsumer>
      {value => (
        <div>
          hello world
        </div>
      )}
    </AppConsumer>
  </div>
);

export default App;
