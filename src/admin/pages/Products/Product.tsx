import React from 'react';
import ProductTable from './ProductTable';
import { Button } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import AddProduct from './AddProduct';

const Product = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-xl text-primary-color">Quản lý sản phẩm</h1>

      <div className="pt-2 space-y-3">
        <Button
          variant="contained"
          sx={{
            color: '#00927c',
            '&:focus': {
              outline: 'none',
              boxShadow: 'none',
            },
          }}
        >
          <AddCircle />
        </Button>
        <ProductTable />
      </div>
    </div>
  );
};

export default Product;
