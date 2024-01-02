import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "../../../../components/Navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <Toaster position="top-right" closeButton richColors/>
      {children}
    </div>
  );
};

export default DashboardLayout;
