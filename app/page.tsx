import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Database, Globe } from "lucide-react"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-slate-800 dark:text-slate-100">Shaheer Chishti</h1>
            <div className="hidden md:flex space-x-6 items-center">
              <a
                href="#about"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Projects
              </a>
              <a
                href="#education"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100 transition-colors"
              >
                Contact
              </a>
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
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6">
              Computer Science Sophomore & App Developer
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Passionate about creating innovative mobile and web applications that solve real-world problems. Currently
              exploring the latest technologies in app development and software engineering.
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
                  I'm a dedicated Computer Science sophomore with a passion for development. My journey in
                  programming started with curiosity about how mobile apps work, and it has evolved into a deep interest
                  in creating user-friendly applications. Moreover, I have a keen interest in exploring the latest
                  technologies and frameworks in the software development landscape and cybersecurity.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  I enjoy working on both frontend and backend development, with a particular focus on 
                  development using modern frameworks and technologies. I'm always eager to learn new technologies and
                  take on challenging projects.
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
                        <p className="text-sm text-slate-600">Love tackling complex coding challenges</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <Smartphone className="w-8 h-8 text-green-600" />
                      <div>
                        <h3 className="font-semibold">Mobile First</h3>
                        <p className="text-sm text-slate-600">Focused on mobile app development</p>
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
                        <p className="text-sm text-slate-600">End-to-end application development</p>
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
            Skills & Technologies
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                    Mobile Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Flutter</Badge>
                    <Badge variant="secondary">Swift</Badge>
                    <Badge variant="secondary">Kotlin</Badge>
                    <Badge variant="secondary">Expo</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-600" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">HTML/CSS</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2 text-purple-600" />
                    Backend & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">Firebase</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                    <Badge variant="secondary">Git</Badge>
                    <Badge variant="secondary">REST APIs</Badge>
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
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <Image
                    src="/chessimg.jpg"
                    alt="CHESS"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 w-full h-52 object-cover"
                  />
                  <CardTitle>CHESS</CardTitle>
                  <CardDescription>
                    A 2D chess game built with basic OOP and SFML.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">SFML</Badge>
                    <Badge variant="outline">OOP</Badge>
                    <Badge variant="outline">DATA STRUCTURES</Badge>
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

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <Image
                    src="/ccimg.jpg"
                    alt="CANDY CRUSH"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 w-full h-52 object-cover"
                  />
                  <CardTitle>CANDY CRUSH</CardTitle>
                  <CardDescription>
                   A 2D candy crush game built with basic OOP and SFML.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">OOP</Badge>
                    <Badge variant="outline">SFML</Badge>
                    <Badge variant="outline">DATA STRUCTURES</Badge>
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

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col">
                  <Image
                    src="/mazerunnerimg.jpg"
                    alt="MAZE RUNNER"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 w-full h-52 object-cover"
                  />
                  <CardTitle>MAZE RUNNER</CardTitle>
                  <CardDescription>
                    A 2D Game in Assembly Language where the player navigates through a maze. 
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">ASSEMBLY</Badge>
                    <Badge variant="outline">IAPX 8088</Badge>
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
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Education</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Bachelor of Science in Computer Science</CardTitle>
                <CardDescription className="text-lg">Currently Sophomore Year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-400">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <Badge variant="outline">Data Structures & Algorithms</Badge>
                      <Badge variant="outline">Object-Oriented Programming</Badge>
                      <Badge variant="outline">Database Systems</Badge>
                      <Badge variant="outline">Software Engineering</Badge>
                      <Badge variant="outline">Web Development</Badge>
                      <Badge variant="outline">Mobile App Development</Badge>
                      <Badge variant="outline">Cybersecurity</Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-400">Academic & Extracurricular Achievements:</h4>
                    <ul className="list-disc list-inside mt-2 text-slate-600">
                      <li>Programming competition participant</li>
                      <li>SOFTEC Member</li>
                      <li>FAST sports society member</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white dark:bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-100">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
                discuss projects, internships, or just chat about technology!
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-slate-600">shaheerchishti21@gmail.com</p>
                  <Button className="mt-4" size="sm" variant="outline" asChild>
                    <a href="mailto:shaheerchishti21@gmail.com">Send Email</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Linkedin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-slate-600">Connect with me</p>
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
                  <p className="text-slate-600">Check out my code</p>
                  <Button className="mt-4" size="sm" variant="outline" asChild>
                    <a href="https://github.com/ChishtiShaheer?tab=projects" target="_blank" rel="noopener noreferrer">
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
            © {new Date().getFullYear()} Shaheer Chishti. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
