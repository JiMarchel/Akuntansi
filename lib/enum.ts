import db from "./db";

export enum TipeTransaksi {
  Pemasukan = "Pemasukan",
  Pengeluaran = "Pengeluaran",
  Utang = "Utang",
  // BayarUtang = "Bayar Utang",
  Piutang = "Piutang",
  // DibayarPiutang = "Dibayar Piutang",
  TambahModal = "Tambah Modal",
  TarikModal = "Tarik Modal",
}

export enum Pendapatan {
  Pendapatan = "Pendapatan",
  PenjualanBarang = "Penjualan Barang",
  ReturPenjualan = "Retur Penjualan",
}

export enum PendapatanDiluarUsaha {
  PendapatanBungaBank = "Pendapatan Bunga Bank",
  PendapatanHasilPanen = "Pendapatan Hasil Panen",
}

export const DiterimaDari_Pemasukan = {
  ...Pendapatan,
  ...PendapatanDiluarUsaha,
};

export enum AktivaLancar {
  Kas = "Kas",
  BankCentralAsia = "Bank BCA",
  BankMandiri = "Bank Mandiri",
  BankRakyatIndonesia = "Bank BRI",
  BankNegaraIndonesia = "Bank BNI",
}

export enum BiayaPenjualan {
  BiayaPengiriman = "Biaya Pengiriman",
  BiayaPenjualanDLL = "Biaya Penjualan Dan lain-lain",
  BiayaIklan = "Biaya Iklan",
  BiayaReturPenjualan = "Biaya Retur Penjualan",
  BiayaKerusakanBarang = "Biaya Kerusakan Barang",
}

export enum BiayaUmumAdmin {
  BiayaAir = "Biaya Air",
  BiayaGajiKaryawan = "Biaya Gaji Karyawan",
  BiayaListrik = "Biaya Listrik",
  BiayaMakanDanMinum = "Biaya Makan dan Minum",
  BiayaPerlengkapan = "Biaya Perlengkapan",
  BiayaSewaTempatUsaha = "Biaya Sewa Tempat Usaha",
  BiayaTelepon = "Biaya Telepon",
}

export const DisimpanKe_Pengeluaran = {
  ...BiayaPenjualan,
  ...BiayaUmumAdmin,
};

export enum Utang {
  UtangUsaha = "Utang Usaha",
  UtangBank = "Utang Bank",
}

export const DisimpanKe_utang = {
  ...AktivaLancar,
  ...BiayaUmumAdmin,
};

export enum Modal {
  ModalPemilik = "Modal Pemilik",
  Prive = "Prive",
}

export const DiterimaDari_Piutang = {
  ...AktivaLancar,
  ...Modal,
  ...Pendapatan,
};

export enum DisimpanKe_Piutang {
  PiutangUsaha = "Piutang Usaha",
}
