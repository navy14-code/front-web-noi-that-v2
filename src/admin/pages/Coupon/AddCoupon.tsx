import { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Button, Grid, TextField } from '@mui/material';
import React from 'react';

interface CouponValues {
  code: string;
  discountPercentage: number;
  validityStartDate: Dayjs | null;
  validityEndDate: Date | null;
  minimumOrderValue: number;
}

const AddCoupon = () => {
  const formik = useFormik<CouponValues>({
    initialValues: {
      code: '',
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0,
    },
    onSubmit: (values) => {
      const formatValues = {
        ...values,
        validityStartDate: values.validityStartDate?.toISOString(),
        validityEndDate: values.validityEndDate?.toISOString(),
      };
      console.log('Biểu mẫu đã gửi', values, formatValues);
    },
  });

  return (
    <div>
      <h1 className="text-2xl text-primary-color font-bold pb-5">Tạo mã giảm giá</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component={'form'} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                id="code"
                name="code"
                label="Mã giảm"
                value={formik.values.code}
                onChange={formik.handleChange}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="discountPercentage"
                label="Phần trăm"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                error={
                  formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)
                }
                helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
                required
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: '100%' }}
                label="Ngày bắt đầu"
                name="validityStartDate"
                onChange={formik.handleChange}
                value={formik.values.validityStartDate}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <DatePicker
                sx={{ width: '100%' }}
                label="Ngày kết thúc"
                name="validityEndDate"
                onChange={formik.handleChange}
                value={formik.values.validityStartDate}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                name="minimumOrderValue"
                label="Giá trị tối thiểu"
                value={formik.values.minimumOrderValue}
                onChange={formik.handleChange}
                error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
                required
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  py: '0.8rem',
                  color: 'white',
                  background: '#00927c',
                  '&:focus': {
                    outline: 'none',
                    boxShadow: 'none',
                  },
                }}
              >
                Tạo
              </Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default AddCoupon;
