import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    description: string;
    tags: string[];
    difficulty: string;
    estimatedTime: number;
    xpReward: number;
  };
  completed?: boolean;
  index?: number;
}

export function LessonCard({ lesson, completed = false, index = 0 }: LessonCardProps) {
  const difficultyColors = {
    beginner: "bg-green-500/10 text-green-500 border-green-500/20",
    intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    advanced: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Link to={`/lessons/${lesson.id}`}>
        <Card className="glass-card hover:border-primary/50 transition-all duration-300 group relative overflow-hidden">
          {completed && (
            <div className="absolute top-4 right-4 z-10">
              <CheckCircle2 className="h-6 w-6 text-green-500" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <CardHeader className="relative">
            <div className="flex items-start justify-between mb-2">
              <Badge
                variant="outline"
                className={difficultyColors[lesson.difficulty as keyof typeof difficultyColors]}
              >
                {lesson.difficulty}
              </Badge>
            </div>
            <CardTitle className="text-xl group-hover:text-primary transition-colors">
              {lesson.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {lesson.description}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="relative">
            <div className="flex flex-wrap gap-2 mb-4">
              {lesson.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{lesson.estimatedTime} min</span>
              </div>
              <div className="flex items-center gap-1 text-secondary">
                <Trophy className="h-4 w-4" />
                <span>{lesson.xpReward} XP</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
