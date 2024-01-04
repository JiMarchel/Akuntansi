"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <div>
      {theme === "dark" ? (
        <Button variant="outline" size="icon" onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      ) : (
        <Button className="text-black" variant="outline" size="icon" onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      )}
    </div>
  );
}
