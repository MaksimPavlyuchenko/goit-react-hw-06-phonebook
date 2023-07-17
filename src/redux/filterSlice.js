import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    filteredName(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { filteredName } = filterSlice.actions;

export const filterReduser = filterSlice.reducer;
