import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/cn";

export type SwitchProps = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitive.Root
> & {
  thumbClassName?: string;
};

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, thumbClassName, ...props }, ref) => {
  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={cn(
        [
          "inline-flex h-6 w-11 shrink-0 items-center rounded-full",
          "bg-bg-surface border border-border-default",
          "cursor-pointer transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-bg-app",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-brand-primary data-[state=checked]:border-transparent",
        ].join(" "),
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          [
            "block h-5 w-5 rounded-full",
            "bg-bg-app shadow-shadow-sm",
            "transition-transform will-change-transform",
            "data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
          ].join(" "),
          thumbClassName
        )}
      />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = "Switch";
