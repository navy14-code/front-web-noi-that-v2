import { Inventory } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { teal } from '@mui/material/colors';
import React from 'react';

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <div>
            <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
              <Inventory />
            </Avatar>
          </div>
          <div>
            <h1 className="font-bold text-primary-color">Chờ xác nhận</h1>
            <p>Đến trước: thứ Hai, 23/04/2025</p>
          </div>
          <div className="p-5 bg-slate-50 flex gap-3">
            <div>
              <img
                className="w-[70px]"
                src="https://down-vn.img.susercontent.com/file/sg-11134201-7qvcs-ljs7txsvbm23b3_tn"
                alt=""
              />
            </div>
            <div className="w-full space-y-2">
              <h1 className="font-bold">Đèn trùm LED </h1>
              <p className="text-gray-400 text-xs">
                Đèn chùm hợp kim mạ vàng 24K công nghệ mạ điện độc quyền tự phát sáng bề mặt, 36
                tay, pha lê K9 D1500*H2200 55171/36 VLCHHK-426-AC - Trên 24 tay
              </p>
              <p>
                <strong>Kích thước: </strong>
                250cm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
