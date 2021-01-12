import React from 'react';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

import Home from './pages/Home';
import Store from './pages/Store';
import Pokemon from './pages/Pokemon';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Order from './pages/Order'
function App() {
  return (
   
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:type' element={<Store />} />
          <Route path='/:type/:pokemon' element={<Pokemon />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/orders' element={<Order />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
  );
}
export default  App;
