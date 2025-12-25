import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

export default function BookingSteps({ currentStep, steps }: BookingStepsProps) {
  return (
    <div className="w-full py-4">
      <div className="flex items-center justify-between max-w-2xl mx-auto px-4">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center">
            <div className="flex flex-col items-center">
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: index <= currentStep ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
                  scale: index === currentStep ? 1.1 : 1
                }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold"
                data-testid={`step-indicator-${index}`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5 text-primary-foreground" />
                ) : (
                  <span className={index <= currentStep ? 'text-primary-foreground' : 'text-muted-foreground'}>
                    {index + 1}
                  </span>
                )}
              </motion.div>
              <span className={`mt-2 text-xs font-medium ${
                index <= currentStep ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {step}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2 h-0.5 min-w-[40px]">
                <motion.div
                  initial={false}
                  animate={{
                    width: index < currentStep ? '100%' : '0%'
                  }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-primary"
                />
                <div className="h-full bg-muted -mt-0.5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
