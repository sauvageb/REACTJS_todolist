import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

// Permet d'attacher le React et ses composants à la div id="root" de la page index.htmtl
const root = ReactDOM.createRoot(document.getElementById('root'));
// Element racine de l'application : Utilisation du composant App.js
// BrowserRouter ==> indique que React va utiliser la navigation react router
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
