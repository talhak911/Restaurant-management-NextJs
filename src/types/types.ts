import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

export type CustomInputProps = {
  label?: string;
  name: string;
  placeHolder?: string;
  type: HTMLInputTypeAttribute | undefined;
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  additionalProps?: React.InputHTMLAttributes<HTMLInputElement>;

};
export type FIELDS_TYPE = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  editable?: boolean;
  additionalProps?: React.InputHTMLAttributes<HTMLInputElement>;

 };

export type SignUpFieldsParams = {
  name: string;
  setName: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  phone: string;
  setPhone: (value: string) => void;
  dob: string;
  setDob: (value: string) => void;
};
export type SignInFieldsParams = {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
};
export type forgetPasswordFieldsParams = {
  otp:string;
  setOtp:(value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
};

export type CustomButtonProps = {
  label: string; 
  onClick: () => void; 
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
}
