import React, { Component } from 'react';

import ResultStore from './stores/ResultStore';

import Results from './components/results/Results';
import Sidebar from './components/sidebar/Sidebar';

import './assets/bootstrap/css/bootstrap.min.css';
import './assets/css/custom.css';
import './assets/animate/animate.min.css'
import './assets/checkbox/style.css';

class App extends Component {
  render() {
    return (
      <div className="flex">
          <Sidebar />
          <Results store={ResultStore}/>
      </div>
    );
  }
}

export default App;
