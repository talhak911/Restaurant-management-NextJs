"use client";

import CustomButton from "../customButton/CustomButton";
import CustomInput from "../customInput/CustomInput";
import useSignUpForm from "./useSignUpForm";

function SignUpForm() {
  const { signUpFields } = useSignUpForm();
  return (
    <div className=" space-y-2">
      {signUpFields.map((field, index) => (
        <CustomInput
          key={index}
          name={field.label}
          value={field.value}
          type={field.type}
          label={field.label}
          placeHolder={field.placeholder}
          onChange={field.onChange}
          additionalProps={field.additionalProps}
        />
      ))}

      <div className="flex justify-center pt-4">
        <CustomButton
          label="Sign Up"
          onClick={() => console.log("Submit clicked")}
          variant="primary"
        />
      </div>
    </div>
  );
}

export default SignUpForm;
