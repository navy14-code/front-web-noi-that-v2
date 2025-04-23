import { CheckCircle, FiberManualRecord } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';

const steps = [
  { name: 'Đã đặt hàng', description: 'vào Thứ Năm, 11 Tháng 7', value: 'PLACED' },
  { name: 'Đã đóng gói', description: 'Sản phẩm đã đóng gói', value: 'CONFIRM' },
  { name: 'Đã gửi đi', description: 'trước Thứ Hai, 15 Tháng 7', value: 'SHIPPED' },
  { name: 'Đang giao', description: 'dự kiến từ 16 Tháng 7 - 18 Tháng 7', value: 'ARRIVING' },
  { name: 'Đã giao', description: 'trong khoảng 16 Tháng 7 - 18 Tháng 7', value: 'DELIVERED' },
];
const canceledStep = [
  { name: 'Đã đặt hàng', description: 'vào Thứ Năm, 11 Tháng 7', value: 'PLACED' },
  { name: 'Đã hủy', description: 'vào Thứ Năm, 11 Tháng 7', value: 'CANCELLED' },
];
const currentStep = 1;
const OrderStepper = ({ orderStatus }: any) => {
  const [statusStep, setStatusStep] = useState(steps);
  useEffect(() => {
    if (orderStatus === 'CANCELLED') {
      setStatusStep(canceledStep);
    } else {
      setStatusStep(steps);
    }
  }, [orderStatus]);
  return (
    <div>
      <Box className="my-10">
        {statusStep.map((step, index) => (
          <>
            <div key={index} className={`flex px-4`}>
              <div className="flex flex-col items-center">
                <Box
                  sx={{ zIndex: -1 }}
                  className={`w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                    index <= currentStep
                      ? 'bg-gray-200 text-primary-color'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step.value === orderStatus ? (
                    <CheckCircle />
                  ) : (
                    <FiberManualRecord sx={{ zIndex: -1 }} />
                  )}
                </Box>
                {statusStep.length - 1 != index && (
                  <div
                    className={`border h-20 w-[2px] ${
                      index < currentStep ? 'bg-primary-color' : 'bg-gray-300 text-gray-600'
                    }`}
                  ></div>
                )}
              </div>
              <div className={`ml-2 w-full`}>
                <div
                  className={`${
                    step.value === orderStatus
                      ? 'bg-primary-color p-2 text-white font-medium rounded-md translate-y-3'
                      : ''
                  } ${
                    orderStatus === 'CANCELLED' && step.value === orderStatus ? 'bg-red-500' : ''
                  } w-full`}
                >
                  <p className={``}>{step.name}</p>
                  <p
                    className={`${
                      step.value === orderStatus ? 'text-gray-200' : 'text-gray-500'
                    } text-xs`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        ))}
      </Box>
    </div>
  );
};

export default OrderStepper;
