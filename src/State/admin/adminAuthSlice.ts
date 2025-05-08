import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../config/Api';

export const adminLogin = createAsyncThunk<any, any>(
  'auth/login',
  async (loginRequest: { email: string }, { rejectWithValue }) => {
    try {
      const res = await api.post('/auth/login', loginRequest);
      console.log('login otp', res.data);
      const jwt = res.data.jwt;
      localStorage.setItem('jwt', jwt);
    } catch (error) {
      console.log('error-----', error);
    }
  }
);
