import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  AktivaLancar,
  DisimpanKe_Pengeluaran,
  DisimpanKe_Piutang,
  DisimpanKe_utang,
  DiterimaDari_Pemasukan,
  DiterimaDari_Piutang,
  Modal,
  Utang,
} from "./enum";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formattedNominal = (nominal: number) => {
  const formatted = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(nominal);

  return formatted;
};

export const total = (total: number[]) => {
  const reducedTotal = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const formatted = formattedNominal(reducedTotal);

  return formatted;
};

export const createDiterimaDari = (key: string) => {
  switch (key) {
    case "Pemasukan":
      return DiterimaDari_Pemasukan;
    case "Pengeluaran":
      return AktivaLancar;
    case "Utang":
      return Utang;
    case "Piutang":
      return DiterimaDari_Piutang;
    case "TambahModal":
      return Modal;
    case "TarikModal":
      return DiterimaDari_Pemasukan;
  }
};

export const createDisimpanKe = (key: string) => {
  switch (key) {
    case "Pemasukan":
      return AktivaLancar;
    case "Pengeluaran":
      return DisimpanKe_Pengeluaran;
    case "Utang":
      return DisimpanKe_utang;
    case "Piutang":
      return DisimpanKe_Piutang;
    case "TambahModal":
      return AktivaLancar;
    case "TarikModal":
      return Modal;
  }
};
