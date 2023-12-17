import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './style.scss'
import {Context} from "./Context";
import React from "react";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context>
            <App />
        </Context>
    </BrowserRouter>
);
