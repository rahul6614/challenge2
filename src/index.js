import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import  Cart from './components/Cart';
import Nav from './components/Nav';

ReactDOM.render(
  <React.StrictMode>
  <Nav></Nav>
  <Cart/>
  
  </React.StrictMode>,
  document.getElementById('root')
);
