import React, { Component } from 'react';

import ResultsContainer from './components/results/ResultsContainer';
import SidebarContainer from './components/sidebar/SidebarContainer';

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/animate/animate.min.css'
import './assets/checkbox/style.css';

class App extends Component {
  render() {
    return (
      <div className="flex">
        <SidebarContainer />
        <ResultsContainer />
      </div>
    );
  }
}

export default App;
