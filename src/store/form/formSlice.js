import { createSlice } from "@reduxjs/toolkit";

const PASSWORD = "mod7USIP-IURII";

const initialState = {
  loginForm: {
    module: "React Mod7",
    username: "",
    email: "",
    password: PASSWORD,
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { module, username, email, password } = action.payload;

      // Verifica qué datos están llegando al reducer
      //console.log('Datos recibidos en setFormData:', action.payload);

      if (password === PASSWORD) {
        state.loginForm.module = module;
        state.loginForm.username = username;
        state.loginForm.email = email;
        state.loginForm.password = password;
      }
    },
    resetFormData: (state) => {
      state.loginForm = {
        module: "",
        username: "",
        email: "",
        password: PASSWORD,
      };
    },  
  },
});

export const { setFormData, resetFormData } = formSlice.actions;
export default formSlice.reducer;
