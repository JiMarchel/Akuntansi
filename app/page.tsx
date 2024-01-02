import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Button>
        <Link href="sign-in">Login</Link>
      </Button>
    </div>
  );
};

export default HomePage;
