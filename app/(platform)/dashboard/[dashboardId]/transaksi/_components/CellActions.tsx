"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TransactionProps } from "./Column";
import { toast } from "sonner";

interface CellActionsProps {
  data: TransactionProps;
}

export const CellActions = ({ data }: CellActionsProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onDelete = async () => {
    try {
      setLoading(true);
      await fetch(`/api/dashboard`, {
        method: "DELETE",
        body: JSON.stringify({ id: data.id }),
      });
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast.success("Transaksi Berhasil Dihapus.");
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            className="justify-between flex items-center cursor-pointer"
            disabled={loading}
            onClick={() => setOpen(true)}
          >
            Edit <Edit size={15} />
          </DropdownMenuItem>
          <DropdownMenuItem
            className="justify-between flex items-center bg-red-600 cursor-pointer"
            disabled={loading}
            onClick={onDelete}
          >
            Delete <Trash size={15} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <DialogComp
        open={open}
        onOpenChange={() => setOpen(!open)}
        initialData={data}
        loading={loading}
        setOpen={() => setOpen(false)}
      /> */}
    </>
  );
};
