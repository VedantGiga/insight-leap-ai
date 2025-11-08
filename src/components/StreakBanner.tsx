import { Card } from "@/components/ui/card";
import { Flame } from "lucide-react";
import { motion } from "framer-motion";

interface StreakBannerProps {
  streak: number;
}

export function StreakBanner({ streak }: StreakBannerProps) {
  if (streak === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card border-secondary/50 bg-gradient-to-r from-secondary/10 to-primary/10">
        <div className="p-4 flex items-center gap-3">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Flame className="h-8 w-8 text-secondary" />
          </motion.div>
          <div>
            <p className="text-sm text-muted-foreground">Current Streak</p>
            <p className="text-2xl font-bold gradient-text">
              {streak} {streak === 1 ? "Day" : "Days"}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
