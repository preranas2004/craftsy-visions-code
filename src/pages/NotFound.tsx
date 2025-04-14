
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-xl">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <h1 className="text-9xl font-bold text-primary relative z-10">404</h1>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8 text-lg">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-primary hover:bg-crafty-deep-purple text-white px-6 py-2">
            <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
