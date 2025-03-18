import React from "react";

export const Button = ({
  children,
  variant = "primary",
  fullWidth = false,
  className = "",
  ...props
}) => {
  const baseStyles = "font-semibold cursor-pointer";
  const variantStyles = {
    primary:
      "px-0 py-2 text-xl text-white rounded-xl bg-zinc-800 max-sm:text-lg",
    text: "text-base text-black",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? "w-full" : ""
        } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
