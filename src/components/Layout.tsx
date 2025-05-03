
import { Outlet, NavLink, useLocation } from "react-router-dom";
import { Home, Dumbbell, BarChart2, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Layout = () => {
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: "Home",
      to: "/app",
    },
    {
      icon: Dumbbell,
      label: "Workout",
      to: "/app/workout-plans",
    },
    {
      icon: BarChart2,
      label: "Activity",
      to: "/app/activity", 
    },
    {
      icon: User,
      label: "Profile",
      to: "/app/profile",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 pb-20">
        <Outlet />
      </main>
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-10">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center justify-center w-full"
              >
                <div 
                  className={cn(
                    "flex flex-col items-center justify-center", 
                    isActive ? "text-fitnest-blue-light" : "text-fitnest-grey"
                  )}
                >
                  <div 
                    className={cn(
                      "p-1.5 rounded-full",
                      isActive ? "bg-gradient-primary" : "bg-transparent"
                    )}
                  >
                    <item.icon 
                      size={20} 
                      className={cn(
                        isActive ? "text-white" : "text-fitnest-grey"
                      )} 
                    />
                  </div>
                  <span className={cn(
                    "text-xs mt-1",
                    isActive ? "text-fitnest-blue-light font-semibold" : "text-fitnest-grey"
                  )}>
                    {item.label}
                  </span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Layout;
