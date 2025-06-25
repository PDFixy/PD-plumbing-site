"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantClasses =
      variant === "outline"
        ? "border border-[#002F6C] text-[#002F6C] hover:bg-[#002F6C] hover:text-white"
        : "bg-blue-600 hover:bg-blue-700 text-white";

    return (
      <button
        ref={ref}
        className={cn("font-semibold py-2 px-4 rounded-xl", variantClasses, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

