import { FORGET_PASSWORD_FIELDS } from "@/constants/constants";
import { useState } from "react";

const useForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const forgetPasswordFields = FORGET_PASSWORD_FIELDS({
    otp,
    setOtp,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  });
  return {
    forgetPasswordFields,
    email,
    setEmail,
  };
};

export default useForgetPasswordForm;
