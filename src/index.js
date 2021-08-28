import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from "./Components/Redux/Store"
import { BrowserRouter } from 'react-router-dom';
import dotenv from "dotenv"
dotenv.config()
export const API_KEY = process.env.REACT_APP_API_KEY;
ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
     <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
