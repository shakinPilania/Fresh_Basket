import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import WishlistProvider from './Context/WishlistContext';
import CartProvider from './Context/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //it help in react rounting =>dynamically loading the page
  <BrowserRouter>
    <WishlistProvider>
      <CartProvider>
        <App />
      </CartProvider>
      <Toaster/>
    </WishlistProvider>
  </BrowserRouter>
  
);
