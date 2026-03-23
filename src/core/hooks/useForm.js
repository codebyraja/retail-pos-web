import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    console.log("Input Changed:", e.target);

    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;
    
    setForm((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const setField = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialState);
  };

  return {
    form,
    setForm,
    handleChange,
    setField,
    resetForm,
  };
};

export default useForm;
