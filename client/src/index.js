import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// import './fonts/open-sans-v17-latin-600.woff';
// import './fonts/open-sans-v17-latin-600.woff2';
// import './fonts/open-sans-v17-latin-regular.woff';
// import './fonts/open-sans-v17-latin-regular.woff2';
import './styles/index.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
