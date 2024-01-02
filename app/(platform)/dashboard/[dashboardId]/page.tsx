import { Wrapper } from "@/components/Wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BsJournals } from "react-icons/bs";
import { FaRightLong } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { FaBalanceScale } from "react-icons/fa";

const DashBoardPage = async ({
  params,
}: {
  params: { dashboardId: string };
}) => {
  const { orgId } = auth();
  if (!orgId) {
    return redirect("/select-org");
  }

   const routes = [
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

  return (
    <Wrapper className="grid grid-cols-3">
      {routes.map((route, i) => (
        <Card key={i} className="max-w-[280px] my-10 ">
          <Link href={route.href}>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 justify-center">
                <route.icon size={30} />
                <h2 className="text-2xl font-bold">{route.title}</h2>
              </div>
              <Separator className="my-3 mx-2" />
              <div className="flex items-center gap-2 justify-center font-medium">
                <p>Pergi ke {route.title}</p>
                <FaRightLong />
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </Wrapper>
  );
};

export default DashBoardPage;
