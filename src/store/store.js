import React, { createContext, Component } from 'react';

const AppContext = createContext({
});

export class AppProvider extends Component {;

  state = {
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export const AppConsumer = AppContext.Consumer;