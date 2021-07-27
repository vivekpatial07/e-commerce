import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-image-crop/dist/ReactCrop.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
