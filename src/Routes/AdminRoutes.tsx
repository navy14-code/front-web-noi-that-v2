import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../admin/pages/AdminDashboard/Dashboard';
import Product from '../admin/pages/Products/Product';
import AddProduct from '../admin/pages/Products/AddProduct';
import Orders from '../admin/pages/Orders/Orders';
import Transaction from '../admin/pages/Transaction/Transaction';
import Payment from '../admin/pages/Transaction/Payment';
import Coupon from '../admin/pages/Coupon/Coupon';
import AddCoupon from '../admin/pages/Coupon/AddCoupon';
import GridCategory from '../admin/pages/HomePage/GridCategory';
import Deal from '../admin/pages/HomePage/Deal';
import ShopByCategoryTable from '../admin/pages/HomePage/ShopByCategoryTable';
import FanCategoryTable from '../admin/pages/HomePage/FanCategoryTable';

const AdminRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products" element={<Product />} />
        <Route path="/add-products" element={<AddProduct />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/coupons" element={<Coupon />} />
        <Route path="/add-coupons" element={<AddCoupon />} />
        <Route path="/home-grid" element={<GridCategory />} />
        <Route path="/fan-category" element={<FanCategoryTable />} />
        <Route path="/shop-by-category" element={<ShopByCategoryTable />} />
        <Route path="/deals" element={<Deal />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
