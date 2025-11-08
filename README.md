# EduBridge AI - Learn Smarter with AI-Powered Education

![EduBridge AI](https://img.shields.io/badge/EduBridge-AI%20Powered-7C5CFC?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

A comprehensive, production-ready EdTech platform featuring AI-powered recommendations, gamification, and adaptive learning experiences.

## 🌟 Features

### Core Features
- **AI-Powered Recommendations** - Smart lesson suggestions based on learning patterns using TF-IDF cosine similarity
- **Gamification System** - XP points, badges, streaks, and level progression
- **Adaptive Difficulty** - Content automatically adjusts to student skill level
- **Progress Tracking** - Comprehensive dashboards showing real-time progress
- **Teacher Analytics** - Detailed insights into student performance and weak topics
- **PWA Support** - Offline-first architecture with service workers
- **Multi-language Ready** - i18n infrastructure (English + Hindi placeholders)
- **Responsive Design** - Mobile-first UI that works on all devices

### Technical Features
- **Modern Stack** - React 18 + TypeScript + Vite + Tailwind CSS
- **State Management** - localStorage-based persistence
- **Animations** - Smooth transitions with Framer Motion
- **Charts & Analytics** - Data visualization with Recharts
- **Component Library** - shadcn/ui with custom variants
- **Dark Theme** - Beautiful violet/cyan gradient design system

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd edubridge-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── LessonCard.tsx  # Lesson display card
│   ├── ProgressBar.tsx # Progress visualization
│   ├── StatCard.tsx    # Statistics display
│   └── ...
├── pages/              # Route pages
│   ├── Index.tsx       # Landing page
│   ├── Dashboard.tsx   # Student dashboard
│   ├── Lessons.tsx     # Lessons library
│   ├── LessonDetail.tsx# Individual lesson view
│   ├── Teacher.tsx     # Teacher analytics
│   └── Auth.tsx        # Authentication
├── data/               # Static data
│   ├── lessons.json    # Lesson content
│   └── quizzes.json    # Quiz data
├── lib/                # Utilities
│   ├── recommender.ts  # AI recommendation engine
│   ├── store.ts        # State management
│   └── utils.ts        # Helper functions
└── index.css           # Global styles & design system
```

## 🎨 Design System

EduBridge AI uses a carefully crafted dark theme design system:

### Color Palette
- **Primary**: `#7C5CFC` (Violet) - Main brand color
- **Secondary**: `#22D3EE` (Cyan) - Accent color
- **Background**: `#0B0F14` - Deep space dark
- **Card**: `#0F141A` - Card background
- **Text**: `#E6E9EE` - Primary text

### Key Design Principles
- Glassmorphism effects on cards
- Smooth animations and transitions
- Gradient text and backgrounds
- Rounded UI elements (rounded-2xl)
- Consistent spacing and typography
- Accessible contrast ratios

## 📚 Sample Data

The platform includes 8 comprehensive lessons across multiple subjects:
- Mathematics (Fractions, Algebra, Geometry)
- Science (Photosynthesis, Chemistry)
- Programming (Python basics)
- English (Essay writing)
- History (World War II)

Each lesson includes:
- Detailed content
- Difficulty level
- Estimated time
- XP rewards
- Tagged categories
- Associated quizzes (where applicable)

## 🎮 Gamification System

### XP & Leveling
- **Beginner**: 0-499 XP
- **Intermediate**: 500-1499 XP
- **Advanced**: 1500+ XP

### Badges
Unlock achievements by:
- Completing lessons
- Maintaining streaks
- Scoring high on quizzes
- Mastering difficult topics

### Streaks
Daily engagement tracking to encourage consistent learning habits.

## 🤖 AI Recommendation Engine

The recommendation system uses:
1. **TF-IDF Similarity** - Analyzes lesson tags and user history
2. **Weak Topic Prioritization** - Focus on areas needing improvement
3. **Difficulty Matching** - Suggests appropriate challenge level
4. **Collaborative Patterns** - Learns from similar user paths

## 📱 PWA Features

EduBridge AI is a fully functional Progressive Web App:
- **Offline Mode** - Access lessons without internet
- **Installable** - Add to home screen on mobile/desktop
- **Fast Loading** - Service worker caching
- **Background Sync** - Queue actions while offline
- **Push Notifications** - (Ready for implementation)

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Data

- All user data stored locally (localStorage)
- No external data collection
- GDPR compliant architecture
- Session-based authentication (demo mode)

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Adding New Lessons

Edit `src/data/lessons.json`:

```json
{
  "id": "unique-id",
  "title": "Lesson Title",
  "description": "Brief description",
  "content": "Full lesson content...",
  "tags": ["tag1", "tag2"],
  "difficulty": "beginner|intermediate|advanced",
  "estimatedTime": 20,
  "xpReward": 75
}
```

### Adding New Quizzes

Edit `src/data/quizzes.json`:

```json
{
  "id": "quiz-id",
  "lessonId": "lesson-id",
  "title": "Quiz Title",
  "questions": [
    {
      "id": "q1",
      "question": "Question text?",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "Why this is correct"
    }
  ],
  "xpReward": 30
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- **shadcn/ui** - Beautiful component library
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **Lucide Icons** - Icon system
- **Tailwind CSS** - Utility-first CSS

## 📞 Support

For support, please open an issue in the GitHub repository.

---

**Built with ❤️ using React + TypeScript + Tailwind CSS**

*Empowering learners worldwide through AI-powered education*
