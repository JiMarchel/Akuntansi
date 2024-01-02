import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const {
      userId,
      keterangan,
      transaksi,
      nominal,
      orgId,
      diterimaDari,
      disimpanKe,
    } = body;

    if (!keterangan || !transaksi || !nominal || !diterimaDari || !disimpanKe) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const transaction = await db.transaction.create({
      data: {
        userId,
        orgId,
        transaksi,
        nominal,
        keterangan,
        diterimaDari,
        disimpanKe,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.log("[TRANSACTION_POST]", error);
    return new NextResponse("Internal error " + error, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const body = await req.json();
    const { id } = body;

    const transaction = await db.transaction.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.log("[TRANSACTION_DELETE]", error);
    return new NextResponse("Internal error" + error, { status: 500 });
  }
};

// export const PATCH = async (req: Request) => {
//   try {
//     const body = await req.json();
//     const { title, description, transactionType, amount, id } = body;

//     if (!transactionType || !title || !amount) {
//       return new NextResponse("Missing required fields", { status: 400 });
//     }

//     const transaction = await db.transaction.update({
//       where: {
//         id,
//       },
//       data: {
//         title,
//         description,
//         transactionType,
//         amount,
//       },
//     });

//     return NextResponse.json(transaction);
//   } catch (error) {
//     console.log("[TRANSACTION_PATCH]", error);
//     return new NextResponse("Internal error" + error, { status: 500 });
//   }
// };

export const GET = async (req: Request) => {
  try {
    // if (!params.dashboardId) {
    //   return new NextResponse("Harus ada dashboard id", { status: 400 });
    // }

    const body = await req.json();
    const { orgId } = body;

    if (!orgId) {
      return new NextResponse("Harus ada dashboard id", { status: 400 });
    }

    const transaksi = await db.transaction.findMany({
      where: {
        orgId,
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
