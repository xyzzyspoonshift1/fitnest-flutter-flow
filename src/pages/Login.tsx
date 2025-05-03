
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, we'll just navigate to the app
    navigate("/app");
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-10">
      <div className="mb-8">
        <h1 className="text-fitnest-dark text-3xl font-bold mb-3">Hey there,</h1>
        <p className="text-fitnest-grey text-lg">Welcome Back</p>
      </div>

      <form onSubmit={handleLogin} className="flex-1">
        <div className="space-y-6 mb-8">
          <div className="relative">
            <Mail size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fitnest-grey-light" />
            <Input 
              type="email"
              placeholder="Email" 
              className="pl-12 py-6 rounded-xl border-fitnest-border-grey"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="relative">
            <Lock size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fitnest-grey-light" />
            <Input 
              type={showPassword ? "text" : "password"}
              placeholder="Password" 
              className="pl-12 py-6 rounded-xl border-fitnest-border-grey"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button" 
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={20} className="text-fitnest-grey-light" />
              ) : (
                <Eye size={20} className="text-fitnest-grey-light" />
              )}
            </button>
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center">
            <Checkbox 
              id="remember-me" 
              checked={rememberMe} 
              onCheckedChange={(checked) => setRememberMe(checked === true)}
              className="mr-2 data-[state=checked]:bg-gradient-primary border-fitnest-grey-light"
            />
            <label htmlFor="remember-me" className="text-sm text-fitnest-grey-light">
              Remember Me
            </label>
          </div>
          
          <Link to="/forgot-password" className="text-sm text-fitnest-grey-light">
            Forgot Password?
          </Link>
        </div>
        
        <GradientButton fullWidth size="lg" type="submit">
          Login
        </GradientButton>
        
        <div className="text-center mt-6">
          <p className="text-fitnest-grey-light">
            Don't have an account yet?{" "}
            <Link to="/register" className="text-gradient-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
