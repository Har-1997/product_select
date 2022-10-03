import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  users: [],
  value: 1,
  loading: false,
};


export const getFetch = createAsyncThunk(
  'users/fetchUsers', async ({start = 0}) => {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${start+"0"}`);
    const res = await response.json();
    return res;
  }
);

export const counterSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    paginationChange: (state, action) => {
      state.value = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getFetch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFetch.fulfilled, (state, action) => {

        state.loading = false;
        state.users = action.payload;

      })
      .addCase(getFetch.rejected, (state,action)=>{
        state.loading = false;
        console.log("Error 404 - :)");
      });
  },
});

export const { paginationChange } = counterSlice.actions;


export const selectCount = (state) => state.user.value;


export default counterSlice.reducer;
