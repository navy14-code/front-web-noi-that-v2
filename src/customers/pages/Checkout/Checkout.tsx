import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddressCard from './AddressCard';
import AddressForm from './AddressForm';
import AddressFormS from './AddressFormS';
import PricingCard from '../Cart/PricingCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const paymentList = [
  {
    value: 'COD',
    image: 'https://cdn-icons-png.flaticon.com/128/3796/3796142.png',
    label: '',
  },
  {
    value: 'VNPay',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutP9weqAPNNrV0V616bloZn2fwAdAOHqnFQ&s',
    label: '',
  },
];
const Checkout = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [payment, setPayment] = useState('COD');

  const handlePaymentChange = (event: any) => {
    setPayment(event.target.value);
  };

  return (
    <div>
      <div className="pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen">
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
          <div className="col-span-2 space-y-5">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Chọn địa chỉ</h1>
              <Button
                onClick={() => {
                  handleOpen();
                }}
                sx={{
                  py: '11px',
                  color: '#00927c',
                  border: '1px solid #00927c',
                  boxShadow: 'none',
                  background: 'white',
                  '&:hover': {
                    backgroundColor: '#e6f4f1',
                    border: '1px solid #00927c',
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                Thêm địa chỉ
              </Button>
            </div>
            <div className="text-xs font-medium space-y-5">
              <p>Lưu địa chỉ</p>
              <div className="space-y-3">
                {[1, 1, 1].map((item) => (
                  <AddressCard />
                ))}
              </div>
            </div>

            <div className="py-4 px-5 rounded-md border">
              <Button
                onClick={() => {
                  handleOpen();
                }}
                sx={{
                  py: '11px',
                  color: '#00927c',
                  border: '1px solid #00927c',
                  boxShadow: 'none',
                  background: 'white',
                  '&:hover': {
                    backgroundColor: '#e6f4f1',
                    border: '1px solid #00927c',
                  },
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                Thêm địa chỉ
              </Button>
            </div>
          </div>
          <div>
            <div>
              <div className="space-y-3 border p-5 rounded-md">
                <h1 className="text-primary-color font-medium pb-2 text-center">
                  Phương thức thanh toán{' '}
                </h1>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex justify-between pr-0"
                  onChange={(event) => {
                    handlePaymentChange(event);
                  }}
                  value={payment}
                  sx={{
                    '& .MuiRadio-root': {
                      color: '#00927c',
                    },
                    '& .MuiRadio-root.Mui-checked': {
                      color: '#00927c', // Màu khi đã chọn
                    },
                  }}
                >
                  {paymentList.map((item) => (
                    <FormControlLabel
                      className="w-[45%] pr-2 rounded-md justify-center"
                      value={item.value}
                      control={<Radio />}
                      label={
                        <img
                          className={`${item.value == 'stripe' ? 'w-14' : ''} object-cover`}
                          src={item.image}
                          alt={item.label}
                        />
                      }
                    />
                  ))}{' '}
                </RadioGroup>
              </div>
            </div>
            <div className="border rounded-md">
              <PricingCard />
              <div className="p-5">
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    py: '11px',
                    color: 'white',
                    border: 'none',
                    boxShadow: 'none',
                    background: '#00927c',
                    '&:focus': {
                      outline: 'none',
                      boxShadow: 'none',
                    },
                  }}
                >
                  Hoàn tất
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddressForm />
        </Box>
      </Modal>
    </div>
  );
};

export default Checkout;
