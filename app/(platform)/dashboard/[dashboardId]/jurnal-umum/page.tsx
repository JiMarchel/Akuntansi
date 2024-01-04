import { Wrapper } from "@/components/Wrapper";
import { DataTable } from "@/components/ui/data-table";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { columns } from "./_components/Column";

const JurnalUmumPage = async ({
  params,
}: {
  params: { dashboardId: string };
}) => {
  const { orgId } = auth();
  if (!orgId) {
    return redirect("/select-org");
  }

  const data = await db.transaction.findMany({
    where: {
      orgId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const footer: number[] = data.map((nominal : any) => nominal.nominal);

  return (
    <Wrapper className="mx-2">
      <h1 className="text-3xl font-bold my-5">Jurnal Umum</h1>
      <DataTable data={data} columns={columns} footer={footer} />
    </Wrapper>
  );
};

export default JurnalUmumPage;
