import { NumericFormat } from "react-number-format";
import { cn } from "../../app/utils/cn";
import { FieldError } from "./FieldError";

interface InputCurrencyProps {
  error?: string;
  value?: string;
  onChange?(value: string): void;
}

export function InputCurrency({ error, value, onChange }: InputCurrencyProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator="."
        decimalSeparator=","
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className={cn(
          "w-full text-[32px] font-bold tracking-tightest text-gray-800 outline-none",
          error && "text-red-900",
        )}
      />

      <FieldError error={error} />
    </div>
  );
}
