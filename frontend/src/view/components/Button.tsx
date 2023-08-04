import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<"button"> {
  isLoading?: boolean;
  variant?: "danger" | "ghost";
}

export function Button({
  variant,
  className,
  isLoading,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        "flex h-12 items-center justify-center rounded-2xl bg-teal-900 px-6 font-medium text-white transition-all hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400",
        variant === "danger" && "bg-red-900 text-white hover:bg-red-800",
        className,
        variant === "ghost" &&
          "border border-gray-800 bg-transparent text-gray-800 hover:bg-gray-800/5",
      )}
    >
      {isLoading && <Spinner className="h-6 w-6" />}
      {!isLoading && props.children}
    </button>
  );
}
