// Simple TF-IDF based recommendation engine
interface Lesson {
  id: string;
  title: string;
  description: string;
  tags: string[];
  difficulty: string;
  estimatedTime: number;
  xpReward: number;
  content?: string;
}

interface UserProgress {
  completedLessons: string[];
  weakTopics: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
}

// Calculate cosine similarity between two tag arrays
function cosineSimilarity(tags1: string[], tags2: string[]): number {
  const set1 = new Set(tags1);
  const set2 = new Set(tags2);
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  
  if (set1.size === 0 || set2.size === 0) return 0;
  
  return intersection.size / Math.sqrt(set1.size * set2.size);
}

// Get recommended lessons based on user's completed lessons and weak topics
export function getRecommendedLessons(
  allLessons: Lesson[],
  userProgress: UserProgress,
  limit: number = 3
): Lesson[] {
  const { completedLessons, weakTopics, level } = userProgress;
  
  // Filter out already completed lessons
  const availableLessons = allLessons.filter(
    lesson => !completedLessons.includes(lesson.id)
  );
  
  // Score each lesson
  const scoredLessons = availableLessons.map(lesson => {
    let score = 0;
    
    // Prioritize weak topics
    const weakTopicMatch = lesson.tags.filter(tag => 
      weakTopics.some(weak => weak.toLowerCase().includes(tag.toLowerCase()))
    ).length;
    score += weakTopicMatch * 3;
    
    // Match difficulty level
    if (lesson.difficulty === level) {
      score += 2;
    } else if (
      (level === 'beginner' && lesson.difficulty === 'intermediate') ||
      (level === 'intermediate' && lesson.difficulty === 'advanced') ||
      (level === 'intermediate' && lesson.difficulty === 'beginner')
    ) {
      score += 1;
    }
    
    // If user has completed lessons, find similar ones
    if (completedLessons.length > 0) {
      const completedTags = allLessons
        .filter(l => completedLessons.includes(l.id))
        .flatMap(l => l.tags);
      
      const similarity = cosineSimilarity(lesson.tags, completedTags);
      score += similarity * 2;
    }
    
    return { lesson, score };
  });
  
  // Sort by score and return top lessons
  return scoredLessons
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.lesson);
}

// Get lessons by tag
export function getLessonsByTag(lessons: Lesson[], tag: string): Lesson[] {
  return lessons.filter(lesson =>
    lesson.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

// Get difficulty distribution
export function getDifficultyDistribution(lessons: Lesson[]): Record<string, number> {
  return lessons.reduce((acc, lesson) => {
    acc[lesson.difficulty] = (acc[lesson.difficulty] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
}
