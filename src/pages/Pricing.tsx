import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Crown } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for trying out EduBridge AI",
      icon: Zap,
      features: [
        "Access to 100+ lessons",
        "Basic progress tracking",
        "Community support",
        "Mobile app access",
        "Weekly learning reports",
      ],
      cta: "Start Free",
      popular: false,
      color: "from-muted to-muted/50",
    },
    {
      name: "Pro",
      price: "₹499",
      period: "month",
      description: "For serious learners who want the best",
      icon: Crown,
      features: [
        "Unlimited lesson access",
        "AI-powered recommendations",
        "Advanced analytics dashboard",
        "Priority support (24/7)",
        "Offline downloads",
        "Certificate of completion",
        "Personalized learning paths",
        "1-on-1 monthly mentor session",
      ],
      cta: "Get Pro",
      popular: true,
      color: "from-primary to-secondary",
    },
    {
      name: "Team",
      price: "₹2,999",
      period: "month",
      description: "For schools and organizations",
      icon: Shield,
      features: [
        "Everything in Pro",
        "Up to 50 students",
        "Teacher dashboard & analytics",
        "Custom learning paths",
        "Bulk certificates",
        "Dedicated account manager",
        "Custom integrations",
        "White-label options",
        "Training & onboarding",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-muted to-muted/50",
    },
  ];

  const comparisonFeatures = [
    {
      category: "Learning Content",
      features: [
        { name: "Lesson Library", free: "100+", pro: "1,200+", team: "1,200+" },
        { name: "Quiz Bank", free: "50+", pro: "500+", team: "500+" },
        { name: "Practice Problems", free: "Limited", pro: "Unlimited", team: "Unlimited" },
        { name: "Video Tutorials", free: "Basic", pro: "Full HD", team: "Full HD" },
      ],
    },
    {
      category: "AI Features",
      features: [
        { name: "AI Recommendations", free: "❌", pro: "✅", team: "✅" },
        { name: "Adaptive Learning", free: "❌", pro: "✅", team: "✅" },
        { name: "Smart Practice", free: "❌", pro: "✅", team: "✅" },
        { name: "Performance Predictions", free: "❌", pro: "✅", team: "✅" },
      ],
    },
    {
      category: "Analytics & Tracking",
      features: [
        { name: "Progress Dashboard", free: "Basic", pro: "Advanced", team: "Enterprise" },
        { name: "Weak Topic Identification", free: "❌", pro: "✅", team: "✅" },
        { name: "Learning Reports", free: "Weekly", pro: "Daily", team: "Real-time" },
        { name: "Teacher Analytics", free: "❌", pro: "❌", team: "✅" },
      ],
    },
    {
      category: "Support & Extras",
      features: [
        { name: "Support Response Time", free: "48h", pro: "24h", team: "2h" },
        { name: "Offline Access", free: "❌", pro: "✅", team: "✅" },
        { name: "Certificates", free: "❌", pro: "✅", team: "✅" },
        { name: "Custom Content", free: "❌", pro: "❌", team: "✅" },
      ],
    },
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              Simple, Transparent Pricing
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Choose the Right Plan for Your{" "}
              <span className="gradient-text">Learning Goals</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Start free and upgrade anytime. All plans include our core features with no hidden fees.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={plan.popular ? "md:scale-110" : ""}
              >
                <Card className={`glass-card h-full hover:border-primary/50 transition-all duration-300 ${plan.popular ? 'border-primary' : ''}`}>
                  <CardContent className="p-8">
                    {plan.popular && (
                      <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary">
                        Most Popular
                      </Badge>
                    )}
                    
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-muted-foreground">/{plan.period}</span>
                    </div>

                    <Link to="/auth">
                      <Button 
                        className={`w-full mb-6 ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </Link>

                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Feature <span className="gradient-text">Comparison</span>
            </h2>
            
            <Card className="glass-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">Free</th>
                      <th className="text-center p-4 font-semibold">Pro</th>
                      <th className="text-center p-4 font-semibold">Team</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((category, catIndex) => (
                      <>
                        <tr key={`cat-${catIndex}`} className="bg-muted/10">
                          <td colSpan={4} className="p-4 font-semibold">
                            {category.category}
                          </td>
                        </tr>
                        {category.features.map((feature, featIndex) => (
                          <tr key={`feat-${catIndex}-${featIndex}`} className="border-t border-border/50">
                            <td className="p-4 text-muted-foreground">{feature.name}</td>
                            <td className="p-4 text-center">{feature.free}</td>
                            <td className="p-4 text-center font-medium">{feature.pro}</td>
                            <td className="p-4 text-center">{feature.team}</td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mt-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Pricing <span className="gradient-text">FAQs</span>
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Can I switch plans anytime?",
                  a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately."
                },
                {
                  q: "Is there a free trial for Pro?",
                  a: "We offer a generous free plan instead of a time-limited trial. You can try core features before upgrading."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, debit cards, UPI, and net banking for Indian customers."
                },
                {
                  q: "Do you offer refunds?",
                  a: "Yes, we offer a 7-day money-back guarantee on all paid plans, no questions asked."
                },
                {
                  q: "Is there a discount for annual billing?",
                  a: "Yes! Annual plans get 20% off. Contact us for more details."
                }
              ].map((faq, index) => (
                <Card key={index} className="glass-card hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
