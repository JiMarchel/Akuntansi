"use client";

import { SelectInputField, TextInputField } from "@/components/FormInputField";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { TipeTransaksi } from "@/lib/enum";
import { createDisimpanKe, createDiterimaDari } from "@/lib/utils";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const FormDialogSchema = z.object({
  keterangan: z
    .string()
    .min(3, { message: "Keterangan harus lebih dari 3 huruf." }),
  transaksi: z.string().min(1, { message: "Pilih tipe transaksi" }),
  diterimaDari: z
    .string()
    .min(1, { message: "Pilih salah satu dari opsi diatas" }),
  disimpanKe: z
    .string()
    .min(1, { message: "Pilih salah satu dari opsi diatas" }),
  nominal: z.coerce
    .number()
    .positive({ message: "Nominal harus positive" })
    .min(1)
    .max(1000000000, {
      message: "Nominal harus antara 1 dan 1.000.000.000,00",
    }),
});

export const Create = ({ params }: { params: { dashboardId: string } }) => {
  const user = useUser();

  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof FormDialogSchema>>({
    resolver: zodResolver(FormDialogSchema),
    defaultValues: {
      keterangan: "",
      disimpanKe: "",
      diterimaDari: "",
      transaksi: "",
      nominal: 1,
    },
  });

  if (!user) return;

  async function onSubmit(values: z.infer<typeof FormDialogSchema>) {
    try {
      setLoading(true);
      const data = {
        orgId: params.dashboardId,
        userId: user.user?.id,
        keterangan: values.keterangan,
        disimpanKe: values.disimpanKe,
        diterimaDari: values.diterimaDari,
        transaksi: values.transaksi,
        nominal: values.nominal,
      };

      await fetch(`/api/dashboard`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setOpen(false);
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      toast.success("Transaksi Berhasil Ditambahkan.", {
        description: `${new Date().toLocaleString("id-ID", {
          weekday: "long",
          month: "long",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
        })}`,
      });
    }
  }

  const { watch, control, handleSubmit } = form;
  const transaksiWatch = watch("transaksi");

  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <Button className="flex gap-2 ml-auto mb-5" onClick={() => setOpen(true)}>
          Buat Transaksi <Plus size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Buat Transaksi Baru</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <SelectInputField
              control={control}
              name="transaksi"
              label="Tipe transaksi"
              placeholder="Jenis transaksi"
              enum1={TipeTransaksi}
            />

            <SelectInputField
              control={control}
              name="diterimaDari"
              label="Diterima dari"
              placeholder="Pilih"
              enum1={createDiterimaDari(transaksiWatch)}
              disabled={!transaksiWatch}
            />

            <SelectInputField
              control={control}
              name="disimpanKe"
              label="Disimpan ke"
              placeholder="Pilih"
              enum1={createDisimpanKe(transaksiWatch)}
              disabled={!transaksiWatch}
            />

            <TextInputField
              control={control}
              name="keterangan"
              label="Keterangan"
              placeholder="Keterangan"
            />

            <TextInputField
              control={control}
              name="nominal"
              label="Nominal"
              placeholder="100.000"
              type="number"
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
