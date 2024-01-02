"use client";

import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { BiSolidHome } from "react-icons/bi";
import { BsJournals } from "react-icons/bs";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { GrTransaction } from "react-icons/gr";
import { FaBalanceScale } from "react-icons/fa";

export const SideNav = () => {
  const [active, setActive] = useState<boolean>(true);
  const { theme } = useTheme();
  const pathName = usePathname();
  const params = useParams();
  const routes = [
    {
      icon: BiSolidHome,
      title: "Beranda",
      href: `/dashboard/${params.dashboardId}`,
    },
    {
      icon: GrTransaction,
      title: "Transaksi",
      href: `/dashboard/${params.dashboardId}/transaksi`,
    },
    {
      icon: BsJournals,
      title: "Jurnal Umum",
      href: `/dashboard/${params.dashboardId}/jurnal-umum`,
    },
    {
      icon: FaBalanceScale,
      title: "Neraca Saldo",
      href: `/dashboard/${params.dashboardId}/neraca-saldo`,
    },
  ];

  if (active) {
    return (
      <div
        className={`${
          theme === "dark" ? "bg-slate-900" : "bg-slate-100"
        } flex flex-col h-full fixed top-0  z-50 left-0 pt-5`}
      >
        <Button
          onClick={() => setActive(false)}
          variant="ghost"
          className="ml-auto mr-2 max-w-fit"
        >
          <X size={30} />
        </Button>
        <Separator className="mt-5 " />
        <div className="px-4">
          {routes.map((route, i) => (
            <Card
              key={i}
              className={`max-w-[250px] my-2 ${pathName === route.href && "bg-transparent"}`}
            >
              <Link href={route.href}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 justify-center">
                    <route.icon size={20} />
                    <h2 className="text-xl font-bold">{route.title}</h2>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-900" : "bg-slate-100"
      } h-full fixed top-0  z-50 left-0 pt-5`}
    >
      <Button onClick={() => setActive(true)} className="" variant="ghost">
        <Menu size={30} />
      </Button>
    </div>
  );
};
