import { CustomButtonProps } from "@/types/types";

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "medium",
}) => {
  const baseClasses = "px-4 py-2 font-semibold rounded-lg focus:outline-none";
  const variantClasses = {
    primary: "bg-tigerEye text-white hover:bg-orange",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }[variant];

  const sizeClasses = {
    small: "text-sm py-1 px-2",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6",
  }[size];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${sizeClasses} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
    </button>
  );
};

export default CustomButton;
