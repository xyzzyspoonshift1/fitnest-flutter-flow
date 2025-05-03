
import { Bell, Search, HeartPulse, Droplet, Flame } from "lucide-react";
import GradientButton from "@/components/GradientButton";
import { Card } from "@/components/ui/card";
import { 
  BarChart, 
  ResponsiveContainer, 
  Bar, 
  XAxis,
  CartesianGrid,
  LabelList
} from "recharts";

const activityData = [
  { name: 'Sun', value: 20 },
  { name: 'Mon', value: 35 },
  { name: 'Tue', value: 15 },
  { name: 'Wed', value: 45 },
  { name: 'Thu', value: 25 },
  { name: 'Fri', value: 30 },
  { name: 'Sat', value: 40 },
];

const Dashboard = () => {
  const today = new Date();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-24 px-6 rounded-b-3xl">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-white/80 text-sm">Welcome Back,</p>
            <h1 className="text-white text-xl font-semibold">Stefani Wong</h1>
          </div>
          <button className="bg-white/20 p-2.5 rounded-full">
            <Bell size={20} className="text-white" />
          </button>
        </div>
        
        <div className="relative">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fitnest-grey-light" />
          <input 
            type="text" 
            placeholder="Search workout, program, etc" 
            className="w-full py-3 px-12 rounded-full bg-white/20 text-white placeholder-white/60 outline-none"
          />
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="px-6 -mt-16">
        <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
          <Card className="flex-1 min-w-[150px] p-4 rounded-2xl shadow-sm border-none">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <HeartPulse size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-fitnest-grey">Heart Rate</p>
                <p className="text-fitnest-dark font-semibold">78 BPM</p>
              </div>
            </div>
            <div className="w-full bg-fitnest-blue-light/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-primary h-full w-3/4 rounded-full"></div>
            </div>
          </Card>

          <Card className="flex-1 min-w-[150px] p-4 rounded-2xl shadow-sm border-none">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-secondary w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Flame size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-fitnest-grey">Calories</p>
                <p className="text-fitnest-dark font-semibold">760 kCal</p>
              </div>
            </div>
            <div className="w-full bg-fitnest-purple-light/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-secondary h-full w-1/2 rounded-full"></div>
            </div>
          </Card>

          <Card className="flex-1 min-w-[150px] p-4 rounded-2xl shadow-sm border-none">
            <div className="flex items-center mb-3">
              <div className="bg-gradient-primary w-10 h-10 rounded-full flex items-center justify-center mr-3">
                <Droplet size={20} className="text-white" />
              </div>
              <div>
                <p className="text-xs text-fitnest-grey">Water</p>
                <p className="text-fitnest-dark font-semibold">1.8 L</p>
              </div>
            </div>
            <div className="w-full bg-fitnest-blue-light/20 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-primary h-full w-2/3 rounded-full"></div>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Today's Activity */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-fitnest-dark text-lg font-semibold">Today's Activity</h2>
          <p className="text-xs text-fitnest-blue-light font-medium">{`${dayNames[today.getDay()]}, ${today.getDate()} ${monthNames[today.getMonth()]}`}</p>
        </div>
        
        <Card className="p-4 rounded-2xl border-none shadow-sm mb-6">
          <div className="h-[180px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <Bar 
                  dataKey="value" 
                  fill="#92A3FD" 
                  radius={[10, 10, 0, 0]} 
                  barSize={30}
                  className="fill-fitnest-blue-light hover:fill-fitnest-purple-light transition-colors"
                >
                  <LabelList dataKey="value" position="top" fill="#92A3FD" fontSize={12} />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
      
      {/* Latest Workout Section */}
      <div className="px-6 mt-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-fitnest-dark text-lg font-semibold">Latest Workout</h2>
          <button className="text-fitnest-blue-light text-xs font-medium">See More</button>
        </div>
        
        <Card className="rounded-2xl border-none shadow-sm overflow-hidden mb-6">
          <div className="flex">
            <img 
              src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=400&auto=format" 
              alt="Fullbody Workout" 
              className="w-24 h-24 object-cover"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between">
                <h3 className="text-fitnest-dark font-semibold">Fullbody Workout</h3>
                <span className="text-fitnest-blue-light text-xs font-medium">Today</span>
              </div>
              <p className="text-xs text-fitnest-grey mt-1 mb-2">180 Calories Burn | 20 minutes</p>
              <div className="flex items-center">
                <div className="w-full bg-fitnest-border-grey h-1.5 rounded-full overflow-hidden flex-1 mr-2">
                  <div className="bg-gradient-primary h-full w-2/3 rounded-full"></div>
                </div>
                <span className="text-xs text-fitnest-grey-light">60%</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="rounded-2xl border-none shadow-sm overflow-hidden mb-6">
          <div className="flex">
            <img 
              src="https://images.unsplash.com/photo-1601422539283-7df9d81fbc59?w=400&auto=format" 
              alt="Lowerbody Workout" 
              className="w-24 h-24 object-cover"
            />
            <div className="p-4 flex-1">
              <div className="flex justify-between">
                <h3 className="text-fitnest-dark font-semibold">Lowerbody Workout</h3>
                <span className="text-fitnest-grey-light text-xs font-medium">Yesterday</span>
              </div>
              <p className="text-xs text-fitnest-grey mt-1 mb-2">200 Calories Burn | 30 minutes</p>
              <div className="flex items-center">
                <div className="w-full bg-fitnest-border-grey h-1.5 rounded-full overflow-hidden flex-1 mr-2">
                  <div className="bg-gradient-primary h-full w-4/5 rounded-full"></div>
                </div>
                <span className="text-xs text-fitnest-grey-light">80%</span>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Find Workout Button */}
        <div className="mt-8">
          <GradientButton fullWidth size="lg">
            Find a Workout
          </GradientButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
