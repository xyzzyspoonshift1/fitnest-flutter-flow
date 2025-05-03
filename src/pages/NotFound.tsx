
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GradientButton from "@/components/GradientButton";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-white">
      <img 
        src="https://images.unsplash.com/photo-1594124495785-4755dbeabb84?w=400&auto=format" 
        alt="404" 
        className="w-64 h-auto mb-8"
      />
      <h1 className="text-fitnest-dark text-3xl font-bold mb-3">Oops! Page not found</h1>
      <p className="text-fitnest-grey text-center mb-8 max-w-xs">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <GradientButton 
        onClick={() => navigate("/")}
        className="px-8"
      >
        Return to Home
      </GradientButton>
    </div>
  );
};

export default NotFound;
