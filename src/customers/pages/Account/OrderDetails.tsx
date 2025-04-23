import { Box, Button, Divider } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';
import { Payment } from '@mui/icons-material';

const OrderDetails = () => {
  const navigate = useNavigate();
  return (
    <Box className="space-y-5">
      <section className="flex flex-col gap-5 justify-between items-center">
        <img
          className="w-[100px]"
          src="https://down-vn.img.susercontent.com/file/sg-11134201-7qvcs-ljs7txsvbm23b3_tn"
        />
        <div className="text-sm space-y-1 text-center">
          <h1 className="font-bold">Đèn chùm LED</h1>
          <p>
            Đèn chùm hợp kim mạ vàng 24K công nghệ mạ điện độc quyền tự phát sáng bề mặt, 36 tay,
            pha lê K9 D1500*H2200 55171/36 VLCHHK-426-AC - Trên 24 tay
          </p>
          <p>
            <strong>Kích thước: </strong>250cm
          </p>
        </div>
        <div>
          <Button
            sx={{
              color: '#00927c',
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
            }}
            onClick={() => navigate(`/reviews/${5}/create`)}
          >
            Viết đánh giá
          </Button>
        </div>
      </section>
      <section className="border p-5">
        <OrderStepper orderStatus={'PLACED'} />
      </section>
      <div className="border p-5">
        <h1 className="font-bold pb-3">Địa chỉ giao hàng</h1>
        <div className="text-sm space-y-2">
          <div className="flex gap-5 font-medium">
            <p>{`Nam`}</p>
            <Divider flexItem orientation="vertical" />
            <p>{`0888291733`}</p>
          </div>
          <p>{`55/64 Kim Giang, Phường Kim Giang, Quận Thanh Xuân, Hà Nội`}</p>
        </div>
      </div>
      <div className="border space-y-4">
        <div className="flex justify-between text-sm pt-5 px-5">
          <div className="space-y-1">
            <p className="font-bold">Tổng tiền đơn hàng</p>
            <p>
              Bản trả <span className="text-primary-color font-medium text-xs">2,500,000 vnđ </span>
              cho đơn hàng
            </p>
          </div>
          <p className="font-medium">2,500,00 vnđ</p>
        </div>
        <div className="px-5">
          <div className="bg-teal-50 px-5 py-2 text-xs font-medium flex items-center gap-3">
            <Payment />
            <p>Thanh toán khi nhận hàng</p>
          </div>
        </div>
        <Divider />
        <div className="px-5 pb-5">
          <p className="text-l">
            <strong>Mua tại: </strong>Moon Light
          </p>
        </div>
        <div className="p-10">
          <Button
            disabled={true}
            // onClick={()=>{handleCancelOrder()}}
            sx={{
              py: '0.7rem',
              color: 'error.main',
              borderColor: 'error.main',
              opacity: 1, //
              '&.Mui-disabled': {
                color: 'error.main',
                borderColor: 'error.main',
              },
              '&:hover': {
                borderColor: 'error.dark',
                backgroundColor: '#ffe5e5', // màu nền nhẹ khi hover
              },
              '&:focus': {
                outline: 'none',
              },
            }}
            variant="outlined"
            className=""
            fullWidth
          >
            {false ? 'Đơn hàng bị hủy' : 'Hủy đơn hàng'}
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default OrderDetails;
