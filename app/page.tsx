import { Logo } from "@/components/Logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  const aplikasiKami = [
    {
      title: "Pencatatan Transaksi Secara Efisien",
      content:
        " Catat setiap transaksi dengan mudah dan cepat. Aplikasi kami dirancang untuk memudahkan pencatatan jurnal umum, termasuk pemasukan, pengeluaran, dan transaksi lainnya.",
      value: "item-1",
    },
    {
      title: "Pemantauan Keuangan yang Akurat",
      content:
        " Pantau kondisi keuangan bisnis Anda dengan laporan jurnal umum yang akurat. Dapatkan insight yang dibutuhkan untuk pengambilan keputusan yang tepat.",
      value: "item-2",
    },
    {
      title: "Akses Anywhere, Anytime",
      content:
        " Akses aplikasi kapan saja dan di mana saja. Dengan antarmuka yang responsif, Anda dapat mengelola jurnal umum Anda dengan mudah, bahkan saat bepergian.",
      value: "item-3",
    },
  ];

  const kenapaKami = [
    {
      title: "Sederhana dan Intuitif",
      content:
        " Desain antarmuka yang sederhana membuat pencatatan jurnal umum menjadi tugas yang mudah. Tidak diperlukan keahlian khusus.",
      value: "item-1",
    },
    {
      title: "Keamanan Data Terjamin",
      content:
        " Keamanan data Anda adalah prioritas kami. Aplikasi kami dilengkapi dengan lapisan keamanan terkini untuk melindungi informasi bisnis Anda.",
      value: "item-2",
    },
    {
      title: "Dukungan Pelanggan Terbaik",
      content:
        " Tim dukungan kami siap membantu Anda. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau membutuhkan bantuan.",
      value: "item-3",
    },
  ];

  return (
    <div>
      <nav className="flex items-center justify-between  w-full p-5 border-b ">
        <Logo />
        <div className="gap-2 flex ">
          <Button>
            <Link href="sign-up">Register</Link>
          </Button>
          <Button>
            <Link href="sign-in">Login</Link>
          </Button>
        </div>
      </nav>

      <div className="mx-2 md:mx-10 grid grid-cols-1  gap-20 items-center">
        <div className="flex flex-col text-center gap-3 ">
          <div>
            <h1 className="text-4xl font-bold  mt-10">
              Selamat Datang Di Aplikasi{" "}
            </h1>
            <Logo className="text-4xl underline" />
          </div>
          <p className="text-xl font-medium text-muted-foreground">
            Aplikasi Akuntansi untuk Pengelolaan Jurnal Umum dengan Mudah.
          </p>
          <div className="flex items-center justify-center gap-2">
            <p className="text-xl font-medium text-muted-foreground">
              Coba sekarang! Gratis!!{" "}
            </p>
            <Button>
              <Link href="sign-in">Login</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 mb-32 mx-3">
          <div className="flex flex-col gap-5 justify-start">
            <p className="text-xl font-medium text-start">
              Apa yang Dapat Anda Lakukan dengan Aplikasi Kami?
            </p>
            <div className="flex flex-col items-center gap-5">
              {aplikasiKami.map((data) => (
                <Accordion
                  key={data.title}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={data.value}>
                    <AccordionTrigger>{data.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {data.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-start">
            <p className="text-xl font-medium text-start">
              Kenapa Memilih Akuntanku?
            </p>
            <div className="flex flex-col items-center gap-5">
              {kenapaKami.map((data) => (
                <Accordion
                  key={data.title}
                  type="single"
                  collapsible
                  className="w-full"
                >
                  <AccordionItem value={data.value}>
                    <AccordionTrigger>{data.title}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {data.content}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
