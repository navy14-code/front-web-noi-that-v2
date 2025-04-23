import { Box, Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';

const AddressFormScheme = Yup.object().shape({
  name: Yup.string().required('Vui lòng điền họ và tên'),
  phone: Yup.string()
    .required('Vui lòng điền số điện thoại')
    .matches(/^(0|\+84)\d{9}$/, 'Số điện thoại không hợp lệ'),
  localCity: Yup.string().required('Không để trống'),
  city: Yup.string().required('Không để trống'),
  state: Yup.string().required('Không để trống'),
  detailAddress: Yup.string().required('Không để trống'),
});

const AddressForm = () => {
  const [tab, setTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      localCity: '', //Phường/Xã
      city: '', // Quận/Huyện
      state: '', // Tỉnh/Thành phố
      detailAddress: '',
    },
    validationSchema: AddressFormScheme,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box sx={{ max: 'auto' }}>
      <p className="text-xl font-bold pb-5">Địa chỉ mới </p>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={4}>
          {/* Họ và tên */}
          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="name"
              label="Họ và tên"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          {/* Số điện thoại */}
          <Grid size={{ xs: 6 }}>
            <TextField
              fullWidth
              name="phone"
              label="Số điện thoại"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          {/* Phường/Xã */}
          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              name="localCity"
              label="Phường/Xã"
              value={formik.values.localCity}
              onChange={formik.handleChange}
              error={formik.touched.localCity && Boolean(formik.errors.localCity)}
              helperText={formik.touched.localCity && formik.errors.localCity}
            />
          </Grid>
          {/* Quận/Huyện */}
          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              name="city"
              label="Quận/Huyện"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
          </Grid>
          {/* Tỉnh / Thành phố */}
          <Grid size={{ xs: 4 }}>
            <TextField
              fullWidth
              name="state"
              label="Tỉnh / Thành phố"
              value={formik.values.state}
              onChange={formik.handleChange}
              error={formik.touched.state && Boolean(formik.errors.state)}
              helperText={formik.touched.state && formik.errors.state}
            />
          </Grid>
          {/* Địa chỉ cụ thể */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              name="detailAddress"
              label="Địa chỉ cụ thể "
              value={formik.values.detailAddress}
              onChange={formik.handleChange}
              error={formik.touched.detailAddress && Boolean(formik.errors.detailAddress)}
              helperText={formik.touched.detailAddress && formik.errors.detailAddress}
            />
          </Grid>
          {/* Button Lưu */}
          <Grid size={{ xs: 4 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                textAlign: 'center',
                py: '6px',
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
              Lưu
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddressForm;
