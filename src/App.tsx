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
const App = () => {


  return (
    <ThemeProvider theme={customTheme} >
      <div>
        <Navbar />
        {/* <Home />
        <Product />
        <ProductDetails />
        <Review /> 
        <Cart />
        */}
        <Checkout />


      </div>
    </ThemeProvider>
  )
}

export default App
