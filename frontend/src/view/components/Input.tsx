import { CrossCircledIcon } from "@radix-ui/react-icons";
import { ComponentProps, forwardRef } from "react";

import { cn } from "../../app/utils/cn";

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, placeholder, id, error, className, ...props }, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          id={inputId}
          name={name}
          placeholder=" "
          className={
            cn(
              "bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 peer pt-4 focus:border-gray-800 transition-all outline-none",
              error && '!border-red-900',
              className
            )
          }
          ref={ref}
        />

        <label
          htmlFor={inputId}
          className="absolute left-[13px] top-2 text-xs pointer-events-none text-gray-700 peer-placeholder-shown:top-3.5 peer-focus-within:top-2 peer-focus-within:text-xs peer-placeholder-shown:text-base transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="mt-2 flex text-red-900 gap-2 items-center">
            <CrossCircledIcon />
            <span className="text-xs">
              {error}
            </span>
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
