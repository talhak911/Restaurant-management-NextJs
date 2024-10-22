import { SIGN_IN_FIELDS } from "@/constants/constants";
import { useState } from "react";

const useSignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const signInFields = SIGN_IN_FIELDS({
  
    email,
    setEmail,
    password,
    setPassword,
  });
  return {
    signInFields,
  };
};

export default useSignUpForm;
