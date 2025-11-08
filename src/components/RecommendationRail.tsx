import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LessonCard } from "./LessonCard";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Lesson {
  id: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: string;
  estimatedTime: number;
  xpReward: number;
}

interface RecommendationRailProps {
  lessons: Lesson[];
  title?: string;
}

export function RecommendationRail({ lessons, title = "Recommended for You" }: RecommendationRailProps) {
  if (lessons.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-secondary" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {lessons.map((lesson, index) => (
              <LessonCard key={lesson.id} lesson={lesson} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
