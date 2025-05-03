
import { useState } from "react";
import { Search, Clock, Flame } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const popularWorkouts = [
  {
    id: 1,
    title: "Full Body Goal Blast",
    duration: "30 mins",
    calories: 320,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format",
    tag: "all"
  },
  {
    id: 2,
    title: "Lower Body Strength",
    duration: "45 mins",
    calories: 400,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&auto=format",
    tag: "fullbody"
  },
  {
    id: 3,
    title: "Ab Blast Challenge",
    duration: "20 mins",
    calories: 220,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format",
    tag: "upperbody"
  },
  {
    id: 4,
    title: "HIIT Cardio Burn",
    duration: "30 mins",
    calories: 350,
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&auto=format",
    tag: "lowerbody"
  },
  {
    id: 5,
    title: "Morning Yoga Flow",
    duration: "25 mins",
    calories: 180,
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format",
    tag: "yoga"
  },
  {
    id: 6,
    title: "Upper Body Sculpt",
    duration: "35 mins",
    calories: 280,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format",
    tag: "upperbody"
  }
];

const WorkoutPlans = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const isMobile = useIsMobile();
  
  const filteredWorkouts = popularWorkouts
    .filter(workout => 
      workout.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (activeTab === "all" || workout.tag === activeTab)
    );
    
  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-gradient-primary pt-12 pb-8 px-6 rounded-b-3xl">
        <h1 className="text-white text-2xl font-bold mb-6">Workout Plans</h1>
        <div className="relative mb-4">
          <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-fitnest-grey-light" />
          <input 
            type="text" 
            placeholder="Search workout" 
            className="w-full py-3 px-12 rounded-full bg-white text-fitnest-dark placeholder-fitnest-grey-light outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {/* Category Tabs */}
      <div className="px-6 -mt-4">
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="bg-white p-1 rounded-full shadow-sm w-full overflow-x-auto flex flex-nowrap justify-start">
            <TabsTrigger 
              value="all" 
              className="rounded-full text-xs flex-shrink-0"
              data-state={activeTab === "all" ? "active" : ""}
            >
              All
            </TabsTrigger>
            <TabsTrigger 
              value="fullbody" 
              className="rounded-full text-xs flex-shrink-0"
              data-state={activeTab === "fullbody" ? "active" : ""}
            >
              Full Body
            </TabsTrigger>
            <TabsTrigger 
              value="upperbody" 
              className="rounded-full text-xs flex-shrink-0"
              data-state={activeTab === "upperbody" ? "active" : ""}
            >
              Upper Body
            </TabsTrigger>
            <TabsTrigger 
              value="lowerbody" 
              className="rounded-full text-xs flex-shrink-0"
              data-state={activeTab === "lowerbody" ? "active" : ""}
            >
              Lower Body
            </TabsTrigger>
            <TabsTrigger 
              value="yoga" 
              className="rounded-full text-xs flex-shrink-0"
              data-state={activeTab === "yoga" ? "active" : ""}
            >
              Yoga
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredWorkouts.map(workout => (
                <Card 
                  key={workout.id}
                  className="overflow-hidden border-none shadow-sm rounded-2xl"
                >
                  <div className="relative">
                    <img 
                      src={workout.image} 
                      alt={workout.title} 
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/80 rounded-full px-3 py-1 text-xs font-medium text-fitnest-dark">
                      {workout.level}
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-semibold text-fitnest-dark mb-2">{workout.title}</h3>
                    <div className="flex items-center text-fitnest-grey text-xs">
                      <Clock size={14} className="mr-1" />
                      <span className="mr-3">{workout.duration}</span>
                      <Flame size={14} className="mr-1" />
                      <span>{workout.calories} Calories</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {filteredWorkouts.length === 0 && (
              <div className="text-center py-10">
                <p className="text-fitnest-grey">No workouts found. Try another search.</p>
              </div>
            )}
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default WorkoutPlans;
