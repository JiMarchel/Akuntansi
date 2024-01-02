import db from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async ({ params }: { params: { dashboardId: string } }) => {
  try {
    if (!params.dashboardId) {
      return new NextResponse("Harus ada dashboard id", { status: 400 });
    }
    
    const transaksi = await db.transaction.findMany({
      where: {
        orgId: params.dashboardId,
      },
      select: {
        nominal: true,
      },
    });

    return NextResponse.json(transaksi);
  } catch (error) {
    console.log("[TRANSACTION_GET]", error);
    return new NextResponse("Internal error " + error, { status: 500 });
  }
};
