import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState("");
  return [
    values,
    (e) => setValues({ ...values, [e.target.name]: e.target.value }),
  ];
};
export default useForm;
