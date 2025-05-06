import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Kiểm tra tính hợp lệ của email
    if (!email) {
      setEmailError('Vui lòng điền email');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email không hợp lệ');
    } else {
      setEmailError('');
      console.log({ email });
      // Xử lý gửi OTP hoặc chuyển hướng tới trang khác
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <p className="text-xl font-bold text-center pb-5 text-primary-color">Quên mật khẩu</p>
        <div className="space-y-5">
          {/* Email */}
          <TextField
            fullWidth
            name="email"
            label="Nhập Email"
            value={email}
            onChange={handleEmailChange}
            error={Boolean(emailError)}
            helperText={emailError}
          />
        </div>
        {/* Lưu */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#00927c',
              color: 'white',
              px: 5,
              py: 1.5,
              '&:focus': {
                outline: 'none',
                boxShadow: 'none',
              },
            }}
          >
            Gửi OTP
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ForgotPasswordForm;
