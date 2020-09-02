import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Button from 'react-bootstrap';

// import './assets/js/filter';
// import './assets/js/jqBootstrapValidation';
// import './assets/js/jquery.appear';
// import './assets/js/script';
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js';

// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/css/all.css'
import './assets/css/jquery.fancybox.min.css'
import './assets/css/style.css'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';
import './app.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
