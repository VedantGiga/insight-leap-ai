// Simple localStorage-based state management
interface UserProfile {
  name: string;
  email: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  totalXP: number;
  currentStreak: number;
  badges: string[];
  completedLessons: string[];
  weakTopics: string[];
  lastActive: string;
}

const STORAGE_KEY = 'edubridge_user';

// Get user profile from localStorage
export function getUserProfile(): UserProfile | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error loading user profile:', error);
    return null;
  }
}

// Save user profile to localStorage
export function saveUserProfile(profile: UserProfile): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Error saving user profile:', error);
  }
}

// Initialize default user profile
export function initializeUserProfile(): UserProfile {
  const defaultProfile: UserProfile = {
    name: 'Student',
    email: 'student@edubridge.ai',
    level: 'beginner',
    totalXP: 0,
    currentStreak: 0,
    badges: [],
    completedLessons: [],
    weakTopics: [],
    lastActive: new Date().toISOString(),
  };
  
  saveUserProfile(defaultProfile);
  return defaultProfile;
}

// Add XP and check for level up
export function addXP(currentProfile: UserProfile, xpToAdd: number): UserProfile {
  const newTotalXP = currentProfile.totalXP + xpToAdd;
  let newLevel = currentProfile.level;
  
  // Simple level progression
  if (newTotalXP >= 500 && currentProfile.level === 'beginner') {
    newLevel = 'intermediate';
  } else if (newTotalXP >= 1500 && currentProfile.level === 'intermediate') {
    newLevel = 'advanced';
  }
  
  return {
    ...currentProfile,
    totalXP: newTotalXP,
    level: newLevel,
    lastActive: new Date().toISOString(),
  };
}

// Mark lesson as completed
export function completeLesson(
  currentProfile: UserProfile,
  lessonId: string,
  xpReward: number
): UserProfile {
  if (currentProfile.completedLessons.includes(lessonId)) {
    return currentProfile;
  }
  
  const updatedProfile = addXP(currentProfile, xpReward);
  
  return {
    ...updatedProfile,
    completedLessons: [...currentProfile.completedLessons, lessonId],
  };
}

// Update streak
export function updateStreak(currentProfile: UserProfile): UserProfile {
  const lastActive = new Date(currentProfile.lastActive);
  const today = new Date();
  const diffDays = Math.floor(
    (today.getTime() - lastActive.getTime()) / (1000 * 60 * 60 * 24)
  );
  
  let newStreak = currentProfile.currentStreak;
  
  if (diffDays === 0) {
    // Same day, no change
    return currentProfile;
  } else if (diffDays === 1) {
    // Consecutive day, increment
    newStreak++;
  } else {
    // Streak broken
    newStreak = 1;
  }
  
  return {
    ...currentProfile,
    currentStreak: newStreak,
    lastActive: today.toISOString(),
  };
}

// Award badge
export function awardBadge(currentProfile: UserProfile, badgeId: string): UserProfile {
  if (currentProfile.badges.includes(badgeId)) {
    return currentProfile;
  }
  
  return {
    ...currentProfile,
    badges: [...currentProfile.badges, badgeId],
  };
}
