import React from "react";
import ReactDOM from 'react-dom/client'
//import App from './components/App';
import App from './classComponents/App';

//import Voiture from './components/Voiture';
//import Voiture from './classComponents/Voiture';
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App/>);
//root.render(<Voiture/>);
