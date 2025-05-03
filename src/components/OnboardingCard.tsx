
import { cn } from "@/lib/utils";

interface OnboardingCardProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

const OnboardingCard = ({ image, title, description, className }: OnboardingCardProps) => {
  return (
    <div className={cn("flex flex-col items-center px-6", className)}>
      <div className="mb-8 w-full max-w-xs">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
      <h1 className="text-fitnest-dark text-2xl font-bold mb-3">{title}</h1>
      <p className="text-fitnest-grey text-center mb-6 max-w-xs">{description}</p>
    </div>
  );
};

export default OnboardingCard;
