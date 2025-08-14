import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Collection from './pages/Collection';
import Orders from './pages/Orders';
import Product from './pages/Product';
import PlaceOrder from './pages/PlaceOrder';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <div className="pb-[7rem]">
          <Navbar />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:ProductId" element={<Product />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
