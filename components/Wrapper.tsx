import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
export const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={cn("mr-20 ml-64", className)}>{children}</div>;
};
