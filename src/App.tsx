import React, { useEffect } from 'react';
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
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './customers/pages/Login/Login';
import AdminDashboard from './admin/pages/AdminDashboard/AdminDashboard';
import { fetchProducts } from './State/fetchProducts';
import { useAppDispatch, useAppSelector } from './State/Store';
import { fetchAdminProfile } from './State/admin/adminSlice';
import Auth from './customers/pages/Auth/Auth';
const App = () => {
  const dispatch = useAppDispatch();
  const { admin } = useAppSelector((store) => store);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAdminProfile(localStorage.getItem('jwt') || ''));
  }, []);

  useEffect(() => {
    if (admin.profile) {
      navigate('/admin');
    }
  }, [admin.profile]);

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/products/:category" element={<Product />} />
          <Route
            path="/product-details/:categoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
