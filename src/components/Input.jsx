import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const classses =
    "w-full p-1 border-b-2 rounded-sm border-slate-400 bg-slate-200 text-slate-600 focus:outline-none focus:border-slate-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className=" text-sm font-bold uppercase text-slate-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classses} {...props} />
      ) : (
        <input ref={ref} className={classses} {...props} />
      )}
    </p>
  );
});

export default Input;
