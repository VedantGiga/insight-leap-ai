import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, Trophy, ArrowLeft, CheckCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import lessonsData from "@/data/lessons.json";
import quizzesData from "@/data/quizzes.json";
import { getUserProfile, saveUserProfile, completeLesson } from "@/lib/store";

export default function LessonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const lesson = lessonsData.find((l) => l.id === id);
  const quiz = quizzesData.find((q) => q.lessonId === id);
  const userProfile = getUserProfile();

  useEffect(() => {
    if (!lesson) {
      toast.error("Lesson not found");
      navigate("/lessons");
    }
  }, [lesson, navigate]);

  if (!lesson) return null;

  const isCompleted = userProfile?.completedLessons.includes(lesson.id) || false;

  const handleStartQuiz = () => {
    if (!quiz) {
      toast.error("No quiz available for this lesson");
      return;
    }
    setQuizStarted(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) {
      toast.error("Please select an answer");
      return;
    }

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (quiz && currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      // Quiz completed
      setShowResults(true);
      
      if (quiz) {
        const correctAnswers = newAnswers.filter(
          (answer, index) => answer === quiz.questions[index].correctAnswer
        ).length;
        const percentage = (correctAnswers / quiz.questions.length) * 100;

        if (percentage >= 70 && userProfile) {
          // Mark lesson as completed
          const updatedProfile = completeLesson(userProfile, lesson.id, lesson.xpReward + quiz.xpReward);
          saveUserProfile(updatedProfile);
          toast.success(`Lesson completed! You earned ${lesson.xpReward + quiz.xpReward} XP!`);
        } else {
          toast.info("You need at least 70% to complete this lesson. Try again!");
        }
      }
    }
  };

  const calculateScore = () => {
    if (!quiz) return 0;
    const correctAnswers = answers.filter(
      (answer, index) => answer === quiz.questions[index].correctAnswer
    ).length;
    return Math.round((correctAnswers / quiz.questions.length) * 100);
  };

  const difficultyColors = {
    beginner: "bg-green-500/10 text-green-500 border-green-500/20",
    intermediate: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    advanced: "bg-red-500/10 text-red-500 border-red-500/20",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/lessons")}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Lessons
          </Button>

          {!quizStarted ? (
            <>
              {/* Lesson Header */}
              <div className="glass-card p-8 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge
                    variant="outline"
                    className={difficultyColors[lesson.difficulty as keyof typeof difficultyColors]}
                  >
                    {lesson.difficulty}
                  </Badge>
                  {isCompleted && (
                    <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Completed
                    </Badge>
                  )}
                </div>

                <h1 className="text-4xl font-bold mb-4">{lesson.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{lesson.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {lesson.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{lesson.estimatedTime} minutes</span>
                  </div>
                  <div className="flex items-center gap-2 text-secondary">
                    <Trophy className="h-4 w-4" />
                    <span>{lesson.xpReward} XP</span>
                  </div>
                </div>
              </div>

              {/* Lesson Content */}
              <Card className="glass-card mb-8">
                <CardHeader>
                  <CardTitle>Lesson Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {lesson.content}
                  </p>
                </CardContent>
              </Card>

              {/* Start Quiz Button */}
              {quiz && (
                <Card className="glass-card border-primary/50">
                  <CardContent className="p-8 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-4 text-primary animate-float" />
                    <h3 className="text-2xl font-bold mb-2">Ready to Test Your Knowledge?</h3>
                    <p className="text-muted-foreground mb-6">
                      Complete the quiz with at least 70% to earn {quiz.xpReward} bonus XP!
                    </p>
                    <Button
                      size="lg"
                      onClick={handleStartQuiz}
                      className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Start Quiz
                    </Button>
                  </CardContent>
                </Card>
              )}
            </>
          ) : quiz && !showResults ? (
            /* Quiz Interface */
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle>Question {currentQuestion + 1} of {quiz.questions.length}</CardTitle>
                  <Badge variant="outline">{Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%</Badge>
                </div>
                <Progress value={((currentQuestion + 1) / quiz.questions.length) * 100} className="h-2" />
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="text-xl font-semibold">{quiz.questions[currentQuestion].question}</h3>

                <div className="space-y-3">
                  {quiz.questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                        selectedAnswer === index
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswer === index
                              ? "border-primary bg-primary"
                              : "border-border"
                          }`}
                        >
                          {selectedAnswer === index && (
                            <CheckCircle className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <Button
                  onClick={handleNextQuestion}
                  className="w-full bg-gradient-to-r from-primary to-secondary"
                  disabled={selectedAnswer === null}
                >
                  {currentQuestion < quiz.questions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              </CardContent>
            </Card>
          ) : quiz && showResults ? (
            /* Quiz Results */
            <Card className="glass-card">
              <CardContent className="p-8 text-center">
                <Trophy className={`h-16 w-16 mx-auto mb-4 ${calculateScore() >= 70 ? "text-green-500" : "text-yellow-500"}`} />
                <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
                <p className="text-6xl font-bold gradient-text mb-4">{calculateScore()}%</p>
                <p className="text-muted-foreground mb-6">
                  You got {answers.filter((answer, index) => answer === quiz.questions[index].correctAnswer).length} out of {quiz.questions.length} questions correct
                </p>

                {calculateScore() >= 70 ? (
                  <p className="text-green-500 mb-6">
                    Congratulations! You've completed this lesson!
                  </p>
                ) : (
                  <p className="text-yellow-500 mb-6">
                    You need at least 70% to complete this lesson. Review the material and try again!
                  </p>
                )}

                <div className="flex gap-4 justify-center">
                  <Button onClick={() => navigate("/lessons")} variant="outline">
                    Back to Lessons
                  </Button>
                  <Button
                    onClick={() => {
                      setQuizStarted(false);
                      setCurrentQuestion(0);
                      setSelectedAnswer(null);
                      setAnswers([]);
                      setShowResults(false);
                    }}
                    className="bg-gradient-to-r from-primary to-secondary"
                  >
                    Review Lesson
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : null}
        </motion.div>
      </main>
    </div>
  );
}
