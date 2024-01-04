import { ClerkProvider } from "@clerk/nextjs";

const LayoutPlatform = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ClerkProvider>
          {children}
      </ClerkProvider>
    </div>
  );
};

export default LayoutPlatform;
