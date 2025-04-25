import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Họ và tên là bắt buộc'),
      phone: Yup.string()
        .required('Số điện thoại là bắt buộc')
        .matches(/^(0|\+84)\d{9}$/, 'Số điện thoại không hợp lệ'),
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
        <p className="text-xl font-bold text-center pb-5 text-primary-color">Đăng ký tài khoản</p>
        <div className="space-y-5">
          {/* Họ và tên */}
          <TextField
            fullWidth
            name="name"
            label="Họ và tên"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          {/* Số điện thoại */}
          <TextField
            fullWidth
            name="phone"
            label="Số điện thoại"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
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
            Đăng ký
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RegisterForm;
