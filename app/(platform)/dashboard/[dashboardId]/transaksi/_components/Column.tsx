"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellActions } from "./CellActions";
import { Transaction } from "../../jurnal-umum/_components/Column";


export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "createdAt",
    header: "Tanggal",
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
