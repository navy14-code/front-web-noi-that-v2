import React from 'react';
// import './App.css'
import Navbar from './customers/component/Navbar/Navbar';
import { ThemeProvider } from '@mui/material';
import customTheme from './Theme/customTheme';
import Home from './customers/pages/Home/Home';
import Product from './customers/pages/Product/Product';
import ProductDetails from './customers/pages/PageDetails/ProductDetails';
const App = () => {


  return (
    <ThemeProvider theme={customTheme} >
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}
        <ProductDetails />
      </div>
    </ThemeProvider>
  )
}

export default App
