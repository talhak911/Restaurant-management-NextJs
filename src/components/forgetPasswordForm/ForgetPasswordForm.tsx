"use client";

import CustomButton from "../customButton/CustomButton";
import CustomInput from "../customInput/CustomInput";
import useForgetPasswordForm from "./useForgetPasswordForm";

function ForgetPasswordForm() {
  const { forgetPasswordFields ,email,setEmail} = useForgetPasswordForm();
  return (
    <div className=" space-y-2">
      <div className="relative space-y-2">
        <h4>Email</h4>
        <input
          className="text-sm md:text-base md:min-w-[250px] border-black border-[1px] rounded-lg pl-2 pr-14 placeholder:text-sm py-1 w-full"
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          name='email'
        />
        <button className="absolute font-bold text-orange border-red-600 border-b text-[10px] right-2 bottom-2">Get Otp</button>
      </div>
      {forgetPasswordFields.map((field, index) => (
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
          label="Reset"
          onClick={() => console.log("Submit clicked")}
          variant="primary"
        />
      </div>
    </div>
  );
}

export default ForgetPasswordForm;
