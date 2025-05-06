import { Button, Card, Divider } from '@mui/material';
import React from 'react';
import TransactionTable from './TransactionTable';

const Payment = () => {
  return (
    <div className="space-y-5">
      <Card className="rounded-md space-y-4 p-5">
        <h1 className="text-gray-600 font-medium">Tổng thu nhập</h1>
        <h1 className="font-bold text-xl pb-1">100,000,000 vnđ</h1>
        <Divider />
        <p className="text-gray-600 font-medium pt-1">
          Đã thanh toán : 1,000 <strong>vnđ</strong>
        </p>
      </Card>
      <div className="pt-10 space-y-3">
        <Button
          variant="contained"
          sx={{
            color: 'white',
            background: '#00927c',
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        >
          Giao dịch
        </Button>
        <TransactionTable />
      </div>
    </div>
  );
};

export default Payment;
