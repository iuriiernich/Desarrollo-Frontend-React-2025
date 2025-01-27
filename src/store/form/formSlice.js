import { createSlice } from '@reduxjs/toolkit';

const PASSWORD = 'mod7USIP-IURII';

const initialState = {
   loginForm: {
      module: 'React Mod7',
      username: '',
      email: '',
      password: PASSWORD,
}
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { module, username, email, password } = action.payload;
      if (password === PASSWORD) {
        state.module = module,
        state.username = username;
        state.email = email;
        state.password = password;
      }
    },
    resetFormData: (state) => {
      state.module = '';
      state.username = '';
      state.email = '';
      state.password = PASSWORD;
    },
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;