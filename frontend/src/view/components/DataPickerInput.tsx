import { useState } from "react";
import { cn } from "../../app/utils/cn";
import { formatDate } from "../../app/utils/formatDate";
import { DatePicker } from "./DatePicker";
import { FieldError } from "./FieldError";
import { Popover } from "./Popover";

interface DatePickerInputProps {
  error?: string;
  className?: string;
}

export function DatePickerInput({ error, className }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type="button"
            className={cn(
              "relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 pt-4 text-left text-gray-700 outline-none transition-all focus:border-gray-800",
              error && "!border-red-900",
              className,
            )}
          >
            <span className="pointer-events-none absolute left-[13px] top-2 text-xs text-gray-700">
              Data
            </span>

            <span className="">{formatDate(selectedDate)}</span>
          </button>
        </Popover.Trigger>

        <Popover.Content>
          <DatePicker value={selectedDate} onChange={setSelectedDate} />
        </Popover.Content>
      </Popover.Root>

      <FieldError error={error} />
    </div>
  );
}
