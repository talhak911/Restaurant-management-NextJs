"use client";

import Link from "next/link";
import CustomButton from "../customButton/CustomButton";
import CustomInput from "../customInput/CustomInput";
import useSignInForm from "./useSignInForm";

function SignInForm() {
  const { signInFields } = useSignInForm();
  return (
    <div className=" space-y-2">
      {signInFields.map((field, index) => (
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
      <div className=" flex justify-self-end">
        <Link
          className="text-xs justify-items-end  text-orange font-extrabold font-mono border-b border-sunset hover:border-b hover:border-orange"
          href={"/forget-password"}
        >
          Forget Password?
        </Link>
      </div>
      <div className="pt-2 flex gap-[6px]  justify-center text-xs   font-semibold">
     <p className="text-darkGreen">Don't have an accout?</p>
        <Link
        className="text-orange font-mono font-extrabold border-b border-sunset hover:border-b hover:border-orange"
          href={"/sign-up"}
        >
          Sign Up
        </Link>
      </div>
      <div className="flex justify-center pt-4">
        <CustomButton
          label="Sign In"
          onClick={() => console.log("Submit clicked")}
          variant="primary"
        />
      </div>
    </div>
  );
}

export default SignInForm;
