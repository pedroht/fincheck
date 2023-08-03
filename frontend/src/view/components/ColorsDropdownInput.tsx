import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { cn } from "../../app/utils/cn";
import { DropdownMenu } from "./DropdownMenu";
import { FieldError } from "./FieldError";
import { ColorIcon } from "./icons/ColorIcon";

interface ColorsDropdownInputProps {
  error?: string;
  className?: string;
}

type Color = {
  color: string;
  bg: string;
};

const colors: Color[] = [
  { color: "#FA5252", bg: "#FFF5F5" },
  { color: "#E64980", bg: "#FFF0F6" },
  { color: "#BE4BDB", bg: "#F8F0FC" },
  { color: "#7950F2", bg: "#F3F0FF" },
  { color: "#4C6EF5", bg: "#EDF2FF" },
  { color: "#228BE6", bg: "#E7F5FF" },
  { color: "#15AABF", bg: "#E3FAFC" },
  { color: "#12B886", bg: "#E6FCF5" },
  { color: "#40C057", bg: "#EBFBEE" },
  { color: "#82C91E", bg: "#F4FCE3" },
  { color: "#FAB005", bg: "#FFF9DB" },
  { color: "#FD7E14", bg: "#FFF4E6" },
  { color: "#868E96", bg: "#F8F9FA" },
  { color: "#212529", bg: "#F8F9FA" },
  { color: "#FFFFFF", bg: "#DEE2E6" },
];

export function ColorsDropdownInput({
  error,
  className,
}: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  function handleSelect(color: Color) {
    setSelectedColor(color);
  }

  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button
            className={cn(
              "relative h-[52px] w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-gray-700 outline-none transition-all focus:border-gray-800",
              error && "!border-red-900",
              className,
            )}
          >
            Cor
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {!selectedColor && (
                <ChevronDownIcon className="h-6 w-6 text-gray-800" />
              )}

              {selectedColor && (
                <ColorIcon color={selectedColor.color} bg={selectedColor.bg} />
              )}
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content className="grid grid-cols-4">
          {colors.map((color) => (
            <DropdownMenu.Item
              onSelect={() => handleSelect(color)}
              key={color.color}
            >
              <ColorIcon color={color.color} bg={color.bg} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>

      <FieldError error={error} />
    </div>
  );
}
