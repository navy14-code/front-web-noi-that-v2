import React, { useState } from 'react';
import { denChumLevelTwo } from '../../../data/category/level two/denChumLevelTwo';
import { denBanLevelTwo } from '../../../data/category/level two/denBanLevelTwo';
import { denTuongLevelTwo } from '../../../data/category/level two/denTuongLevelTwo';
import { denThaLevelTwo } from '../../../data/category/level two/denThaLevelTwo';
import { denChumLevelThree } from '../../../data/category/level three/denChumLevelThree';
import { denBanLevelThree } from '../../../data/category/level three/denBanLevelThree';
import { denTuongLevelThree } from '../../../data/category/level three/denTuongLevelThree';
import { denThaLevelThree } from '../../../data/category/level three/denThaLevelThree';
import { useFormik } from 'formik';
import { uploadToCloudinary } from '../../../Util/uploadToCloudinary';
import {
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { AddPhotoAlternate, Close } from '@mui/icons-material';
import { mainCategory } from '../../../data/category/mainCategory';

const categoryTwo: { [key: string]: any[] } = {
  denChum: denChumLevelTwo,
  denBan: denBanLevelTwo,
  denTuong: denTuongLevelTwo,
  denTha: denThaLevelTwo,
};
const categoryThree: { [key: string]: any[] } = {
  denChum: denChumLevelThree,
  denBan: denBanLevelThree,
  denTuong: denTuongLevelThree,
  denTha: denThaLevelThree,
};

const AddProduct = () => {
  const [uploadImage, setUploadingImage] = useState(false);
  const [snackbarOpen, setOpenSnackbar] = useState(false);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      price: '',
      discountPrice: '',
      quantity: '',
      size: '',
      brand: '',
      images: [],
      category: '',
      category2: '',
      category3: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    setUploadingImage(true);

    const image = await uploadToCloudinary(file);
    formik.setFieldValue('images', [...formik.values.images, image]);
    setUploadingImage(false);
  };

  const handleRemoveImage = (index: number) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  const childCategory = (category: any, parentCategoryId: any) => {
    return category.filter((child: any) => {
      return child.parentCategoryId == parentCategoryId;
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="space-y-4 p-4  ">
        <Grid container spacing={2}>
          {/* Thêm ảnh */}
          <Grid className="flex flex-wrap gap-5" size={{ xs: 12 }}>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-400">
                <AddPhotoAlternate className="text-gray-700" />
              </span>
              {uploadImage && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgress />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-2">
              {formik.values.images.map((image, index) => (
                <div className="relative">
                  <img
                    className="w-24 h-24 object-cover"
                    key={index}
                    src={image}
                    alt={`ProductImage ${index + 1}`}
                  />
                  <IconButton
                    onClick={() => {
                      handleRemoveImage(index);
                    }}
                    className=""
                    size="small"
                    color="error"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      outline: 'none',
                    }}
                  >
                    <Close sx={{ fontSize: '1rem' }} />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          {/* Tiêu đề */}
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              id="title"
              name="title"
              label="Tiêu đề"
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
              required
            />
          </Grid>
          {/* Mô tả */}
          <Grid size={{ xs: 12 }}>
            <TextField
              multiline
              rows={4}
              fullWidth
              id="description"
              name="description"
              label="Mô tả"
              value={formik.values.description}
              onChange={formik.handleChange}
              error={formik.touched.description && Boolean(formik.errors.description)}
              helperText={formik.touched.description && formik.errors.description}
              required
            />
          </Grid>
          {/* Giá */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <TextField
              fullWidth
              type="number"
              id="price"
              name="price"
              label="Giá"
              value={formik.values.price}
              onChange={formik.handleChange}
              error={formik.touched.price && Boolean(formik.errors.price)}
              helperText={formik.touched.price && formik.errors.price}
              required
            />
          </Grid>
          {/* Giá giảm */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <TextField
              fullWidth
              type="number"
              id="discountPrice"
              name="discountPrice"
              label="Giá giảm"
              value={formik.values.discountPrice}
              onChange={formik.handleChange}
              error={formik.touched.discountPrice && Boolean(formik.errors.discountPrice)}
              helperText={formik.touched.discountPrice && formik.errors.discountPrice}
              required
            />
          </Grid>
          {/* Kích thước */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.size && Boolean(formik.errors.size)}
              required
            >
              <InputLabel id="size-label">Kích thước</InputLabel>
              <Select
                labelId="size-label"
                id="size"
                name="size"
                value={formik.values.size}
                onChange={formik.handleChange}
                label="Kích thước"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Free">Free</MenuItem>
                <MenuItem value="75cm">75cm</MenuItem>
                <MenuItem value="150cm">150cm</MenuItem>
                <MenuItem value="200cm">200cm</MenuItem>
                <MenuItem value="250cm">250cm</MenuItem>
                <MenuItem value="300cm">300cm</MenuItem>
              </Select>
              {formik.touched.size && formik.errors.size && (
                <FormHelperText>{formik.errors.size}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          {/* Danh mục */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category)}
              required
            >
              <InputLabel id="category-label">Danh mục</InputLabel>
              <Select
                labelId="category-label"
                id="category"
                name="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                label="Danh mục"
              >
                {mainCategory.map((item) => (
                  <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          {/* Danh mục 2 */}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category2)}
              required
            >
              <InputLabel id="category2-label">Danh mục cấp 2</InputLabel>
              <Select
                labelId="category2-label"
                id="category2"
                name="category2"
                value={formik.values.category2}
                onChange={formik.handleChange}
                label="Danh mục cấp 2"
              >
                {formik.values.category &&
                  categoryTwo[formik.values.category]?.map((item) => (
                    <MenuItem value={item.categoryId}>{item.name}</MenuItem>
                  ))}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          {/* Danh mục 3*/}
          <Grid size={{ xs: 12, md: 4, lg: 4 }}>
            <FormControl
              fullWidth
              error={formik.touched.category && Boolean(formik.errors.category3)}
              required
            >
              <InputLabel id="category3-label">Danh mục cấp 3</InputLabel>
              <Select
                labelId="category3-label"
                id="category3"
                name="category3"
                value={formik.values.category3}
                onChange={formik.handleChange}
                label="Danh mục cấp 3"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {formik.values.category2 &&
                  childCategory(
                    categoryThree[formik.values.category],
                    formik.values.category2
                  )?.map((item: any) => <MenuItem value={item.categoryId}>{item.name}</MenuItem>)}
              </Select>
              {formik.touched.category && formik.errors.category && (
                <FormHelperText>{formik.errors.category}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                color: 'white',
                background: '#00927c',
                '&:focus': {
                  outline: 'none',
                  boxShadow: 'none',
                },
              }}
            >
              {false ? (
                <CircularProgress
                  size="small"
                  sx={{
                    width: '27px',
                    height: '27px',
                  }}
                />
              ) : (
                'Thêm sản phẩm'
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddProduct;
