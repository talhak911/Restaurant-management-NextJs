import {
  FIELDS_TYPE,
  forgetPasswordFieldsParams,
  SignInFieldsParams,
  SignUpFieldsParams,
} from "@/types/types";
export const SIGN_UP_FIELDS = ({
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
}: SignUpFieldsParams): FIELDS_TYPE[] => {
  const today = new Date().toISOString().split("T")[0];

  return [
    {
      label: "Full name",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "Enter your name",
      type: "text",
    },
    {
      label: "Email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      placeholder: "Enter Email",
      type: "email",
    },
    {
      label: "Password",
      value: password,
      onChange: (e) => setPassword(e.target.value),
      placeholder: "Enter password",
      type: "password",
    },
    {
      label: "Mobile Number",
      value: phone,
      onChange: (e) => setPhone(e.target.value),
      placeholder: "03XXXXXXXXXX",
      type: "tel",
    },
    {
      label: "Date of Birth",
      value: dob,
      onChange: (e) => setDob(e.target.value),
      placeholder: "",
      type: "date",
      additionalProps: { max: today },
    },
  ];
};

export const SIGN_IN_FIELDS = ({
  email,
  setEmail,
  password,
  setPassword,
}: SignInFieldsParams): FIELDS_TYPE[] => [
  {
    label: "Email",
    value: email,
    onChange: (e) => setEmail(e.target.value),
    placeholder: "Enter Email",
    type: "email",
  },
  {
    label: "Password",
    value: password,
    onChange: (e) => setPassword(e.target.value),
    placeholder: "Enter password",
    type: "password",
  },
];
export const FORGET_PASSWORD_FIELDS = ({

  otp,
  setOtp,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}: forgetPasswordFieldsParams): FIELDS_TYPE[] => [

  {
    label: "Otp",
    value: otp,
    onChange: (e) => setOtp(e.target.value),
    placeholder: "Enter Otp",
    type: "text",
  },
  {
    label: "Password",
    value: password,
    onChange: (e) => setPassword(e.target.value),
    placeholder: "Enter password",
    type: "password",
  },
  {
    label: "Confirm Password",
    value: confirmPassword,
    onChange: (e) => setConfirmPassword(e.target.value),
    placeholder: "Retype password",
    type: "password",
  },
];
