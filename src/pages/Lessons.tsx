import { useState } from "react";
import { Header } from "@/components/Header";
import { LessonCard } from "@/components/LessonCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import lessonsData from "@/data/lessons.json";
import { getUserProfile } from "@/lib/store";

export default function Lessons() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const userProfile = getUserProfile();
  const completedLessons = userProfile?.completedLessons || [];

  // Get all unique tags
  const allTags = Array.from(new Set(lessonsData.flatMap((lesson) => lesson.tags)));

  // Filter lessons
  const filteredLessons = lessonsData.filter((lesson) => {
    const matchesSearch =
      lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lesson.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDifficulty = !selectedDifficulty || lesson.difficulty === selectedDifficulty;
    const matchesTag = !selectedTag || lesson.tags.includes(selectedTag);

    return matchesSearch && matchesDifficulty && matchesTag;
  });

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
              Explore <span className="gradient-text">Lessons</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Browse our comprehensive library of interactive lessons
            </p>
          </div>

          {/* Search and Filters */}
          <div className="glass-card p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search lessons, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="md:w-auto w-full">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>

            {/* Difficulty Filter */}
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Difficulty</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedDifficulty === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedDifficulty(null)}
                >
                  All
                </Badge>
                {["beginner", "intermediate", "advanced"].map((difficulty) => (
                  <Badge
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedDifficulty(difficulty)}
                  >
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            <div>
              <p className="text-sm font-medium mb-2">Topics</p>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant={selectedTag === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  All Topics
                </Badge>
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-4">
            <p className="text-muted-foreground">
              Showing {filteredLessons.length} of {lessonsData.length} lessons
            </p>
          </div>

          {/* Lessons Grid */}
          {filteredLessons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLessons.map((lesson, index) => (
                <LessonCard
                  key={lesson.id}
                  lesson={lesson}
                  completed={completedLessons.includes(lesson.id)}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                No lessons found matching your criteria. Try adjusting your filters.
              </p>
            </motion.div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
