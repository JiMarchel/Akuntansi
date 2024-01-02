"use client";

import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { CellActions } from "./CellActions";

export type TransactionProps = Transaction;

export const columns: ColumnDef<TransactionProps>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      const formattedDate = date.toLocaleString("id-ID", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      return <div>{formattedDate}</div>;
    },
  },
  {
    accessorKey: "keterangan",
    header: "Nama Transaksi",
  },
  {
    accessorKey: "nominal",
    header: "Nominal",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("nominal"));
      const formatted = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(amount);
      
      return <div>{formatted}</div>;
    },
  },
    {
      id: "actions",
      cell: ({ row }) => <CellActions data={row.original} />,
    },
];
