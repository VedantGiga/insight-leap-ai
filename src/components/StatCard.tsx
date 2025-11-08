import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: string;
  color?: "primary" | "secondary" | "muted";
  index?: number;
}

export function StatCard({
  icon: Icon,
  label,
  value,
  trend,
  color = "primary",
  index = 0,
}: StatCardProps) {
  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    muted: "text-muted-foreground",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Card className="glass-card hover:glow-effect transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">{label}</p>
              <p className="text-3xl font-bold">{value}</p>
              {trend && (
                <p className="text-xs text-muted-foreground mt-1">{trend}</p>
              )}
            </div>
            <div className={`p-3 rounded-xl bg-${color}/10`}>
              <Icon className={`h-6 w-6 ${colorClasses[color]}`} />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
