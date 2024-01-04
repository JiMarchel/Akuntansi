import { Wrapper } from "@/components/Wrapper";
import { DataTable } from "@/components/ui/data-table";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { columns } from "./_components/Column";
import { Create } from "./_components/Create";

const JurnalUmum = async ({ params }: { params: { dashboardId: string } }) => {
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

  return (
    <Wrapper className="mt-10 mx-2">
      <Create params={params} />
      <DataTable data={data} columns={columns} />
    </Wrapper>
  );
};

export default JurnalUmum;
