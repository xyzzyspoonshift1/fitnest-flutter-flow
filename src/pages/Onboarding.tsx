
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OnboardingCard from "@/components/OnboardingCard";
import GradientButton from "@/components/GradientButton";

const onboardingData = [
  {
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&auto=format",
    title: "Track Your Goal",
    description: "Don't worry if you have trouble determining your goals, we can help you determine your goals and track your goals",
  },
  {
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format",
    title: "Get Burn",
    description: "Let's keep burning, to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever",
  },
  {
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&auto=format",
    title: "Eat Well",
    description: "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&auto=format",
    title: "Improve Sleep Quality",
    description: "Improve the quality of your sleep with us, good quality sleep can bring a good mood in the morning",
  },
];

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const maxSteps = onboardingData.length;
  const timerRef = useRef<number | null>(null);

  const handleNext = () => {
    if (activeStep === maxSteps - 1) {
      navigate("/login");
    } else {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const resetTimer = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      if (activeStep < maxSteps - 1) {
        setActiveStep(prevStep => prevStep + 1);
      }
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [activeStep]);

  return (
    <div className="min-h-screen flex flex-col justify-between py-8">
      <div className="flex justify-between px-6">
        <button 
          className={`rounded-full p-2 ${activeStep === 0 ? 'invisible' : ''}`}
          onClick={handleBack}
          disabled={activeStep === 0}
        >
          <ChevronLeft size={24} className="text-fitnest-dark" />
        </button>
        <button 
          className="text-fitnest-grey font-medium"
          onClick={() => navigate("/login")}
        >
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center mt-8">
        <OnboardingCard 
          image={onboardingData[activeStep].image}
          title={onboardingData[activeStep].title}
          description={onboardingData[activeStep].description}
        />
      </div>

      <div className="px-6 mt-8">
        <div className="flex justify-center mb-8">
          {onboardingData.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full mx-1 transition-all ${
                index === activeStep 
                  ? 'w-8 bg-gradient-primary' 
                  : 'w-2 bg-fitnest-border-grey'
              }`}
            />
          ))}
        </div>
        
        <GradientButton 
          fullWidth 
          size="lg" 
          onClick={handleNext}
          className="group"
        >
          <span className="mr-2">
            {activeStep === maxSteps - 1 ? 'Get Started' : 'Next'}
          </span>
          <ChevronRight size={20} className="inline-block group-hover:translate-x-1 transition-transform" />
        </GradientButton>
      </div>
    </div>
  );
};

export default Onboarding;
