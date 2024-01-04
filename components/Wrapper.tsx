import { cn } from "@/lib/utils";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
export const Wrapper = ({ children, className }: WrapperProps) => {
  return <div className={cn("mx-1 lg:mx-0 lg:mr-20 lg:ml-64", className)}>{children}</div>;
};
