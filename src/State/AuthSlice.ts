import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../config/Api';

export const sendLoginOtp = createAsyncThunk(
  'auth/sendLoginOtp',
  async ({ email, password }: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const res = await api.post('/auth/sent/login-otp', { email, password });
      console.log('login otp', res);
    } catch (error) {
      console.log('error-----', error);
    }
  }
);

export const login = createAsyncThunk<any, any>(
  'auth/login',
  async (loginRequest: { email: string }, { rejectWithValue }) => {
    try {
      const res = await api.post('/auth/login', loginRequest);
      console.log('login otp', res.data);
    } catch (error) {
      console.log('error-----', error);
    }
  }
);

export const logout = createAsyncThunk<any, any>(
  '/auth/logout',
  async (navigate, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log('Đăng xuất thành công');
      navigate('/');
    } catch (error) {
      console.log('Error---', error);
    }
  }
);
