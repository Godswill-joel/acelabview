"use client";
import React from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger" | "default";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

export function Button ({
  children,
  className = "",
  variant = "default",
  size = "md",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center font-medium transition-colors duration-150 rounded-full ";

  const variants = {
    primary: "bg-[#2661E9]text-white hover:bg-[#2661E9] rounded-full active:bg-[#9B4DFF]",
    secondary:
      "bg-[#2661E9] text-white hover:bg-gray-700 rounded-lg active:bg-gray-800",
    outline:
      "border-2 border-slate-700 rounded-full text-slate-900 hover:bg-slate-50 active:bg-blue-100",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 rounded-lg",
    default: "text-gray-900",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base font-bold",
    lg: "px-6 py-3 text-lg",
  };

  const disabledStyles =
    disabled || isLoading ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`
                ${baseStyles}
                ${variants[variant]}
                ${sizes[size]}
                ${disabledStyles}
                ${className}
            `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="animate-spin" />}
      {children}
    </button>
  );
}
