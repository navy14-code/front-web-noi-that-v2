import React from 'react';
// import './App.css'
import Navbar from './customers/component/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import customTheme from './Theme/customTheme';
import Home from './customers/pages/Home/Home';
import Product from './customers/pages/Product/Product';
import ProductDetails from './customers/pages/PageDetails/ProductDetails';
import Review from './customers/pages/Review/Review';
import Cart from './customers/pages/Cart/Cart';
import Checkout from './customers/pages/Checkout/Checkout';
import AddressFormS from './customers/pages/Checkout/AddressFormS';
import Account from './customers/pages/Account/Account';
import { Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<Product />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/profile" element={<Account />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
