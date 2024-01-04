"use client"
import { SelectInputField, TextInputField } from "@/components/FormInputField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { FormDialogSchema } from "./Create";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TipeTransaksi } from "@/lib/enum";
import { createDisimpanKe, createDiterimaDari } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Transaction } from "../../jurnal-umum/_components/Column";

interface EditProps {
  open: boolean;
  onOpenChange: () => void;
  initialData: Transaction;
  loading: boolean;
  setOpen: () => void;
}

export const EditComp = ({
  open,
  initialData,
  loading,
  onOpenChange,
  setOpen,
}: EditProps) => {
  const router = useRouter()
  const form = useForm<z.infer<typeof FormDialogSchema>>({
    resolver: zodResolver(FormDialogSchema),
    defaultValues: {
      keterangan: initialData.keterangan,
      disimpanKe: initialData.disimpanKe,
      diterimaDari: initialData.diterimaDari,
      transaksi: initialData.transaksi,
      nominal: initialData.nominal,
    },
  });

  const onSubmit = async (values: z.infer<typeof FormDialogSchema>) => {
    try {
      const data = {
        id: initialData.id,
        keterangan: values.keterangan,
        transaksi: values.transaksi,
        diterimaDari: values.diterimaDari,
        disimpanKe: values.disimpanKe,
        nominal: values.nominal,
      };
      await fetch("/api/dashboard", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    } finally {
      setOpen();
      router.refresh()
      toast.success("Berhasil merubah transaksi.", {
        description: `${new Date().toLocaleString("id-ID", {
          weekday: "long",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}`,
      });
    }
  };

  const { watch, control, handleSubmit } = form;
  const transaksiWatch = watch("transaksi");

  return (
    <Dialog open={open} onOpenChange={onOpenChange} defaultOpen={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Transaksi</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <SelectInputField
              control={control}
              name="transaksi"
              label="Tipe transaksi"
              placeholder="Jenis transaksi"
              enum1={TipeTransaksi}
              defaultValue={initialData.transaksi}
              disabled={loading}
            />

            <SelectInputField
              control={control}
              name="diterimaDari"
              label="Diterima dari"
              placeholder="Pilih"
              enum1={createDiterimaDari(transaksiWatch)}
              disabled={!transaksiWatch || loading}
              defaultValue={initialData.diterimaDari}
            />

            <SelectInputField
              control={control}
              name="disimpanKe"
              label="Disimpan ke"
              placeholder="Pilih"
              enum1={createDisimpanKe(transaksiWatch)}
              disabled={!transaksiWatch || loading}
              defaultValue={initialData.disimpanKe}
            />

            <TextInputField
              control={control}
              name="keterangan"
              label="Keterangan"
              placeholder="Keterangan"
              disabled={loading}
            />

            <TextInputField
              control={control}
              name="nominal"
              label="Nominal"
              placeholder="100.000"
              type="number"
              disabled={loading}
            />

            <Button type="submit" disabled={loading}>
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
