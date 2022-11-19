import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

/** function to register user  */
export const userRegister = createAsyncThunk(
  'user/register',
  async register => {
    try {
      let response = await axios.post(
        'http://localhost:5000/api/v1/register',
        register
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }
);
/**initial state for user */
const initialState = {
  user: {},
  status: null,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state, action) => {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: {
    //Register User
    [userRegister.pending]: state => {
      state.status = 'pending';
      state.isLoading = true;
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload?.data?.newUser;
      state.isLoading = false;
      localStorage.setItem('token', action.payload?.data.token);
    },
    [userRegister.rejected]: state => {
      state.status = 'fail';
      state.isLoading = false;
    },
  },
});

export default userSlice.reducer;
