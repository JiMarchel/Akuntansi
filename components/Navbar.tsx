"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { SideNav } from "./SideNav";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="flex items-center justify-between w-full p-5 border-b ">
      <div>
        <SideNav />
      </div>
      <div className="flex items-center gap-x-4 mr-10 text-white">
        <ModeToggle />
        <OrganizationSwitcher
          hidePersonal
          afterCreateOrganizationUrl="/dashboard/:id"
          afterLeaveOrganizationUrl="/select-org"
          afterSelectOrganizationUrl="/dashboard/:id"
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
          }}
        />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 30,
                width: 30,
              },
            },
          }}
        />
      </div>
    </nav>
  );
};
