import { CrossCircledIcon } from "@radix-ui/react-icons";

interface FieldErrorProps {
  error?: string;
}

export function FieldError(props: FieldErrorProps) {
  if (!props.error) return null;

  return (
    <div className="mt-2 flex items-center gap-2 text-red-900">
      <CrossCircledIcon />
      <span className="text-xs">{props.error}</span>
    </div>
  );
}
