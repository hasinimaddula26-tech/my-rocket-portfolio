import { Github, Linkedin, Mail, Code2, Sparkles, Terminal, Award, GraduationCap, Briefcase, Code, Users, MessageSquare, Lightbulb, Clock, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {

  const skills = [
    { name: "Java", level: 90 },
    { name: "Python", level: 85 },
    { name: "Kotlin", level: 88 },
    { name: "C/C++", level: 80 },
    { name: "ML/AI", level: 85 },
    { name: "DSA", level: 88 },
    { name: "Enterprise", level: 86 }
  ];

  const softSkills = [
    { name: "Leadership", icon: <Users className="w-5 h-5" />, direction: "left" },
    { name: "Communication", icon: <MessageSquare className="w-5 h-5" />, direction: "left" },
    { name: "Problem Solving", icon: <Lightbulb className="w-5 h-5" />, direction: "right" },
    { name: "Adaptability", icon: <Zap className="w-5 h-5" />, direction: "right" },
    { name: "Team Collaboration", icon: <TrendingUp className="w-5 h-5" />, direction: "center" },
    { name: "Time Management", icon: <Clock className="w-5 h-5" />, direction: "center" }
  ];

  const experience = [
    {
      title: "Android App Developer Intern",
      company: "Google",
      period: "Jul 2025",
      description: "Developing and testing Android applications using Java and Kotlin. Implementing user-friendly UI/UX designs and collaborating on real-time project modules.",
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Google AIML Virtual Intern",
      company: "Google",
      period: "Sep 2024",
      description: "Gained exposure to Artificial Intelligence and Machine Learning concepts. Completed tasks and projects, improved Python skills, and learned practical applications of ML in real-world scenarios.",
      icon: <Briefcase className="w-5 h-5" />
    }
  ];

  const workshops = [
    {
      title: "Application Development with AI & Essential Skills",
      period: "Jun 2025"
    },
    {
      title: "Google AI Agents Workshop",
      period: "2025"
    },
    {
      title: "Outskill AI Master Workshop",
      period: "2025"
    },
    {
      title: "AI Tools Workshop by AICTE - Brainovision",
      period: "2025"
    }
  ];

  const certifications = [
    { name: "GenAI Powered Data Analytics Job", org: "TATA", date: "Aug 2025" },
    { name: "TCS ion Career Edge-Young Professional", org: "TCS ion", date: "Aug 2025" },
    { name: "C Programming 101", org: "Infosys Springboard", date: "Jul 2025" },
    { name: "Business Analysis & Process Management", org: "Coursera", date: "Jul 2025" },
    { name: "Elements of AI", org: "MinnaLearn (University of Helsinki)", date: "Aug 2025" },
    { name: "Introduction to Modern AI", org: "Cisco", date: "Jun 2025" },
    { name: "Micro-Certification", org: "ServiceNow", date: "Jul 2025" },
    { name: "Azure AI Fundamentals", org: "Microsoft", date: "Feb 2024" },
    { name: "Prompt Engineering Application", org: "Simplilearn Skillup", date: "Jul 2025" }
  ];

  const education = [
    {
      degree: "B.Tech Computer Science",
      institution: "Pragati Engineering College",
      period: "2023 - 2028",
      score: "CGPA: 9.55",
      status: "2nd Year"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Pragati Vidyala College",
      period: "2024",
      score: "Percentage: 98%",
      status: "Completed"
    },
    {
      degree: "SSC",
      institution: "Luthern EM School",
      period: "2022",
      score: "Percentage: 92%",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Simple Background */}
      <div className="fixed inset-0 pointer-events-none bg-grid">
        <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 glass border-b border-border/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold text-xl text-gradient">Portfolio</span>
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
            <Badge className="px-6 py-3 text-sm">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              Available for Opportunities
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold mb-6">
            <span className="text-gradient">Maddula Hasini</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            Problem Solver • Innovator • Tech Enthusiast
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
            Google Intern | 2nd Year CSE @ Pragati Engineering College | 9.5+ CGPA
          </p>

          <div className="flex gap-4 justify-center mb-12">
            <Button size="lg" className="group" asChild>
              <a href="https://github.com/hasinimaddula26-tech" target="_blank" rel="noopener noreferrer">
                <Code2 className="w-5 h-5 mr-2" />
                View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass group" asChild>
              <a href="mailto:hasinimaddula26@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative mb-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">About Me</span>
          </h2>
          <Card className="glass border border-border/40 p-8">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a second-year CSE student (CGPA 9.5+) with hands-on experience in C, Python, Java, and DSA. Currently interning as a Google Android App Developer, with a completed Google AIML Virtual Internship. I actively solve problems on LeetCode, HackerRank, and GeeksforGeeks, and I'm exploring enterprise tools like ServiceNow and Salesforce. As an NCC cadet, I've built strong discipline, teamwork, and leadership skills.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 relative bg-dots mb-20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill) => (
              <Card key={skill.name} className="glass border border-border/40 p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold px-3 py-1 rounded-lg glass">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative mb-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Experience</span>
          </h2>
          
          {experience.map((exp, index) => (
            <Card key={index} className="glass border border-border/40 p-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-gradient">{exp.title}</h3>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
                  <p className="text-foreground/90 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Soft Skills Section */}
      <section className="py-32 px-6 relative bg-dots mb-20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Soft Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill) => (
              <Card key={skill.name} className="glass border border-border/40 p-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <p className="font-semibold text-lg">{skill.name}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-32 px-6 relative mb-32">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-gradient">Workshops & Training</span>
          </h2>
          <div className="space-y-4">
            {workshops.map((workshop, index) => (
              <Card key={index} className="glass border border-border/40 p-6">
                <h3 className="text-xl font-bold mb-2 text-gradient">{workshop.title}</h3>
                <p className="text-muted-foreground">{workshop.period}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-32 px-6 relative mb-32">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index} className="glass border border-border/40 p-6">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gradient">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-2 text-lg">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="glass border-primary/30 mb-3 text-sm px-3 py-1">{edu.status}</Badge>
                    <p className="font-bold text-lg">{edu.score}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-32 px-6 relative bg-dots mb-32">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass border border-border/40 p-5">
                <h3 className="font-bold mb-2 text-gradient">{cert.name}</h3>
                <p className="text-sm text-primary mb-1">{cert.org}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative mb-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="text-gradient">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Open to internships, collaborations, and innovative projects
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <a href="mailto:hasinimaddula26@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                hasinimaddula26@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass" asChild>
              <a href="https://github.com/hasinimaddula26-tech" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass" asChild>
              <a href="/resume_1.pdf" download="Maddula_Hasini_Resume.pdf">
                <Code2 className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border/50 glass">
        <div className="container mx-auto text-center">
          <p className="mb-6 text-muted-foreground text-gradient">© Maddula Hasini</p>
          <div className="flex gap-4 justify-center flex-wrap mb-4">
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="mailto:hasinimaddula26@gmail.com">
                <Mail className="w-4 h-4" />
                Email
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://github.com/hasinimaddula26-tech" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://www.linkedin.com/in/maddula-hasini-074274320" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://leetcode.com/u/Hasinimaddula/" target="_blank" rel="noopener noreferrer">
                <Code className="w-4 h-4" />
                LeetCode
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://www.hackerrank.com/profile/hasinimaddula26" target="_blank" rel="noopener noreferrer">
                <Code2 className="w-4 h-4" />
                HackerRank
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2" asChild>
              <a href="https://www.geeksforgeeks.org/user/hasinimawn4g/" target="_blank" rel="noopener noreferrer">
                <Terminal className="w-4 h-4" />
                GeeksforGeeks
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
