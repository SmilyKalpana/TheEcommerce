import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { images } from './assets/assets';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import SearchBar from './components/SearchBar';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Collection = React.lazy(() => import('./pages/Collection'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Product = React.lazy(() => import('./pages/Product'));
const PlaceOrder = React.lazy(() => import('./pages/PlaceOrder'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Login = React.lazy(() => import('./pages/Login'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));  // Your custom 404 page

const App = () => {
  return (
    <Router>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]" style={{
        backgroundImage: `url(${images.pattern})`,
        backgroundSize: "contain",
        backgroundRepeat: "repeat",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // overlay effect
        backgroundBlendMode: "overlay" // blends the overlay with the image
      }}>
        <div className="pb-[7rem]">
          <Navbar />
        </div>
        <SearchBar />

        <Suspense fallback={<div>Loading...</div>}>
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
            <Route path="*" element={<NotFound />} /> {/* Fallback route */}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
