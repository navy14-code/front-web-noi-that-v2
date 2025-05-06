import React from 'react';
import TransactionTable from './TransactionTable';
import OrderTable from '../Orders/OrderTable';

const Transaction = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-xl text-primary-color">Quản lý giao dịch</h1>
      <TransactionTable />
    </div>
  );
};

export default Transaction;
