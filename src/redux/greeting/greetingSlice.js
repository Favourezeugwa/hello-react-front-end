import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'http://localhost:3001/api/v1/messages';

export const fetchMessage = createAsyncThunk(
  'message/fetchMessage',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'message',
  initialState: [],
  extraReducers: {
    [fetchMessage.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default greetingSlice.reducer;
