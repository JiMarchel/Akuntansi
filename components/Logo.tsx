import { cn } from "@/lib/utils";
import { Lobster } from "next/font/google";
import React from "react";

const lobster = Lobster({
  subsets: ["latin"],
  weight: "400",
});

interface LogoProps{
    className?: string
}

export const Logo = ({className}: LogoProps) => {
  return (
    <h2 className={cn(lobster.className, "text-2xl md:text-4xl font-bold", className)}>Akuntanku</h2>
  );
};
