import React, { Component } from 'react';

import { Route} from 'react-router-dom';
import HomePage from '../Screens/HomePage';
import VideoPage from '../Screens/VideoPage';

class App extends Component {
  render() {
    return (
      <div className="container">
            <Route exact path="/"       component={HomePage}></Route>
            <Route  path="/:id"         component={VideoPage} />            
      </div>
    );
  }
}

export default App;
