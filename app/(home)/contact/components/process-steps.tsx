import { steps } from "@/app/config/lists";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProcessSteps = () => {
  return (
    <div className="flex flex-col justify-center gap-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isLast = index === steps.length - 1;
        return (
          <div key={index} className="relative  flex gap-4">
            {!isLast && (
              <div className="absolute left-6 top-14 h-[calc(100%-1rem)] w-px bg-linear-to-b from-amber-500/50 to-transparent" />
            )}

            <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber-500/30 bg-amber-500/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <Card className="w-full border-white/10 bg-white/5">
              <CardHeader>
                <CardTitle className="text-primary">{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ProcessSteps;
