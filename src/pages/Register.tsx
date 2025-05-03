
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert("You must agree to the Terms & Conditions to register");
      return;
    }
    // For demo purposes, we'll just navigate to the login page
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-10">
      <div className="mb-8">
        <h1 className="text-fitnest-dark text-3xl font-bold mb-3">Hey there,</h1>
        <p className="text-fitnest-grey text-lg">Create an Account</p>
      </div>

      <form onSubmit={handleRegister} className="flex-1">
        <div className="space-y-6 mb-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <User size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fitnest-grey-light" />
              <Input 
                placeholder="First Name" 
                className="pl-12 py-6 rounded-xl border-fitnest-border-grey"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="relative flex-1">
              <Input 
                placeholder="Last Name" 
                className="pl-4 py-6 rounded-xl border-fitnest-border-grey"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          
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
        
        <div className="flex items-center mb-8">
          <Checkbox 
            id="terms" 
            checked={agreeTerms} 
            onCheckedChange={(checked) => setAgreeTerms(checked === true)}
            className="mr-2 data-[state=checked]:bg-gradient-primary border-fitnest-grey-light"
          />
          <label htmlFor="terms" className="text-sm text-fitnest-grey-light">
            By continuing you accept our{" "}
            <Link to="/terms" className="text-gradient-primary">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link to="/terms" className="text-gradient-primary">
              Terms of Use
            </Link>
          </label>
        </div>
        
        <GradientButton fullWidth size="lg" type="submit">
          Register
        </GradientButton>
        
        <div className="text-center mt-6">
          <p className="text-fitnest-grey-light">
            Already have an account?{" "}
            <Link to="/login" className="text-gradient-primary font-semibold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
