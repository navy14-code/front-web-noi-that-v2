import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../config/Api';
import { Product } from '../../types/ProductTypes';
export const fetchAdminProducts = createAsyncThunk<Product[], any>(
  '/admin/fetchAdminProducts',
  async (jwt, { rejectWithValue }) => {
    try {
      const res = await api.get('/admin/products', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = res.data;
      return data;
    } catch (error) {
      console.log('error-----', error);
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk<Product, { req: any; jwt: string | null }>(
  '/adminProduct/createProduct',
  async (args, { rejectWithValue }) => {
    const { req, jwt } = args;
    try {
      const res = await api.post(`/admin/products`, req, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return res.data;
    } catch (error) {
      console.log('error-----', error);
      // throw error;
    }
  }
);

interface AdminProductState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: AdminProductState = {
  products: [],
  loading: false,
  error: null,
};

const adminProductSlice = createSlice({
  name: 'adminProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdminProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAdminProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(fetchAdminProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.push(action.payload);
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default adminProductSlice.reducer;
