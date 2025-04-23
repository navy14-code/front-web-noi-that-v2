import { AccountCircle, LocationOn, Logout, ShoppingBag } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Orders from './Orders';
import OrderDetails from './OrderDetails';
import UserDetails from './UserDetails';
import Address from './Address';

const menu = [
  { name: 'Hồ sơ', path: '/account/profile', icon: <AccountCircle /> },
  { name: 'Đơn hàng', path: '/account/orders', icon: <ShoppingBag /> },
  { name: 'Địa chỉ', path: '/account/addresses', icon: <LocationOn /> },
  { name: 'Đăng xuất', path: '/', icon: <Logout /> },
];

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (item: any) => navigate(item.path);
  return (
    <div className="px-5 lg:px-52 min-h-screen mt-10">
      <div>
        <h1 className="text-xl font-bold pb-5">Nam</h1>
      </div>
      <Divider />
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:min-[78vh]">
        <section className="col-span-1 lg:border-r lg:pr-5 h-full">
          {menu.map((item) => (
            <div
              onClick={() => {
                handleClick(item);
              }}
              key={item.name}
              className={`${item.path === location.pathname ? 'bg-primary-color text-white' : ''}
                py-3 cursor-pointer hover:text-white hover:bg-primary-color 
                px-5 rounded-md border-b`}
            >
              <span className="text-xl ">{item.icon}</span>
              <span className="ml-2">{item.name}</span>
            </div>
          ))}
        </section>
        <section className="right lg:col-span-2 lg:pl-5 py-5">
          <Routes>
            <Route path="/profile" element={<UserDetails />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order/:orderId/:orderItemId" element={<OrderDetails />} />
            <Route path="/addresses" element={<Address />} />
          </Routes>
        </section>
      </div>
    </div>
  );
};

export default Account;
