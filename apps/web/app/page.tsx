import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Code, Globe, Database, Rocket, Server, Sparkles, Zap, Terminal, Braces, Send, Bot, Cloud } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/90 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Braces className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold">JSisques</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Services
            </Link>
            <Link href="#expertise" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Expertise
            </Link>
            <Link href="#process" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Process
            </Link>
            <Link href="#tech" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Tech Stack
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-400 transition-colors hover:text-white">
              Contact
            </Link>
          </nav>
          <div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Let's Talk</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-slate-800 relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent blur-[120px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <Badge className="w-fit bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-none">
                  Software Developer
                </Badge>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Transforming Ideas Into Powerful Digital Solutions ✨
                  </h1>
                  <p className="max-w-[600px] text-slate-400 md:text-xl">
                    Expert software development tailored to your business needs. Modern, scalable, and user-focused
                    applications built with precision.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white group">
                    <span>View Portfolio</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-800 text-white hover:bg-slate-800 group">
                    <span>Book a Consultation</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="relative mx-auto aspect-square w-full max-w-[500px] lg:order-last">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 blur-[100px]"></div>
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  width={550}
                  height={550}
                  alt="Hero Image"
                  className="relative z-10 mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 border-b border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-none">Services 🚀</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Specialized Development Solutions
                  </span>
                </h2>
                <p className="max-w-[700px] text-slate-400 md:text-xl">
                  Focused expertise to transform your ideas into powerful digital products.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <Card className="bg-slate-900 border-slate-800 text-white h-[280px] flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 group">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Server className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    API Creation
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-400">
                    Robust, scalable APIs that connect systems seamlessly. RESTful, GraphQL, and WebSocket
                    implementations with comprehensive documentation.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400 text-sm">Secure • Scalable • Documented</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-800 text-white h-[280px] flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 group">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-400">
                    Modern, responsive web applications built with cutting-edge technologies. Performance-focused and
                    user-centric design approach.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400 text-sm">Responsive • Fast • Accessible</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-800 text-white h-[280px] flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 group">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    Automation Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-400">
                    Intelligent automation solutions powered by AI and modern technologies. Streamline workflows and
                    enhance productivity with custom tools.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400 text-sm">AI-Powered • Efficient • Custom</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-900 border-slate-800 text-white h-[280px] flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10 group">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors" />
                    Cloud Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-slate-400">
                    Expertly designed cloud solutions for optimal performance, security, and cost-efficiency. Seamless
                    deployment and management of your applications.
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-blue-400 text-sm">Scalable • Secure • Optimized</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="w-full py-12 md:py-24 lg:py-32 border-b border-slate-800 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-0 h-[300px] w-[300px] bg-gradient-to-tl from-blue-500/20 to-transparent blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-none">Expertise 💯</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Why Work With Me
                  </span>
                </h2>
                <p className="max-w-[700px] text-slate-400 md:text-xl">
                  Technical excellence combined with business acumen to deliver solutions that matter.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Zap className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Rapid Delivery ⚡</h3>
                <p className="text-center text-slate-400">
                  Efficient development cycles with continuous delivery to meet your deadlines without compromising
                  quality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Terminal className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Clean Code 🧹</h3>
                <p className="text-center text-slate-400">
                  Maintainable, well-documented code with comprehensive testing to ensure reliability and performance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Rocket className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Future-Proof 📈</h3>
                <p className="text-center text-slate-400">
                  Solutions designed to scale and evolve with your business, from MVP to enterprise-grade applications.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Database className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Data-Driven 📊</h3>
                <p className="text-center text-slate-400">
                  Leverage the power of data with intelligent analytics and insights that drive business decisions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Code className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Tailored Approach 🧩</h3>
                <p className="text-center text-slate-400">
                  Custom development that addresses your specific challenges rather than one-size-fits-all solutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm h-full transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="rounded-full bg-blue-500/10 p-3">
                  <Sparkles className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Direct Collaboration 🤝</h3>
                <p className="text-center text-slate-400">
                  Work directly with the developer—no middlemen, clear communication, and faster iterations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="w-full py-12 md:py-24 lg:py-32 border-b border-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-none">Process 🔄</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    My Development Workflow
                  </span>
                </h2>
                <p className="max-w-[700px] text-slate-400 md:text-xl">
                  A streamlined approach focused on efficiency, transparency, and results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 py-12">
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:to-cyan-500/50 after:absolute after:left-[-4px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-blue-500">
                <h3 className="text-xl font-bold text-white">Discovery 🔍</h3>
                <p className="mt-2 text-slate-400">
                  Understanding your business goals, technical requirements, and project scope to create a targeted
                  development plan.
                </p>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-500/50 before:to-cyan-500/50 after:absolute after:left-[-4px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-blue-500">
                <h3 className="text-xl font-bold text-white">Architecture 📐</h3>
                <p className="mt-2 text-slate-400">
                  Designing the technical blueprint and system architecture that will guide the development process.
                </p>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-blue-500/30 before:to-cyan-500/70 after:absolute after:left-[-4px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-cyan-500">
                <h3 className="text-xl font-bold text-white">Development 👨‍💻</h3>
                <p className="mt-2 text-slate-400">
                  Agile implementation with regular check-ins, iterative development, and continuous testing to ensure
                  quality.
                </p>
              </div>
              <div className="relative pl-8 before:absolute before:left-0 before:top-1 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan-500/70 before:to-cyan-500 after:absolute after:left-[-4px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-cyan-500">
                <h3 className="text-xl font-bold text-white">Deployment 🚀</h3>
                <p className="mt-2 text-slate-400">
                  Smooth launch with comprehensive documentation, knowledge transfer, and production-ready
                  implementation.
                </p>
              </div>
              <div className="relative pl-8 after:absolute after:left-[-4px] after:top-1 after:h-2 after:w-2 after:rounded-full after:bg-cyan-500">
                <h3 className="text-xl font-bold text-white">Support 🌱</h3>
                <p className="mt-2 text-slate-400">
                  Ongoing maintenance, performance monitoring, and iterative improvements to ensure long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="w-full py-12 md:py-24 lg:py-32 border-b border-slate-800 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-0 h-[300px] w-[300px] bg-gradient-to-br from-blue-500/20 to-transparent blur-[100px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-none">Tech Stack 💻</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Cutting-Edge Technologies
                  </span>
                </h2>
                <p className="max-w-[700px] text-slate-400 md:text-xl">
                  Modern tools and frameworks I use to build powerful, scalable applications.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">⚛️</div>
                <p className="font-medium text-white">React</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">🔼</div>
                <p className="font-medium text-white">Next.js</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">📊</div>
                <p className="font-medium text-white">GraphQL</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">🎨</div>
                <p className="font-medium text-white">Tailwind</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">🔄</div>
                <p className="font-medium text-white">Node.js</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">⚡</div>
                <p className="font-medium text-white">Supabase</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">☁️</div>
                <p className="font-medium text-white">AWS/Azure</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/10">
                <div className="text-3xl">🤖</div>
                <p className="font-medium text-white">AI/ML Tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 -z-10">
            <div className="absolute bottom-0 right-0 left-0 h-[400px] bg-gradient-to-t from-blue-500/20 via-cyan-500/10 to-transparent blur-[120px]"></div>
          </div>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 border-none">Get In Touch 📬</Badge>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    Let's Build Something Amazing Together
                  </span>
                </h2>
                <p className="max-w-[700px] text-slate-400 md:text-xl">
                  Reach out to discuss your project or book a consultation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-400">
                        Name
                      </label>
                      <Input id="name" placeholder="Your name" className="bg-slate-800 border-slate-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-400">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="bg-slate-800 border-slate-700 text-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-400">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry"
                      className="bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-400">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project"
                      className="min-h-[120px] bg-slate-800 border-slate-700 text-white"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white group">
                    <Send className="mr-2 h-4 w-4" />
                    <span>Send Message</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Button>
                </form>
              </div>
              <div className="rounded-lg border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-4">Book a Consultation</h3>
                <div className="aspect-video w-full rounded-lg border border-slate-800 bg-slate-900/50 p-4 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md border border-dashed border-slate-800 p-6 text-center hover:border-blue-500/30 transition-all duration-300">
                    <div className="rounded-full bg-blue-500/10 p-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-blue-500"
                      >
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                        <line x1="16" x2="16" y1="2" y2="6" />
                        <line x1="8" x2="8" y1="2" y2="6" />
                        <line x1="3" x2="21" y1="10" y2="10" />
                        <path d="M8 14h.01" />
                        <path d="M12 14h.01" />
                        <path d="M16 14h.01" />
                        <path d="M8 18h.01" />
                        <path d="M12 18h.01" />
                        <path d="M16 18h.01" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-medium text-white">Calendly Integration</h4>
                      <p className="text-slate-400">
                        Schedule a 30-minute consultation call at a time that works for you.
                      </p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white group">
                      <span>Book a Time Slot</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-blue-500/10 p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Phone</h4>
                      <p className="text-xs text-slate-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-blue-500/10 p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-500"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Email</h4>
                      <p className="text-xs text-slate-400">contact@jsisques.dev</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full bg-blue-500/10 p-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-blue-500"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-white">Location</h4>
                      <p className="text-xs text-slate-400">Remote - Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Braces className="h-5 w-5 text-blue-500" />
              <span className="text-lg font-bold text-white">JSisques</span>
            </div>
            <p className="text-sm text-slate-400">Building digital solutions that make an impact.</p>
          </div>
          <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="grid gap-3 text-sm">
              <h3 className="font-medium text-white">Services</h3>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                API Development
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                Web Development
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                Automation Services
              </Link>
            </div>
            <div className="grid gap-3 text-sm">
              <h3 className="font-medium text-white">Connect</h3>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                GitHub
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                LinkedIn
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                Twitter
              </Link>
            </div>
            <div className="grid gap-3 text-sm">
              <h3 className="font-medium text-white">Legal</h3>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                Terms
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                Contact
              </Link>
            </div>
          </nav>
        </div>
        <div className="border-t border-slate-800 py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-slate-400 md:text-left">
              © {new Date().getFullYear()} JSisques. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
              <Link href="#" className="text-slate-400 transition-colors hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

