import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../config/Api';

export const fetchAdminProfile = createAsyncThunk(
  'admin/fetchAdminProfile',
  async (jwt: string, { rejectWithValue }) => {
    try {
      const res = await api.get('/users/profile', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log('fetch profile admin', res.data);
      return res.data;
    } catch (error) {
      console.log('error-----', error);
    }
  }
);

interface AdminState {
  admin: any[];
  selectedAdmin: any;
  profile: any;
  report: any;
  loading: boolean;
  error: any;
}

const initialState: AdminState = {
  admin: [],
  selectedAdmin: null,
  profile: null,
  report: null,
  loading: false,
  error: null,
};

const adminSlide = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAdminProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchAdminProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.profile = action.payload;
    });
    builder.addCase(fetchAdminProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default adminSlide.reducer;
