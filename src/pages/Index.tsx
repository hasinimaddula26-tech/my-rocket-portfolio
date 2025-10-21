import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, Mail, Code2, Sparkles, Terminal, Award, GraduationCap, Briefcase, Code, Users, MessageSquare, Lightbulb, Clock, Zap, TrendingUp, Rocket, Brain, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const floatingIconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Cursor follow effect for floating icons
      floatingIconsRef.current.forEach((icon, index) => {
        if (icon) {
          const speed = (index + 1) * 0.02;
          const x = (e.clientX - window.innerWidth / 2) * speed;
          const y = (e.clientY - window.innerHeight / 2) * speed;
          icon.style.transform = `translate(${x}px, ${y}px)`;
        }
      });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsNavScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      observerOptions
    );

    const elements = document.querySelectorAll('.scroll-reveal, .cinematic-reveal, .zoom-in-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

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
      {/* 3D Animated Background */}
      <div className="fixed inset-0 pointer-events-none bg-grid bg-3d overflow-hidden">
        {/* Mouse-following gradient */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] animate-float depth-layer-1"
          style={{
            left: `${mousePosition.x - 250}px`,
            top: `${mousePosition.y - 250}px`,
            transition: "all 0.3s ease-out"
          }}
        />
        
        {/* 3D Floating shapes */}
        <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[100px] float-3d depth-layer-2" style={{ animationDelay: "0s" }} />
        <div className="absolute bottom-20 left-20 w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px] float-3d depth-layer-1" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[150px] float-3d depth-layer-3" style={{ animationDelay: "4s" }} />
        
        {/* Additional 3D geometric shapes */}
        <div className="absolute top-40 left-1/4 w-[200px] h-[200px] bg-gradient-to-br from-primary/30 to-accent/30 blur-[80px] rounded-full float-3d" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 right-1/4 w-[250px] h-[250px] bg-gradient-to-tl from-secondary/30 to-primary/30 blur-[90px] rounded-full float-3d" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/3 right-1/3 w-[180px] h-[180px] bg-accent/20 blur-[70px] rounded-full float-3d" style={{ animationDelay: "5s" }} />
      </div>

      {/* Sticky Navigation with Animated Anchors */}
      <nav className={`sticky-nav fixed top-0 w-full z-50 glass border-b border-border/50 ${isNavScrolled ? 'scrolled' : ''}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 floating-icon">
            <Terminal className="w-6 h-6 text-primary glow" />
            <span className="font-bold text-xl text-gradient">Portfolio</span>
          </div>
          <div className="flex gap-6 items-center">
            <a href="#about" className="hover:text-primary transition-all duration-300 hover:scale-110 hover-pop">About</a>
            <a href="#skills" className="hover:text-primary transition-all duration-300 hover:scale-110 hover-pop">Skills</a>
            <a href="#experience" className="hover:text-primary transition-all duration-300 hover:scale-110 hover-pop">Experience</a>
            <a href="#contact" className="hover:text-primary transition-all duration-300 hover:scale-110 hover-pop">Contact</a>
          </div>
        </div>
      </nav>
      
      {/* Floating Decorative Icons */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        <div 
          ref={(el) => { if (el) floatingIconsRef.current[0] = el; }}
          className="absolute top-20 left-10 cursor-follow opacity-10"
        >
          <Rocket className="w-16 h-16 text-primary floating-icon" style={{ animationDelay: '0s' }} />
        </div>
        <div 
          ref={(el) => { if (el) floatingIconsRef.current[1] = el; }}
          className="absolute top-40 right-20 cursor-follow opacity-10"
        >
          <Brain className="w-20 h-20 text-accent floating-icon" style={{ animationDelay: '1s' }} />
        </div>
        <div 
          ref={(el) => { if (el) floatingIconsRef.current[2] = el; }}
          className="absolute bottom-40 left-1/4 cursor-follow opacity-10"
        >
          <Star className="w-12 h-12 text-secondary floating-icon" style={{ animationDelay: '2s' }} />
        </div>
        <div 
          ref={(el) => { if (el) floatingIconsRef.current[3] = el; }}
          className="absolute bottom-20 right-1/3 cursor-follow opacity-10"
        >
          <Sparkles className="w-14 h-14 text-primary floating-icon" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>

      {/* Dramatic Hero Section with Motion Blur */}
      <section 
        className="min-h-screen flex items-center justify-center relative px-6 pt-20 parallax-slow"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="container mx-auto text-center">
          <div className="inline-block mb-6 motion-blur" style={{ animationDelay: "0s" }}>
            <Badge className="glow-hover px-6 py-3 text-sm hover-pop">
              <Sparkles className="w-4 h-4 mr-2 inline animate-spin" style={{ animationDuration: '3s' }} />
              Available for Opportunities
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold mb-6 motion-blur" style={{ animationDelay: "0.2s" }}>
            <span className="text-gradient">Maddula Hasini</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-muted-foreground mb-4 max-w-2xl mx-auto motion-blur" style={{ animationDelay: "0.4s" }}>
            Problem Solver • Innovator • Tech Enthusiast
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto motion-blur" style={{ animationDelay: "0.6s" }}>
            Google Intern | 2nd Year CSE @ Pragati Engineering College | 9.5+ CGPA
          </p>

          <div className="flex gap-4 justify-center mb-12 motion-blur" style={{ animationDelay: "0.8s" }}>
            <Button size="lg" className="pulse-glow glow-hover hover-pop group" asChild>
              <a href="https://github.com/hasinimaddula26-tech" target="_blank" rel="noopener noreferrer">
                <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover hover-pop group" asChild>
              <a href="mailto:hasinimaddula26@gmail.com">
                <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Contact Me
              </a>
            </Button>
          </div>

        </div>
      </section>

      {/* About Section with Cinematic Reveal */}
      <section 
        id="about" 
        className="py-32 px-6 relative parallax-medium mb-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 cinematic-reveal">
            <span className="text-gradient">About Me</span>
          </h2>
          <Card className="glass glass-hover gradient-border p-8 card-3d hover-pop cinematic-reveal" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm a second-year CSE student (CGPA 9.5+) with hands-on experience in C, Python, Java, and DSA. Currently interning as a Google Android App Developer, with a completed Google AIML Virtual Internship. I actively solve problems on LeetCode, HackerRank, and GeeksforGeeks, and I'm exploring enterprise tools like ServiceNow and Salesforce. As an NCC cadet, I've built strong discipline, teamwork, and leadership skills.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section with Zoom In */}
      <section 
        id="skills" 
        className="py-32 px-6 relative bg-dots parallax-medium mb-20"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 zoom-in-scroll">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="glass glass-hover gradient-border p-6 card-3d hover-pop zoom-hover zoom-in-scroll draggable"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-primary font-bold glow-hover px-3 py-1 rounded-lg glass">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 animate-shimmer glow"
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundSize: "200% 100%"
                    }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section with Cinematic Cards */}
      <section 
        id="experience" 
        className="py-32 px-6 relative parallax-fast mb-20"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 cinematic-reveal">
            <span className="text-gradient">Experience</span>
          </h2>
          
          {experience.map((exp, index) => (
            <Card 
              key={index} 
              className="glass glass-hover gradient-border p-8 mb-6 card-3d hover-pop cinematic-reveal draggable" 
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center glow-hover floating-icon">
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

      {/* Soft Skills Section with Directional Animations */}
      <section 
        className="py-32 px-6 relative bg-dots parallax-medium mb-20"
        style={{ transform: `translateY(${scrollY * 0.25}px)` }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 zoom-in-scroll">
            <span className="text-gradient">Soft Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => {
              const animationClass = skill.direction === "left" ? "slide-from-left" : 
                                     skill.direction === "right" ? "slide-from-right" : 
                                     "scale-from-center";
              return (
                <Card 
                  key={skill.name}
                  className={`glass glass-hover gradient-border p-6 text-center card-3d hover-pop zoom-hover ${animationClass}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center glow-hover floating-icon">
                      {skill.icon}
                    </div>
                    <p className="font-semibold text-lg">{skill.name}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workshops with Zoom Effects */}
      <section 
        className="py-32 px-6 relative parallax-slow mb-32"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 cinematic-reveal">
            <span className="text-gradient">Workshops & Training</span>
          </h2>
          <div className="space-y-4">
            {workshops.map((workshop, index) => (
              <Card 
                key={index}
                className="glass glass-hover gradient-border p-6 card-3d hover-pop zoom-hover zoom-in-scroll"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2 text-gradient">{workshop.title}</h3>
                <p className="text-muted-foreground">{workshop.period}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education with Enhanced Effects */}
      <section 
        className="py-32 px-6 relative parallax-fast mb-32"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center cinematic-reveal">
            <GraduationCap className="w-8 h-8 text-primary glow-hover floating-icon" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Education</h2>
          </div>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="glass glass-hover gradient-border p-6 card-3d hover-pop zoom-hover cinematic-reveal"
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-gradient">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-2 text-lg">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="glass glow-hover border-primary/30 mb-3 text-sm px-3 py-1 hover-pop">{edu.status}</Badge>
                    <p className="font-bold text-lg glow-hover">{edu.score}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications with Staggered Zoom */}
      <section 
        className="py-32 px-6 relative bg-dots parallax-medium mb-32"
        style={{ transform: `translateY(${scrollY * 0.18}px)` }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center gap-3 mb-12 justify-center cinematic-reveal">
            <Award className="w-8 h-8 text-accent glow-hover floating-icon" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="glass glass-hover gradient-border p-5 card-3d hover-pop zoom-hover zoom-in-scroll draggable"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <h3 className="font-bold mb-2 text-gradient">{cert.name}</h3>
                <p className="text-sm text-primary mb-1">{cert.org}</p>
                <p className="text-xs text-muted-foreground">{cert.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Cinematic Finale */}
      <section 
        id="contact" 
        className="py-32 px-6 relative parallax-slow mb-20"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 cinematic-reveal">
            <span className="text-gradient">Let's Build Something Amazing</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 cinematic-reveal" style={{ animationDelay: "0.2s" }}>
            Open to internships, collaborations, and innovative projects
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="glow-hover hover-pop zoom-hover cinematic-reveal" asChild style={{ animationDelay: "0.3s" }}>
              <a href="mailto:hasinimaddula26@gmail.com">
                <Mail className="w-5 h-5 mr-2 floating-icon" />
                hasinimaddula26@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover hover-pop zoom-hover cinematic-reveal" asChild style={{ animationDelay: "0.4s" }}>
              <a href="https://github.com/hasinimaddula26-tech" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2 floating-icon" />
                View GitHub
              </a>
            </Button>
            <Button size="lg" variant="outline" className="glass glass-hover hover-pop zoom-hover cinematic-reveal" asChild style={{ animationDelay: "0.5s" }}>
              <a href="/resume_1.pdf" download="Maddula_Hasini_Resume.pdf">
                <Code2 className="w-5 h-5 mr-2 floating-icon" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Glass Effect */}
      <footer className="py-10 px-6 border-t border-border/50 glass">
        <div className="container mx-auto text-center">
          <p className="mb-6 text-muted-foreground text-gradient">© Maddula Hasini</p>
          <div className="flex gap-4 justify-center flex-wrap mb-4">
            <Button variant="ghost" size="sm" className="glass glass-hover hover-pop gap-2" asChild>
              <a href="mailto:hasinimaddula26@gmail.com">
                <Mail className="w-4 h-4 floating-icon" />
                Email
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass glass-hover hover-pop gap-2" asChild>
              <a href="https://github.com/hasinimaddula26-tech" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 floating-icon" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass glass-hover hover-pop gap-2" asChild>
              <a href="https://www.linkedin.com/in/maddula-hasini-074274320" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 floating-icon" />
                LinkedIn
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass glass-hover hover-pop gap-2" asChild>
              <a href="https://leetcode.com/u/Hasinimaddula/" target="_blank" rel="noopener noreferrer">
                <Code className="w-4 h-4 floating-icon" />
                LeetCode
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass glass-hover hover-pop gap-2" asChild>
              <a href="https://www.hackerrank.com/profile/hasinimaddula26" target="_blank" rel="noopener noreferrer">
                <Code2 className="w-4 h-4 floating-icon" />
                HackerRank
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="glass glass-hover hover-pop gap-2" asChild>
              <a href="https://www.geeksforgeeks.org/user/hasinimawn4g/" target="_blank" rel="noopener noreferrer">
                <Terminal className="w-4 h-4 floating-icon" />
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
