import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import index from './index.html'; /* eslint-disable-line no-unused-vars */ /* import the index.html so it will be copied to the dist folder by webpack's asset loader */

ReactDOM.render(<App/>, document.getElementById('react-app'));
