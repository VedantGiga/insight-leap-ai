import { Header } from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Target, Users, Lightbulb, Heart, Award, Globe2, TrendingUp, Sparkles } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to revolutionize how people learn and grow."
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make is centered around creating the best learning experience for our students."
    },
    {
      icon: Globe2,
      title: "Accessible Education",
      description: "Quality education should be available to everyone, everywhere, regardless of background."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in content quality, technology, and support."
    }
  ];

  const stats = [
    { value: "50K+", label: "Active Learners" },
    { value: "1,200+", label: "Lessons Created" },
    { value: "98%", label: "Success Rate" },
    { value: "150+", label: "Countries Reached" }
  ];

  const team = [
    {
      name: "Dr. Arjun Mehta",
      role: "CEO & Founder",
      description: "Former MIT professor with 15 years in EdTech",
      avatar: "AM"
    },
    {
      name: "Priya Singh",
      role: "Chief AI Officer",
      description: "PhD in Machine Learning from Stanford",
      avatar: "PS"
    },
    {
      name: "Rahul Sharma",
      role: "Head of Product",
      description: "Ex-Google, built products for millions",
      avatar: "RS"
    },
    {
      name: "Anjali Patel",
      role: "Head of Content",
      description: "20+ years teaching experience",
      avatar: "AP"
    }
  ];

  const milestones = [
    {
      year: "2021",
      title: "Founded",
      description: "EduBridge AI started with a vision to democratize quality education"
    },
    {
      year: "2022",
      title: "10K Users",
      description: "Reached our first 10,000 active learners across India"
    },
    {
      year: "2023",
      title: "AI Breakthrough",
      description: "Launched revolutionary adaptive learning algorithm"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Expanded to 150+ countries with 50K+ active users"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforming Education Through{" "}
              <span className="gradient-text">AI Innovation</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to make world-class education accessible to everyone through 
              the power of artificial intelligence and personalized learning experiences.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-20"
          >
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card text-center hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6">
                  <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To democratize quality education by combining cutting-edge AI technology 
                    with proven pedagogical methods, making personalized learning accessible 
                    to students worldwide, regardless of their location or background.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-8">
                  <Sparkles className="h-12 w-12 text-secondary mb-4" />
                  <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To create a world where every learner has access to personalized, 
                    AI-powered education that adapts to their unique needs, helping them 
                    achieve their full potential and succeed in an ever-changing world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors mb-4">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From a small startup to a global education platform.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <Card className="glass-card mb-8 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <TrendingUp className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div>
                        <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
                          {milestone.year}
                        </Badge>
                        <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-lg">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="gradient-text">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate team of educators, technologists, and innovators.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card h-full hover:border-primary/50 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-110 transition-transform">
                      {member.avatar}
                    </div>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
