// import './polyfills';
// import loadReact from './react-loader';

// loadReact()
//   .then(() => import('./components/App'))
//   .then(App => {
//     const {React, ReactDOM} = window;

//     ReactDOM.render(
//       React.createElement(App.default),
//       document.getElementById('root')
//     );
//   });
import React from "react";
// import * as ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'

import  App from './components/App'
const app=createRoot(document.getElementById('root'))
const appel=<App></App>
console.log(appel);
// const le=<div>ssss</div>
// console.log(le, new App().render());
app.render(<App/>)

// ReactDOM.render(
//   App,
//   document.getElementById('root')
// );
