import { Button, Step, StepLabel, Stepper } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import RegisterForm from './RegisterForm';

const steps = ['Đăng ký tài khoản', 'Xác thực email', 'Thành công'];

const AccountForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (value: number) => () => {
    (activeStep < steps.length - 1 || (activeStep > 0 && value == -1)) &&
      setActiveStep(activeStep + value);
    activeStep == steps.length - 1 && handleCreateAccount();
  };
  const handleCreateAccount = () => {
    console.log('Tạo tài khoản');
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              sx={{
                '& .MuiStepLabel-label': {
                  color: 'white', // Text bình thường
                },
                '& .MuiStepIcon-root.Mui-completed': {
                  color: '#00927c', // Màu khi đã hoàn thành
                },
                '& .MuiStepIcon-root.Mui-active': {
                  color: '#00927c', // Màu step hiện tại
                },
                '& .MuiStepLabel-label.Mui-active': {
                  color: '#00927c',
                  fontWeight: 'bold',
                },
                '& .MuiStepLabel-label.Mui-completed': {
                  color: '#00927c',
                },
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <section className="mt-1 space-y-5">
        <div>{activeStep == 0 ? <RegisterForm /> : ''}</div>

        <div className="flex items-center justify-between">
          <Button
            onClick={handleStep(-1)}
            variant="contained"
            disabled={activeStep == 0}
            sx={{
              color: 'white',
              background: '#00927c',
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
            }}
          >
            Quay lại
          </Button>
          <Button
            onClick={handleStep(1)}
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
            {activeStep == steps.length - 1 ? 'Tạo tài khoản' : 'Tiếp tục'}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AccountForm;
