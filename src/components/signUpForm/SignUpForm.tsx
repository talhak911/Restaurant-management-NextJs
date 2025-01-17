"use client";

import Link from "next/link";
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
      <div className="pt-2 flex gap-[6px]  justify-center text-xs   font-semibold">
     <p className="text-darkGreen">Have an accout?</p>
        <Link
        className="text-orange font-mono font-extrabold border-b border-sunset hover:border-b hover:border-orange"
        href={"/sign-in"}
        >
          Sign In
        </Link>
      </div>
      <div className="flex justify-center pt-3">
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
