import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

const LayoutPlatform = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </ClerkProvider>
    </div>
  );
};

export default LayoutPlatform;
