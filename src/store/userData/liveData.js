// features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';
const initialState = { 
  firstSubjectLine : '',
  secondSubjectLine : '',
  previewText : ''
}
const compignForm = createSlice({
  name: 'compignForm',
  initialState,
  reducers: {
    setFormValue: (state,action) => {
      console.log("actionpayload", action.payload)
     const {field,value} = action.payload;
     state[field] = value;
    },
    resetForm : ()=> initialState
  }
});

// Export actions to be used in components
export const {setFormValue, resetForm} = compignForm.actions;

// Export the reducer to be used in the store
export default compignForm.reducer;
