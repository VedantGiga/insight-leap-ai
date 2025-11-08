import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

interface ProgressBarProps {
  label: string;
  value: number;
  max: number;
  color?: "primary" | "secondary";
  showPercentage?: boolean;
}

export function ProgressBar({
  label,
  value,
  max,
  color = "primary",
  showPercentage = true,
}: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        {showPercentage && (
          <span className="text-sm font-bold text-foreground">{percentage}%</span>
        )}
      </div>
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Progress value={percentage} className="h-2" />
      </motion.div>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
