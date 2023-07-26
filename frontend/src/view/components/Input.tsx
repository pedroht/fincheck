import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  name: string
}

export function Input({ name, placeholder, id, ...props }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        id={inputId}
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 peer pt-4 focus:border-gray-800 transition-all outline-none"
        placeholder=" "
      />

      <label
        htmlFor={inputId}
        className="absolute left-[13px] top-2 text-xs pointer-events-none text-gray-700 peer-placeholder-shown:top-3.5 peer-focus-within:top-2 peer-focus-within:text-xs peer-placeholder-shown:text-base transition-all"
      >
        {placeholder}
      </label>
    </div>
  )
}
