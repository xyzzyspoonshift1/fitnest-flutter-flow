
import { useState } from "react";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  Flame, 
  Dumbbell, 
  ArrowUp,
  Heart 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const activityData = [
  {
    name: "Mon",
    calories: 2400,
    steps: 6400,
  },
  {
    name: "Tue",
    calories: 1398,
    steps: 5398,
  },
  {
    name: "Wed",
    calories: 2800,
    steps: 7800,
  },
  {
    name: "Thu",
    calories: 3908,
    steps: 8908,
  },
  {
    name: "Fri",
    calories: 4800,
    steps: 9800,
  },
  {
    name: "Sat",
    calories: 3800,
    steps: 8800,
  },
  {
    name: "Sun",
    calories: 4300,
    steps: 9300,
  },
];

const workoutHistory = [
  {
    id: 1,
    title: "Morning Yoga",
    duration: "30 mins",
    calories: 180,
    date: "Today, 8:00 AM",
    icon: "🧘‍♀️",
  },
  {
    id: 2,
    title: "HIIT Cardio",
    duration: "20 mins",
    calories: 320,
    date: "Today, 5:30 PM",
    icon: "🏃‍♂️",
  },
  {
    id: 3,
    title: "Full Body Stretch",
    duration: "15 mins",
    calories: 90,
    date: "Yesterday, 8:00 PM",
    icon: "🤸‍♀️",
  },
  {
    id: 4,
    title: "Strength Training",
    duration: "45 mins",
    calories: 350,
    date: "Yesterday, 12:30 PM",
    icon: "🏋️‍♀️",
  },
];

const ActivityTracker = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-16 px-6 rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-2">Activity Tracker</h1>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Popover>
              <PopoverTrigger asChild>
                <button className="flex items-center text-white/80 hover:text-white">
                  <CalendarIcon size={16} className="mr-2" />
                  {date ? format(date, "PPP") : "Select date"}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
      
      {/* Activity Stats */}
      <div className="px-6 -mt-10">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-white p-4 rounded-2xl border-none shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-primary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <Flame size={16} className="text-white" />
              </div>
              <div className="text-xs text-fitnest-grey">Calories</div>
            </div>
            <div className="flex items-baseline">
              <h3 className="text-2xl font-bold text-fitnest-dark">845</h3>
              <span className="ml-1 text-xs text-fitnest-grey">kCal</span>
            </div>
            <div className="flex items-center mt-1">
              <ArrowUp size={12} className="text-fitnest-success mr-1" />
              <span className="text-xs text-fitnest-success">8.2% vs yesterday</span>
            </div>
          </Card>
          
          <Card className="bg-white p-4 rounded-2xl border-none shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-secondary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <Clock size={16} className="text-white" />
              </div>
              <div className="text-xs text-fitnest-grey">Duration</div>
            </div>
            <div className="flex items-baseline">
              <h3 className="text-2xl font-bold text-fitnest-dark">95</h3>
              <span className="ml-1 text-xs text-fitnest-grey">min</span>
            </div>
            <div className="flex items-center mt-1">
              <ArrowUp size={12} className="text-fitnest-success mr-1" />
              <span className="text-xs text-fitnest-success">12.5% vs yesterday</span>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="bg-white p-4 rounded-2xl border-none shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-primary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <Dumbbell size={16} className="text-white" />
              </div>
              <div className="text-xs text-fitnest-grey">Workouts</div>
            </div>
            <h3 className="text-2xl font-bold text-fitnest-dark">3</h3>
            <div className="flex items-center mt-1">
              <ArrowUp size={12} className="text-fitnest-success mr-1" />
              <span className="text-xs text-fitnest-success">Same as yesterday</span>
            </div>
          </Card>
          
          <Card className="bg-white p-4 rounded-2xl border-none shadow-sm">
            <div className="flex items-center mb-2">
              <div className="bg-gradient-secondary w-8 h-8 rounded-full flex items-center justify-center mr-2">
                <Heart size={16} className="text-white" />
              </div>
              <div className="text-xs text-fitnest-grey">Avg HR</div>
            </div>
            <div className="flex items-baseline">
              <h3 className="text-2xl font-bold text-fitnest-dark">82</h3>
              <span className="ml-1 text-xs text-fitnest-grey">bpm</span>
            </div>
            <div className="flex items-center mt-1">
              <ArrowUp size={12} className="text-fitnest-success mr-1" />
              <span className="text-xs text-fitnest-success">Normal</span>
            </div>
          </Card>
        </div>
      </div>
      
      {/* Activity Charts */}
      <div className="px-6 mt-8">
        <Card className="p-4 rounded-2xl border-none shadow-sm mb-8">
          <Tabs defaultValue="calories">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-fitnest-dark font-semibold">Activity Progress</h2>
              <TabsList className="bg-fitnest-border-grey p-1 rounded-full">
                <TabsTrigger value="calories" className="rounded-full text-xs">Calories</TabsTrigger>
                <TabsTrigger value="steps" className="rounded-full text-xs">Steps</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="calories">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="calories"
                      stroke="#92A3FD"
                      activeDot={{ r: 8 }}
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="steps">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} strokeOpacity={0.2} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="steps"
                      stroke="#C58BF2"
                      activeDot={{ r: 8 }}
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
      
      {/* Workout History */}
      <div className="px-6 mt-6">
        <h2 className="text-fitnest-dark font-semibold mb-4">Recent Workouts</h2>
        <div className="space-y-3">
          {workoutHistory.map((workout) => (
            <Card key={workout.id} className="p-4 rounded-2xl border-none shadow-sm flex items-center">
              <div className="mr-3 text-2xl">{workout.icon}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-fitnest-dark">{workout.title}</h3>
                  <span className="text-xs text-fitnest-grey">{workout.date}</span>
                </div>
                <div className="flex items-center mt-1 text-xs text-fitnest-grey">
                  <Clock size={12} className="mr-1" />
                  <span className="mr-4">{workout.duration}</span>
                  <Flame size={12} className="mr-1" />
                  <span>{workout.calories} Calories</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityTracker;
