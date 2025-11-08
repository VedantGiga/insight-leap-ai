import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { StatCard } from "@/components/StatCard";
import { ProgressBar } from "@/components/ProgressBar";
import { StreakBanner } from "@/components/StreakBanner";
import { RecommendationRail } from "@/components/RecommendationRail";
import { Trophy, BookOpen, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { getUserProfile, initializeUserProfile, updateStreak } from "@/lib/store";
import { getRecommendedLessons } from "@/lib/recommender";
import lessonsData from "@/data/lessons.json";

export default function Dashboard() {
  const [userProfile, setUserProfile] = useState(() => {
    const profile = getUserProfile();
    return profile || initializeUserProfile();
  });

  useEffect(() => {
    // Update streak on component mount
    const updatedProfile = updateStreak(userProfile);
    if (updatedProfile !== userProfile) {
      setUserProfile(updatedProfile);
    }
  }, []);

  const totalLessons = lessonsData.length;
  const completedCount = userProfile.completedLessons.length;
  const completionPercentage = Math.round((completedCount / totalLessons) * 100);

  // Get recommended lessons
  const recommendedLessons = getRecommendedLessons(lessonsData, {
    completedLessons: userProfile.completedLessons,
    weakTopics: userProfile.weakTopics.length > 0 ? userProfile.weakTopics : ["math"],
    level: userProfile.level,
  }, 3);

  // Calculate next level XP
  const levelThresholds = {
    beginner: 500,
    intermediate: 1500,
    advanced: Infinity,
  };
  const nextLevelXP = levelThresholds[userProfile.level];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">
              Welcome back, <span className="gradient-text">{userProfile.name}</span>! 👋
            </h1>
            <p className="text-muted-foreground text-lg">
              Ready to continue your learning journey?
            </p>
          </div>

          {/* Streak Banner */}
          <div className="mb-8">
            <StreakBanner streak={userProfile.currentStreak} />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={Trophy}
              label="Total XP"
              value={userProfile.totalXP}
              trend={`Level: ${userProfile.level}`}
              color="primary"
              index={0}
            />
            <StatCard
              icon={BookOpen}
              label="Lessons Completed"
              value={completedCount}
              trend={`${completionPercentage}% complete`}
              color="secondary"
              index={1}
            />
            <StatCard
              icon={Target}
              label="Current Level"
              value={userProfile.level.charAt(0).toUpperCase() + userProfile.level.slice(1)}
              trend={userProfile.level !== "advanced" ? `${nextLevelXP - userProfile.totalXP} XP to next level` : "Max level!"}
              color="primary"
              index={2}
            />
            <StatCard
              icon={TrendingUp}
              label="Badges Earned"
              value={userProfile.badges.length}
              trend="Keep learning!"
              color="secondary"
              index={3}
            />
          </div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-card p-6 mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">Your Progress</h2>
            <div className="space-y-6">
              <ProgressBar
                label="Overall Completion"
                value={completedCount}
                max={totalLessons}
              />
              {userProfile.level !== "advanced" && (
                <ProgressBar
                  label={`Progress to ${userProfile.level === "beginner" ? "Intermediate" : "Advanced"}`}
                  value={userProfile.totalXP}
                  max={nextLevelXP}
                  color="secondary"
                />
              )}
            </div>
          </motion.div>

          {/* Recommendations */}
          {recommendedLessons.length > 0 && (
            <RecommendationRail lessons={recommendedLessons} />
          )}

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 grid md:grid-cols-3 gap-6"
          >
            <a
              href="/lessons"
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <BookOpen className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Browse All Lessons</h3>
              <p className="text-sm text-muted-foreground">
                Explore our complete library of lessons across all subjects
              </p>
            </a>

            <a
              href="/teacher"
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <TrendingUp className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">View Analytics</h3>
              <p className="text-sm text-muted-foreground">
                See detailed insights about your learning patterns
              </p>
            </a>

            <a
              href="/auth"
              className="glass-card p-6 hover:border-primary/50 transition-all duration-300 group"
            >
              <Trophy className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">Earn More Badges</h3>
              <p className="text-sm text-muted-foreground">
                Complete challenges to unlock exclusive achievements
              </p>
            </a>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
