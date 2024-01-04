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

export const PATCH = async (req: Request) => {
  try {
    const body = await req.json();
    const { transaksi, nominal, keterangan, diterimaDari, disimpanKe, id } =
      body;

    if (!keterangan || !transaksi || !nominal || !diterimaDari || !disimpanKe) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const transaction = await db.transaction.update({
      where: {
        id,
      },
      data: {
        transaksi,
        nominal,
        keterangan,
        diterimaDari,
        disimpanKe,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.log("[TRANSACTION_PATCH]", error);
    return new NextResponse("Internal error" + error, { status: 500 });
  }
};