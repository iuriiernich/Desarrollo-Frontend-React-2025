import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   loginForm: {
      module: 'React Mod7',
      username: '',
      email: '',
      password: 'mod7USIP-IURII',
}
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { username, email, password } = action.payload;
      if (password === 'mod7USIP-IURII') {
        state.username = username;
        state.email = email;
        state.password = password;
      }
    },
    resetFormData: (state) => {
      state.username = '';
      state.email = '';
      state.password = 'mod7USIP-IURII';
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;