
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

interface GradientButtonProps extends ButtonProps {
  gradient?: "primary" | "secondary";
  fullWidth?: boolean;
}

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, gradient = "primary", fullWidth = false, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "text-white font-medium rounded-full shadow-md hover:opacity-90 transition-opacity",
          gradient === "primary" 
            ? "bg-gradient-primary" 
            : "bg-gradient-secondary",
          fullWidth ? "w-full" : "",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
