import React from 'react';
import OrderItem from './OrderItem';

const Orders = () => {
  return (
    <div className="text-sm min-h-screen">
      <div className="pb-5">
        <h1 className="font-semibold">Tất cả đơn hàng</h1>
        <p>From bla bla</p>
      </div>
      <div className="space-y-2">
        {[1, 1, 1, 1, 1].map((item) => (
          <OrderItem />
        ))}
      </div>
    </div>
  );
};

export default Orders;
