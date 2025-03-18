import React from "react";

export const Input = ({ label, className = "", ...props }) => {
  return (
    <div className="flex flex-col gap-2.5">
      <label className="text-base text-black">{label}</label>
      <input
        className={`w-full bg-white rounded-md border border-solid border-stone-300 h-[38px] px-3 ${className}`}
        {...props}
      />
    </div>
  );
};
