"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, Award, Code, Smartphone, Database, Globe, ShoppingCart, LayoutDashboard, Salad, Radar } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  const [currentYear, setCurrentYear] = useState<number | null>(null)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">Shaheer Chishti</h1>
            <div className="hidden md:flex space-x-6 items-center">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => document.getElementById("achievements")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Achievements
              </button>
              <button
                onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Education
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Contact
              </button>
              <ThemeToggle />
            </div>
            {/* Mobile Navigation */}
            <div className="md:hidden">
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Button variant="ghost" size="sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/me.jpg"
              alt="Shaheer Chishti"
              width={400}
              height={400}
              className="me rounded-full mx-auto mb-6"
            />

            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">Shaheer Chishti</h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4">
              Computer Science Undergraduate &amp; Full-Stack Developer
            </p>
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                <Award className="w-4 h-4 mr-1 inline" />
                Regional Shortlist — AI Seekho 2026 Google Antigravity National Hackathon
              </Badge>
            </div>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Computer Science undergraduate at FAST NUCES Lahore with hands-on experience building full-stack
              desktop, web, and mobile systems — from cloud-synchronized POS platforms to AI-powered agentic
              pipelines. Seeking an international software engineering internship to contribute to high-impact
              engineering teams.
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild
                className="hover:bg-cyan-600 hover:text-white hover:-translate-y-1 shadow-lg hover:shadow-cyan-700/50 transition-all">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" asChild
                className="hover:bg-purple-600 hover:text-white hover:-translate-y-1 shadow-lg hover:shadow-purple-700/50 transition-all">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  I'm a Computer Science undergraduate at FAST NUCES Lahore with a proven ability to architect
                  modular, production-ready systems — from cloud-synchronized retail platforms in C# and .NET to
                  AI-integrated mobile apps and low-level assembly games.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  My work spans full-stack desktop, web, and mobile development, with a growing focus on AI-integrated
                  applications — agentic pipelines, LLM-powered features, and real-time cloud sync. I'm always eager
                  to take on challenging projects and ship things that actually work under pressure, as shown by a
                  regional shortlist finish at the AI Seekho 2026 Google Antigravity National Hackathon.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/ChishtiShaheer" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/shaheer-chishti/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Code className="w-8 h-8 text-blue-600" />
                      <div>
                        <h3 className="font-semibold">Problem Solver</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Love tackling complex coding challenges</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Mobile &amp; AI</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Gemini-powered Android &amp; React Native apps</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-8 h-8 text-purple-600" />
                      <div>
                        <h3 className="font-semibold">Full Stack</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Desktop, web, and cloud-synced systems</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
            Skills &amp; Technologies
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2 text-blue-600" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">C#</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Java</Badge>
                    <Badge variant="secondary">C</Badge>
                    <Badge variant="secondary">C++</Badge>
                    <Badge variant="secondary">SQL</Badge>
                    <Badge variant="secondary">Kotlin</Badge>
                    <Badge variant="secondary">JavaScript (React)</Badge>
                    <Badge variant="secondary">x86 Assembly</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-600" />
                    Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">.NET / WinUI 3</Badge>
                    <Badge variant="secondary">React JS</Badge>
                    <Badge variant="secondary">SFML</Badge>
                    <Badge variant="secondary">Android SDK</Badge>
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Google Genkit</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-purple-600" />
                    Databases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">PostgreSQL (Supabase)</Badge>
                    <Badge variant="secondary">SQL Server (SSMS)</Badge>
                    <Badge variant="secondary">Firebase Firestore</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-orange-600" />
                    Tools &amp; Concepts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Visual Studio</Badge>
                    <Badge variant="secondary">VS Code</Badge>
                    <Badge variant="secondary">Android Studio</Badge>
                    <Badge variant="secondary">Git &amp; GitHub</Badge>
                    <Badge variant="secondary">Google Colab</Badge>
                    <Badge variant="secondary">SHA-256 Auth</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
                    <Badge variant="secondary">Real-Time Cloud Sync</Badge>
                    <Badge variant="secondary">Agentic Pipelines</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Featured Projects</h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* ShopMate */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <div className="rounded-lg mb-4 w-full h-52 bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center">
                    <ShoppingCart className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle>ShopMate</CardTitle>
                  <CardDescription>
                    Dual-role POS &amp; inventory management desktop app with SHA-256 auth, role-based access, and
                    Supabase real-time cloud sync across 6 business modules.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">C#</Badge>
                    <Badge variant="outline">WinUI 3</Badge>
                    <Badge variant="outline">.NET</Badge>
                    <Badge variant="outline">Supabase PostgreSQL</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/ChishtiShaheer" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Git
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Treadify */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <div className="rounded-lg mb-4 w-full h-52 bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center">
                    <LayoutDashboard className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle>Treadify</CardTitle>
                  <CardDescription>
                    GitHub-integrated project management ecosystem for Product, Leadership, and Development teams,
                    with automated sprint reporting and hierarchical goal mapping.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React JS</Badge>
                    <Badge variant="outline">GitHub API</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/ChishtiShaheer?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Git
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* NutriVisionary */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <div className="rounded-lg mb-4 w-full h-52 bg-gradient-to-br from-lime-500 to-green-700 flex items-center justify-center">
                    <Salad className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle>NutriVisionary</CardTitle>
                  <CardDescription>
                    AI fitness &amp; nutrition Android app with a Gemini-powered chatbot for conversational macro
                    tracking and a CameraX-based food recognition pipeline for calorie estimation.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Java</Badge>
                    <Badge variant="outline">Firebase</Badge>
                    <Badge variant="outline">CameraX</Badge>
                    <Badge variant="outline">Gemini API</Badge>
                    <Badge variant="outline">In Development</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/ChishtiShaheer?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Git
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* CognitiveKinetic (Relay) */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <div className="rounded-lg mb-4 w-full h-52 bg-gradient-to-br from-fuchsia-500 to-purple-700 flex items-center justify-center">
                    <Radar className="w-16 h-16 text-white" />
                  </div>
                  <CardTitle>CognitiveKinetic (Relay)</CardTitle>
                  <CardDescription>
                    Full-stack agentic operational intelligence platform: a 5-stage async AI pipeline converts
                    unstructured news into quantitative risk signals, with a stateful action-simulation sandbox for
                    before/after impact comparisons.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Firebase</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Google Genkit</Badge>
                    <Badge variant="outline">Gemini 2.5 Flash</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/ChishtiShaheer?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Git
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Chess */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <Image
                    src="/chessimg.jpg"
                    alt="2D Chess Game"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 w-full h-52 object-cover"
                  />
                  <CardTitle>2D Chess Game</CardTitle>
                  <CardDescription>
                    Complete chess engine with full rule validation (en passant, castling, promotion) and recursive
                    check/checkmate detection — 100% FIDE compliant, no external libraries.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">C++</Badge>
                    <Badge variant="outline">SFML</Badge>
                    <Badge variant="outline">OOP</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/ChishtiShaheer?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Git
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Maze Runner */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <Image
                    src="/mazerunnerimg.jpg"
                    alt="2D Maze Game"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 w-full h-52 object-cover"
                  />
                  <CardTitle>2D Maze Game (Pacman Style)</CardTitle>
                  <CardDescription>
                    Fully playable maze game in x86 Assembly with hardware-level keyboard interrupt handling (INT 9h),
                    optimized screen buffer manipulation, and pixel-precise collision detection in 16-bit real-mode.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">x86 Assembly</Badge>
                    <Badge variant="outline">Intel iAPX 8088</Badge>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" asChild>
                      <a href="https://github.com/ChishtiShaheer?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Git
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section id="achievements" className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">
            Achievements &amp; Certifications
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-amber-100 dark:bg-amber-900/40 p-3">
                    <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">
                      Regional Shortlist — AI Seekho 2026 Google Antigravity National Hackathon
                    </CardTitle>
                    <CardDescription className="mt-1">
                      Issued by Google for Developers, Tech Nation Pakistan, Telenor &amp; Innovista | AI Seekho #VibeKaregaPakistan · 2026
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300">
                  Secured 10th place on the Regional Shortlist out of hundreds of competitive teams across the
                  region, recognized for outstanding technical execution, AI ingenuity, and the ability to build
                  rapidly under pressure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Bachelor of Science in Computer Science (BSCS)</CardTitle>
                <CardDescription className="text-lg">FAST NUCES, Lahore, Pakistan · 2023 – Present</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-400">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">Data Structures &amp; Algorithms</Badge>
                      <Badge variant="outline">Object-Oriented Programming</Badge>
                      <Badge variant="outline">Database Systems</Badge>
                      <Badge variant="outline">Software Engineering</Badge>
                      <Badge variant="outline">Web Development</Badge>
                      <Badge variant="outline">Mobile App Development</Badge>
                      <Badge variant="outline">Cybersecurity</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-400">Academic &amp; Extracurricular Achievements:</h4>
                    <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-300">
                      <li>Regional Shortlist, AI Seekho 2026 Google Antigravity National Hackathon</li>
                      <li>Programming competition participant</li>
                      <li>SOFTEC Member</li>
                      <li>FAST Sports Society member</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                discuss projects, internships, or just chat about technology!
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm break-all">shaheerchishti21@gmail.com</p>
                  <Button className="mt-4" size="sm" variant="outline" asChild>
                    <a href="mailto:shaheerchishti21@gmail.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">+92 326 9350061</p>
                  <Button className="mt-4" size="sm" variant="outline" asChild>
                    <a href="tel:+923269350061">Call</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Connect with me</p>
                  <Button className="mt-4" size="sm" variant="outline" asChild>
                    <a href="https://www.linkedin.com/in/shaheer-chishti/" target="_blank" rel="noopener noreferrer">
                      View Profile
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Github className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Check out my code</p>
                  <Button className="mt-4" size="sm" variant="outline" asChild>
                    <a href="https://github.com/ChishtiShaheer" target="_blank" rel="noopener noreferrer">
                      View Projects
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-800 dark:bg-slate-950 text-white">
        <div className="container mx-auto text-center">
          <p className="text-slate-300 dark:text-slate-400">
            © {currentYear ?? new Date().getFullYear()} Shaheer Chishti. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}