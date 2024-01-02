"use client";

import { formattedNominal } from "@/lib/utils";
import { Transaction } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export type TransactionProps = Transaction;

function debitSwitch(key: string, formatted: string) {
  switch (key) {
    case "Pemasukan":
      return (
        <>
          <div>-</div>
          <div>{formatted}</div>
        </>
      );
    case "Pengeluaran":
      return (
        <>
          <div>-</div>
          <div>{formatted}</div>
        </>
      );
    case "Utang":
      return (
        <>
          <div>-</div>
          <div>{formatted}</div>
        </>
      );
    case "Piutang":
      return (
        <>
          <div>-</div>
          <div>{formatted}</div>
        </>
      );
    case "TambahModal":
      return (
        <>
          <div>-</div>
          <div>{formatted}</div>
        </>
      );
    case "TarikModal":
      return (
        <>
          <div>-</div>
          <div>{formatted}</div>
        </>
      );
    default:
      return null;
  }
}

function kreditSwitch(key: string, formatted: string) {
  switch (key) {
    case "Pemasukan":
      return (
        <>
          <div>{formatted}</div>
          <div>-</div>
        </>
      );
    case "Pengeluaran":
      return (
        <>
          <div>{formatted}</div>
          <div>-</div>
        </>
      );
    case "Utang":
      return (
        <>
          <div>{formatted}</div>
          <div>-</div>
        </>
      );
    case "Piutang":
      return (
        <>
          <div>{formatted}</div>
          <div>-</div>
        </>
      );
    case "TambahModal":
      return (
        <>
          <div>{formatted}</div>
          <div>-</div>
        </>
      );
    case "TarikModal":
      return (
        <>
          <div>{formatted}</div>
          <div>-</div>
        </>
      );
    default:
      return null;
  }
}

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

      return <div className="mb-10">{formattedDate}</div>;
    },
  },
  {
    accessorKey: "keterangan",
    header: "Keterangan",
    cell: ({ row }) => {
      const addSpace = (text: string) => {
        return text.replace(/([A-Z])/g, " $1");
      };

      const keterangan = row.original.keterangan;
      const diterimaDari = addSpace(row.original.diterimaDari);
      const disimpanKe = addSpace(row.original.disimpanKe);

      return (
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl">
            {keterangan.toUpperCase()[0] + keterangan.slice(1)}
          </div>
          <div>
            <div>{diterimaDari}</div>
            <div>{disimpanKe}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "nominal",
    header: "Debit",
    cell: ({ row }) => {
      const transaksi = row.original.transaksi;
      const amount = parseFloat(row.getValue("nominal"));

      return (
        <div className="mt-10">
          {debitSwitch(transaksi, formattedNominal(amount))}
        </div>
      );
    },
  },
  {
    accessorKey: "nominal",
    header: "Kredit",
    cell: ({ row }) => {
      const transaksi = row.original.transaksi;
      const amount = parseFloat(row.getValue("nominal"));

      return (
        <div className="mt-10">
          {kreditSwitch(transaksi, formattedNominal(amount))}
        </div>
      );
    },
  },
  //   {
  //     id: "actions",
  //     cell: ({ row }) => <CellActions data={row.original} />,
  //   },
];
