import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="absolute top-1/2 left-1/2 translate-x-1/2 translate-y-1/2">
      Please wait <Loader2 />
    </div>
  );
};

export default LoadingPage;
