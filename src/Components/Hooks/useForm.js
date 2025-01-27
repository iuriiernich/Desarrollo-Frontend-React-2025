import { useState } from "react";
const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const resetForm = () => {
    setFormData(initialState.reset());
  };

   return {
    formData,
    handleChange,
    resetForm,
  };
};

export default useForm;
