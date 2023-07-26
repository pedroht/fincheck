import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  error?: boolean;
}

export function Button({ error, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      data-error={error}
      className="bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 px-6 h-12 rounded-2xl font-medium text-white disabled:text-gray-400 disabled:cursor-not-allowed transition-all data-[error=true]:bg-red-900"
    />
  )
}
