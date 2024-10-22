import { CustomInputProps } from "@/types/types";

function CustomInput({
  name,
  value,
  type,
  label,
  placeHolder,
  onChange,
  additionalProps
}: CustomInputProps) {
  return (
    <div className=" space-y-2">
      <h4 >{label}</h4>
      <input
        className=" border-black border-[1px] rounded-lg px-2 placeholder:text-sm py-1 w-full"
        placeholder={placeHolder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        {...additionalProps}
      />
    </div>
  );
}

export default CustomInput;
