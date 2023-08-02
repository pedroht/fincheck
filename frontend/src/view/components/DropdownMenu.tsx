import * as RdxDropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { cn } from "../../app/utils/cn";

function DropdownMenuRoot({ children }: { children: React.ReactNode }) {
  return <RdxDropdownMenu.Root>{children}</RdxDropdownMenu.Root>;
}

function DropdownMenuTrigger({ children }: { children: React.ReactNode }) {
  return (
    <RdxDropdownMenu.Trigger asChild className="outline-none">
      {children}
    </RdxDropdownMenu.Trigger>
  );
}

interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  side?: "top" | "bottom";
}

function DropdownMenuContent({
  children,
  className,
  side,
}: DropdownMenuContentProps) {
  return (
    <RdxDropdownMenu.Portal>
      <RdxDropdownMenu.Content
        side={side}
        className={cn(
          "[side=top]:animate-slide-down-and-fade z-50 space-y-2 rounded-2xl bg-white p-2 shadow-[0_11px_20px_0_rgba(0,0,0,0.1)] data-[side=bottom]:animate-slide-up-and-fade",
          className,
        )}
      >
        {children}
      </RdxDropdownMenu.Content>
    </RdxDropdownMenu.Portal>
  );
}

interface DropdownMenuItemProps {
  children: React.ReactNode;
  className?: string;
  onSelect?(): void;
}

function DropdownMenuItem({
  children,
  className,
  onSelect,
}: DropdownMenuItemProps) {
  return (
    <RdxDropdownMenu.Item
      onSelect={onSelect}
      className={cn(
        "flex min-h-[40px] cursor-pointer items-center gap-2 rounded-2xl px-4 py-2 text-sm text-gray-800 outline-none transition-colors data-[highlighted]:bg-gray-50",
        className,
      )}
    >
      {children}
    </RdxDropdownMenu.Item>
  );
}

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
};
