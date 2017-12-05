import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ResultStore from './stores/ResultStore';
import { Provider  } from 'mobx-react';

ReactDOM.render(
    <Provider resultStore={ResultStore}>
        <App  />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
