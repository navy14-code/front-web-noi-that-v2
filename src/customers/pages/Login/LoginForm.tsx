import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleForgotPassword = () => {
    // Bạn có thể thay đổi hành động khi người dùng click vào đây
    alert('Đi tới trang quên mật khẩu');
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email không hợp lệ').required('Email là bắt buộc'),
      password: Yup.string()
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .matches(/[A-Za-z]/, 'Mật khẩu phải chứa ít nhất 1 chữ cái')
        .required('Mật khẩu là bắt buộc'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <p className="text-xl font-bold text-center pb-5 text-primary-color">Đăng nhập</p>
        <div className="space-y-5">
          {/* Email */}
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          {/* Password */}
          <TextField
            fullWidth
            name="password"
            label="Mật khẩu"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        '&:focus': {
                          outline: 'none',
                          boxShadow: 'none',
                        },
                      }}
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
          <Box display="flex" justifyContent="flex-end">
            <span
              onClick={handleForgotPassword}
              style={{
                color: '#00927c',
                cursor: 'pointer',
                textDecoration: 'underline',
              }}
            >
              Quên mật khẩu?
            </span>
          </Box>
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
            Đăng nhập
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
