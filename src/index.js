import * as  React from "react";
// import * as ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'


const app=createRoot(document.getElementById('root'))
const appel=<div>sss</div>
console.log(appel);
// const le=<div>ssss</div>
// console.log(le, new App().render());
app.render(appel)
