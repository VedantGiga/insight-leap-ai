import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  Zap,
  Shield,
  Globe,
  ChevronRight,
  Star,
  CheckCircle,
  Brain,
  Clock,
  Award,
  Rocket,
  Heart,
  BarChart3,
  MessageSquare,
  Play,
  GraduationCap,
  Lightbulb,
  Users2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Recommendations",
      description: "Get personalized lesson suggestions based on your learning patterns and goals.",
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Earn XP, unlock badges, and maintain streaks to stay motivated.",
    },
    {
      icon: TrendingUp,
      title: "Track Your Progress",
      description: "Visual dashboards show your improvement across all subjects in real-time.",
    },
    {
      icon: Users,
      title: "Teacher Analytics",
      description: "Educators get insights into student performance and weak topic areas.",
    },
    {
      icon: Target,
      title: "Adaptive Difficulty",
      description: "Content adjusts to your skill level automatically as you progress.",
    },
    {
      icon: Shield,
      title: "Offline Access",
      description: "Learn anywhere with PWA support and offline lesson availability.",
    },
    {
      icon: Brain,
      title: "Smart Learning Paths",
      description: "AI creates custom learning journeys optimized for your success.",
    },
    {
      icon: Clock,
      title: "24/7 Learning Support",
      description: "Access lessons and resources anytime, anywhere on any device.",
    },
    {
      icon: Award,
      title: "Certified Courses",
      description: "Earn recognized certificates upon completing learning modules.",
    },
  ];

  const stats = [
    { value: "50K+", label: "Active Students" },
    { value: "1,200+", label: "Lessons" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Available" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Class 10 Student",
      content: "EduBridge AI helped me improve my math scores by 40% in just 3 months. The adaptive learning is incredible!",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Rahul Verma",
      role: "Engineering Student",
      content: "The AI recommendations always know exactly what I need to study next. It's like having a personal tutor 24/7.",
      rating: 5,
      avatar: "RV",
    },
    {
      name: "Anjali Mehta",
      role: "Teacher",
      content: "The analytics dashboard helps me identify struggling students early and provide targeted support. Game changer!",
      rating: 5,
      avatar: "AM",
    },
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Create Your Profile",
      description: "Sign up and tell us about your learning goals and current skill level.",
      icon: Users2,
    },
    {
      step: "2",
      title: "AI Analyzes Your Needs",
      description: "Our advanced AI creates a personalized learning path just for you.",
      icon: Brain,
    },
    {
      step: "3",
      title: "Start Learning",
      description: "Access interactive lessons, quizzes, and practice materials anytime.",
      icon: Play,
    },
    {
      step: "4",
      title: "Track Progress & Earn Rewards",
      description: "Watch your growth with detailed analytics and unlock achievement badges.",
      icon: Trophy,
    },
  ];

  const benefits = [
    { icon: Rocket, text: "10x faster learning with AI-powered personalization" },
    { icon: Heart, text: "Stay motivated with gamification and rewards" },
    { icon: BarChart3, text: "Track progress with detailed analytics" },
    { icon: Users, text: "Join a community of 50,000+ learners" },
    { icon: Clock, text: "Learn at your own pace, anytime, anywhere" },
    { icon: GraduationCap, text: "Earn recognized certificates and credentials" },
  ];

  const pricingTiers = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      features: [
        "Access to 100+ lessons",
        "Basic progress tracking",
        "Community support",
        "Mobile app access",
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "₹499",
      period: "month",
      features: [
        "Unlimited lesson access",
        "AI-powered recommendations",
        "Advanced analytics",
        "Priority support",
        "Offline downloads",
        "Certificate of completion",
      ],
      cta: "Get Pro",
      popular: true,
    },
    {
      name: "Team",
      price: "₹2,999",
      period: "month",
      features: [
        "Everything in Pro",
        "Up to 50 students",
        "Teacher dashboard",
        "Custom learning paths",
        "Bulk certificates",
        "Dedicated support",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How does the AI personalization work?",
      answer: "Our AI analyzes your learning patterns, quiz performance, and engagement to recommend the most effective lessons and difficulty levels for your unique learning style.",
    },
    {
      question: "Can I access lessons offline?",
      answer: "Yes! With our PWA (Progressive Web App) technology, you can download lessons and access them offline on any device.",
    },
    {
      question: "Is EduBridge AI suitable for all age groups?",
      answer: "Absolutely! We have content designed for students from class 6 to college level, as well as professional upskilling courses.",
    },
    {
      question: "How do I track my progress?",
      answer: "Your dashboard provides detailed analytics including XP earned, streaks maintained, lessons completed, quiz scores, and weak topic identification.",
    },
    {
      question: "Are the certificates recognized?",
      answer: "Yes, our certificates are recognized by educational institutions and employers. Each certificate includes a verification code for authenticity.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl animate-pulse-glow" />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Zap className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Trusted by 50,000+ Students Worldwide</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                Learn Smarter with{" "}
                <span className="gradient-text">AI-Powered Education</span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                EduBridge AI combines adaptive learning, gamification, and intelligent recommendations
                to help you master any subject 10x faster than traditional methods.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-6 h-auto">
                    Start Learning Free
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/lessons">
                  <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto">
                    <Globe className="mr-2 h-5 w-5" />
                    Explore Lessons
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Free forever plan</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">EduBridge AI</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of learning with cutting-edge AI technology and proven methodologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-base text-foreground">{benefit.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Powerful Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to <span className="gradient-text">Excel</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform is built with cutting-edge features designed to make learning
              effective, engaging, and accessible for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How <span className="gradient-text">EduBridge AI</span> Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and begin your personalized learning journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <Card className="glass-card h-full text-center hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold">
                      {item.step}
                    </div>
                    <item.icon className="h-10 w-10 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                {index < howItWorks.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 h-8 w-8 text-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See what our students and teachers have to say about their learning experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Simple Pricing
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your <span className="gradient-text">Plan</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade as you grow. All plans include our core features.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className={`glass-card h-full hover:border-primary/50 transition-all duration-300 ${tier.popular ? 'border-primary scale-105' : ''}`}>
                  <CardContent className="p-8">
                    {tier.popular && (
                      <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold gradient-text">{tier.price}</span>
                      <span className="text-muted-foreground">/{tier.period}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/auth">
                      <Button 
                        className={`w-full ${tier.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}
                        variant={tier.popular ? 'default' : 'outline'}
                      >
                        {tier.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We've got answers. If you can't find what you're looking for, contact us.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <MessageSquare className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Link to="/contact">
              <Button variant="outline" size="lg">
                Contact Support
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass-card border-primary/50 bg-gradient-to-br from-primary/10 via-background to-secondary/10 max-w-5xl mx-auto">
              <CardContent className="p-16 text-center">
                <Lightbulb className="h-20 w-20 mx-auto mb-8 text-primary animate-float" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your Learning Journey?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                  Join 50,000+ students who are already learning smarter with EduBridge AI.
                  Start your journey today – it's completely free!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/auth">
                    <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-6 h-auto">
                      Create Free Account
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/lessons">
                    <Button variant="outline" size="lg" className="text-lg px-10 py-6 h-auto">
                      Browse Lessons
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  No credit card required • Free forever plan • Cancel anytime
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">EduBridge AI</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering learners worldwide with AI-powered adaptive education. 
                Learn smarter, not harder.
              </p>
              <div className="flex gap-4">
                {/* Social media placeholders */}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/lessons" className="text-muted-foreground hover:text-foreground transition-colors">
                    Lessons
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/teacher" className="text-muted-foreground hover:text-foreground transition-colors">
                    For Teachers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 EduBridge AI. All rights reserved. Empowering learners worldwide.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
