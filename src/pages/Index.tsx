import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Code2, Sparkles, Terminal, Award, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "Kotlin", level: 88 },
    { name: "SQL", level: 82 },
    { name: "C/C++", level: 80 },
    { name: "Mobile Dev", level: 92 },
    { name: "ML/AI", level: 85 },
    { name: "DSA", level: 88 }
  ];

  const experience = [
    {
      title: "Android App Developer Intern",
      company: "Google",
      period: "2024",
      description: "Developed innovative Android applications focusing on AI/ML integration",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const certifications = [
    "Google Android Development",
    "Machine Learning Specialization",
    "Data Structures & Algorithms",
    "Python for Data Science",
    "Cloud Computing Fundamentals"
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-float"
          style={{
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
            transition: "all 0.3s ease-out"
          }}
        />
        <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[100px] animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl">MH</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6">
            <Badge className="glass px-4 py-2 text-sm animate-glow">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Available for Opportunities
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Maddula Hasini</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Android Developer • AI/ML Engineer • Problem Solver
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Google Intern | 2nd Year CSE @ Pragati Engineering College | 9.5+ CGPA
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="glow group">
              <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </div>

          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" className="glass glass-hover rounded-full">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass glass-hover rounded-full">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="glass glass-hover rounded-full">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Technical Arsenal</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="glass glass-hover p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Experience</span>
          </h2>
          
          {experience.map((exp, index) => (
            <Card key={index} className="glass glass-hover p-8 mb-6 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center glow">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-gradient">Education</h2>
              </div>
              <Card className="glass glass-hover p-6">
                <h3 className="text-xl font-bold mb-2">B.Sc. Computer Science</h3>
                <p className="text-primary font-semibold mb-2">Pragati Engineering College</p>
                <p className="text-muted-foreground mb-4">2nd Year • CGPA: 9.5+</p>
                <Badge className="bg-primary/20 text-primary border-primary/30">Top Performer</Badge>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-accent" />
                <h2 className="text-3xl font-bold text-gradient">Certifications</h2>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index} 
                    className="glass glass-hover p-4 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <p className="font-medium">{cert}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Open to internships, collaborations, and innovative projects
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="glow">
              <Mail className="w-5 h-5 mr-2" />
              hasini.maddula@example.com
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover">
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 glass">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Maddula Hasini. Crafted with ❤️ and AI</p>
          <p className="text-sm mt-2">NCC Cadet • LeetCode • HackerRank • GeeksforGeeks</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
