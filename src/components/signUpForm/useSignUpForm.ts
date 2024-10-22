import { SIGN_UP_FIELDS } from "@/constants/constants";
import { useState } from "react";

const useSignUpForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<string | null>(null);
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");

  const signUpFields = SIGN_UP_FIELDS({
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    dob,
    setDob,
  });
  return {
    signUpFields,
  };
};

export default useSignUpForm;
