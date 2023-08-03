import { NumericFormat } from "react-number-format";

export function InputCurrency() {
  return (
    <NumericFormat
      thousandSeparator="."
      decimalSeparator=","
      className="w-full text-[32px] font-bold tracking-tightest text-gray-800 outline-none"
      defaultValue="0"
    />
  );
}
