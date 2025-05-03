
import { useState } from "react";
import { 
  Settings, 
  ChevronRight, 
  MessageCircle, 
  Shield,
  Bell, 
  Info,
  Medal,
  UserCircle,
  LogOut
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import GradientButton from "@/components/GradientButton";
import { useNavigate } from "react-router-dom";

const ProfileMenuGroup = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-fitnest-grey text-sm mb-2">{title}</h3>
    <Card className="rounded-2xl border-none shadow-sm overflow-hidden">
      {children}
    </Card>
  </div>
);

const ProfileMenuItem = ({ 
  icon: Icon, 
  title, 
  subtitle, 
  endComponent,
  onClick 
}: { 
  icon: React.ElementType, 
  title: string, 
  subtitle?: string,
  endComponent?: React.ReactNode,
  onClick?: () => void
}) => (
  <button 
    className="flex items-center justify-between w-full p-4 border-b border-fitnest-border-grey last:border-b-0 text-left"
    onClick={onClick}
  >
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-fitnest-border-grey flex items-center justify-center mr-4">
        <Icon size={20} className="text-fitnest-dark" />
      </div>
      <div>
        <h4 className="text-fitnest-dark font-medium">{title}</h4>
        {subtitle && <p className="text-xs text-fitnest-grey">{subtitle}</p>}
      </div>
    </div>
    {endComponent || <ChevronRight size={18} className="text-fitnest-grey" />}
  </button>
);

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    // For demo purposes, we'll just navigate back to the login page
    navigate("/login");
  };
  
  return (
    <div className="pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-primary pt-12 pb-28 px-6 rounded-b-3xl flex justify-between items-start">
        <h1 className="text-white text-2xl font-bold">Profile</h1>
        <button className="bg-white/20 p-2.5 rounded-full">
          <Settings size={20} className="text-white" />
        </button>
      </div>
      
      {/* Profile Card */}
      <div className="px-6 -mt-20">
        <Card className="p-6 rounded-2xl border-none shadow-sm flex flex-col items-center">
          <Avatar className="w-20 h-20 mb-3">
            <AvatarImage src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format" />
            <AvatarFallback>SW</AvatarFallback>
          </Avatar>
          <h2 className="text-fitnest-dark text-xl font-bold">Stefani Wong</h2>
          <p className="text-fitnest-grey text-sm">Fitness Enthusiast</p>
          
          <div className="flex w-full justify-between mt-6 pt-6 border-t border-fitnest-border-grey">
            <div className="text-center">
              <p className="text-fitnest-dark font-bold">162 cm</p>
              <p className="text-fitnest-grey text-xs">Height</p>
            </div>
            <div className="text-center">
              <p className="text-fitnest-dark font-bold">56 kg</p>
              <p className="text-fitnest-grey text-xs">Weight</p>
            </div>
            <div className="text-center">
              <p className="text-fitnest-dark font-bold">22 yo</p>
              <p className="text-fitnest-grey text-xs">Age</p>
            </div>
          </div>
        </Card>
      </div>
      
      {/* Profile Menu */}
      <div className="px-6 mt-8">
        <ProfileMenuGroup title="ACCOUNT">
          <ProfileMenuItem 
            icon={UserCircle} 
            title="Personal Data" 
            subtitle="Change your account information"
          />
          <ProfileMenuItem 
            icon={Medal} 
            title="Achievement" 
            subtitle="Track your progress"
          />
          <ProfileMenuItem 
            icon={Shield} 
            title="Privacy Policy" 
            subtitle="Manage your data usage"
          />
        </ProfileMenuGroup>
        
        <ProfileMenuGroup title="NOTIFICATION">
          <ProfileMenuItem 
            icon={Bell} 
            title="Notification" 
            subtitle={notifications ? "You will receive notifications" : "Notifications are disabled"}
            endComponent={
              <Switch 
                checked={notifications} 
                onCheckedChange={setNotifications}
                className="data-[state=checked]:bg-gradient-primary"
              />
            }
          />
        </ProfileMenuGroup>
        
        <ProfileMenuGroup title="OTHER">
          <ProfileMenuItem 
            icon={MessageCircle} 
            title="Contact Us" 
            subtitle="Let us help you"
          />
          <ProfileMenuItem 
            icon={Info} 
            title="About App" 
            subtitle="Version 1.0.0"
          />
        </ProfileMenuGroup>
        
        <div className="mt-8">
          <GradientButton 
            gradient="secondary" 
            fullWidth 
            size="lg"
            onClick={handleLogout}
            className="flex items-center justify-center"
          >
            <LogOut size={18} className="mr-2" />
            Logout
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Profile;
