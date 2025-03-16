"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Instagram,
  Twitter,
  Github,
  Linkedin,
  ArrowRight,
  Menu,
  X,
  Send,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 1. Add smooth scrolling behavior to the document
  // Add this useEffect hook right after the existing useEffect for scroll handling

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#0e0e10] text-white overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff4d4d]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4d79ff]/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0e0e10]/80 backdrop-blur-md py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#ff4d4d] to-[#4d79ff] rounded-lg flex items-center justify-center">
              <span className="font-bold text-xl">N</span>
            </div>
            <span className="font-bold text-xl">NOVA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              "Home",
              "What I Create",
              "My Journey",
              "Latest Work",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative text-sm font-medium group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* 2. Update the "Let's Talk" button to link to the contact section */}
          {/* Replace the existing Let's Talk button in the header with: */}

          <Button
            asChild
            className="hidden md:flex bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff] hover:opacity-90 transition-opacity"
          >
            <Link href="#contact">Lets Talk</Link>
          </Button>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                backgroundColor: "rgba(14, 14, 16, 0.95)",
                backdropFilter: "blur(8px)",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                padding: "1rem 0",
              }}
            >
              <div className="container mx-auto px-4 flex flex-col gap-4">
                {[
                  "Home",
                  "What I Create",
                  "My Journey",
                  "Latest Work",
                  "Contact",
                ].map((item) => (
                  <Link
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="py-2 px-4 hover:bg-white/5 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
                <Button
                  asChild
                  className="mt-2 bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff] hover:opacity-90 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href="#contact">Lets Talk</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Crafting{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]">
                    Digital
                  </span>{" "}
                  Experiences
                </h1>
                <p className="text-lg text-white/70 max-w-lg">
                  Transforming ideas into immersive digital journeys that
                  captivate, engage, and inspire action.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff] hover:opacity-90 transition-opacity text-white px-8 py-6">
                    Explore My Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {/* 4. Enhance white button styling for better visibility */}
                  {/* Replace the "Get in Touch" button in the hero section with: */}

                  <Button
                    asChild
                    variant="outline"
                    className="border-white hover:border-white/80 bg-white/10 hover:bg-white/20 text-white px-8 py-6 transition-all duration-300"
                  >
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                </div>
                <div className="pt-8 flex items-center gap-4">
                  <span className="text-sm text-white/50">Follow me on</span>
                  <div className="h-px w-12 bg-white/20"></div>
                  <div className="flex gap-4">
                    {[Instagram, Twitter, Github, Linkedin].map(
                      (Icon, index) => (
                        <div key={index} className="hover:bg-white/20">
                          <Link href="#">
                            <motion.div
                              whileHover={{ y: -5 }}
                              style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                borderRadius: "9999px",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                transition: "background-color 0.2s",
                                cursor: "pointer",
                              }}
                            >
                              <Icon size={18} />
                            </motion.div>
                          </Link>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
              {/* 7. Enhance image hover effects throughout the site */}
              {/* Replace the hero section image container with: */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: "relative",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4d]/20 to-[#4d79ff]/20 rounded-2xl transform rotate-6 transition-all duration-500 group-hover:from-[#ff4d4d]/30 group-hover:to-[#4d79ff]/30"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="Digital Creator"
                  className="relative z-10 rounded-2xl object-cover transform -rotate-6 border-4 border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20"
                />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#ff4d4d] to-[#4d79ff] rounded-full blur-[60px] transition-all duration-500 group-hover:w-48 group-hover:h-48"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What I Create Section (Replacing Services) */}
        <section id="what-i-create" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                maxWidth: "48rem",
                margin: "0 auto",
                marginBottom: "4rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Transforming Ideas into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]">
                  Digital Reality
                </span>
              </h2>
              <p className="text-white/70 text-lg">
                I specialize in creating immersive digital experiences that
                connect brands with their audience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Immersive Websites",
                  description:
                    "Crafting responsive, interactive websites that captivate users and drive engagement.",
                  icon: "🌐",
                },
                {
                  title: "Digital Experiences",
                  description:
                    "Creating memorable digital journeys that tell your brand's story in innovative ways.",
                  icon: "✨",
                },
                {
                  title: "Interactive Applications",
                  description:
                    "Developing intuitive applications that solve problems and enhance user experience.",
                  icon: "📱",
                },
                {
                  title: "Brand Identity",
                  description:
                    "Designing cohesive visual identities that communicate your brand's unique personality.",
                  icon: "🎨",
                },
                {
                  title: "Motion Design",
                  description:
                    "Bringing static designs to life with fluid animations and meaningful interactions.",
                  icon: "🎬",
                },
                {
                  title: "Digital Strategy",
                  description:
                    "Developing comprehensive digital strategies that align with your business objectives.",
                  icon: "📊",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="group hover:bg-white/10 hover:border-white/20"
                >
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{
                      display: "grid",
                      gap: "2rem",
                    }}
                  >
                    <motion.div
                      variants={item}
                      style={{
                        position: "relative",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(8px)",
                        borderRadius: "1rem",
                        padding: "2rem",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "all 0.3s",
                      }}
                    >
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-white/70">{service.description}</p>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Journey Section (Replacing About Me) */}
        <section id="my-journey" className="py-20 md:py-32 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#ff4d4d]/5 to-[#4d79ff]/5 rounded-full blur-[100px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* 8. Update the "My Journey" section image with hover effect */}
              {/* Replace the image container in the "My Journey" section with: */}

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  position: "relative",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4d]/20 to-[#4d79ff]/20 rounded-2xl transform -rotate-6 transition-all duration-500 group-hover:from-[#ff4d4d]/30 group-hover:to-[#4d79ff]/30"></div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  width={600}
                  height={600}
                  alt="My Journey"
                  className="relative z-10 rounded-2xl object-cover transform rotate-6 border-4 border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20"
                />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-[#ff4d4d] to-[#4d79ff] rounded-full blur-[60px] transition-all duration-500 group-hover:w-48 group-hover:h-48"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <h2 className="text-3xl md:text-5xl font-bold">
                  The Story Behind the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]">
                    Creation
                  </span>
                </h2>
                <p className="text-white/70 text-lg">
                  With over a decade of experience in digital creation, Ive
                  honed my craft through continuous exploration and innovation.
                </p>

                <div className="space-y-6 mt-8">
                  {[
                    {
                      year: "2023",
                      title: "Digital Experience Evolution",
                      description:
                        "Pioneered new approaches to interactive storytelling and immersive web experiences.",
                    },
                    {
                      year: "2020",
                      title: "Creative Studio Launch",
                      description:
                        "Founded a creative studio focused on digital innovation and brand transformation.",
                    },
                    {
                      year: "2017",
                      title: "International Recognition",
                      description:
                        "Received multiple awards for groundbreaking digital projects and innovative designs.",
                    },
                  ].map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        gap: "1rem",
                      }}
                    >
                      <div className="min-w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center font-bold">
                        {milestone.year}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{milestone.title}</h3>
                        <p className="text-white/70">{milestone.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 5. Update the "Full Journey" button styling */}
                {/* Replace the "Full Journey" button with: */}

                <Button
                  asChild
                  className="mt-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <Link href="#my-journey">
                    Full Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Latest Work Section */}
        <section id="latest-work" className="py-20 md:py-32 bg-[#0a0a0c]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                maxWidth: "48rem",
                margin: "0 auto",
                marginBottom: "4rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]">
                  Projects
                </span>
              </h2>
              <p className="text-white/70 text-lg">
                Explore a selection of my recent work showcasing creativity,
                innovation, and technical expertise.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Immersive Brand Experience",
                  category: "Digital Experience",
                  image: "/placeholder.svg?height=600&width=800",
                },
                {
                  title: "E-Commerce Reimagined",
                  category: "Web Development",
                  image: "/placeholder.svg?height=600&width=800",
                },
                {
                  title: "Interactive Product Showcase",
                  category: "Interactive Design",
                  image: "/placeholder.svg?height=600&width=800",
                },
                {
                  title: "Brand Identity Evolution",
                  category: "Brand Design",
                  image: "/placeholder.svg?height=600&width=800",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: "1rem",
                    height: "400px",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff4d4d]/10 to-[#4d79ff]/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-30"></div>

                  {/* Primary Image (front) */}
                  <div className="absolute inset-0 z-20 transition-all duration-700 ease-in-out group-hover:translate-y-full group-hover:opacity-0">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      width={800}
                      height={600}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Secondary Image (back) */}
                  <div className="absolute inset-0 z-10 transition-all duration-700 ease-in-out translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    <Image
                      src={`/placeholder.svg?height=600&width=800&text=Alt+${index}`}
                      width={800}
                      height={600}
                      alt={`Alternative view of ${project.title}`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-40">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-sm font-medium text-[#ff4d4d] mb-2">
                        {project.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <Button
                        asChild
                        variant="outline"
                        className="border-white/20 hover:border-white/60 bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                      >
                        <Link href="#latest-work">
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 6. Update the "View All Projects" button styling */}
            {/* Replace the "View All Projects" button with: */}

            <div className="text-center mt-12">
              <Button
                asChild
                className="bg-white/10 hover:bg-white/20 text-white px-8 border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <Link href="#latest-work">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* My Process Section */}
        <section id="my-process" className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                textAlign: "center",
                maxWidth: "48rem",
                margin: "0 auto",
                marginBottom: "4rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <h2 className="text-3xl md:text-5xl font-bold">
                How I Bring{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]">
                  Ideas to Life
                </span>
              </h2>
              <p className="text-white/70 text-lg">
                A structured yet flexible approach to creating meaningful
                digital experiences.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 transform -translate-x-1/2 hidden md:block"></div>

              {/* 9. Adjust margins in the "My Process" section for better spacing */}
              {/* Update the process items container with better spacing: */}

              <div className="space-y-24 relative">
                {[
                  {
                    number: "01",
                    title: "Discovery",
                    description:
                      "Understanding your vision, goals, and audience to establish a solid foundation for the project.",
                  },
                  {
                    number: "02",
                    title: "Strategy",
                    description:
                      "Developing a comprehensive plan that aligns with your objectives and maximizes impact.",
                  },
                  {
                    number: "03",
                    title: "Creation",
                    description:
                      "Bringing ideas to life through innovative design, development, and content creation.",
                  },
                  {
                    number: "04",
                    title: "Refinement",
                    description:
                      "Iterating and perfecting every detail to ensure an exceptional final product.",
                  },
                  {
                    number: "05",
                    title: "Launch",
                    description:
                      "Deploying your project with precision and providing ongoing support for continued success.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col ${
                      index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } items-center gap-12`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "3rem",
                      }}
                    >
                      <div className="md:w-1/2 relative group">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ff4d4d]/10 to-[#4d79ff]/10 rounded-2xl transform rotate-3 transition-all duration-500 group-hover:from-[#ff4d4d]/20 group-hover:to-[#4d79ff]/20"></div>
                        <Image
                          src={`/placeholder.svg?height=400&width=600&text=${step.title}`}
                          width={600}
                          height={400}
                          alt={step.title}
                          className="relative z-10 rounded-2xl object-cover transform -rotate-3 border border-white/10 transition-all duration-500 group-hover:scale-105 group-hover:border-white/20"
                        />
                      </div>

                      <div className="md:w-1/2 relative">
                        <div className="hidden md:block absolute left-0 top-1/2 w-6 h-6 bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff] rounded-full transform -translate-y-1/2 translate-x-[-50%]"></div>
                        <div className="space-y-6">
                          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">
                            {step.title}
                          </h3>
                          <p className="text-white/70 pl-2 border-l-2 border-white/20">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-[#0a0a0c]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <h2 className="text-3xl md:text-5xl font-bold">
                  Lets Create Something{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff]">
                    Amazing
                  </span>{" "}
                  Together
                </h2>
                <p className="text-white/70 text-lg">
                  Have a project in mind? Id love to hear about it. Lets discuss
                  how we can work together to bring your vision to life.
                </p>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-white/70">contact@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 12a9 9 0 1 1 18 0a9 9 0 0 1-18 0z"></path>
                        <polyline points="12 7 12 12 15 15"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold">Availability</h3>
                      <p className="text-white/70">
                        Monday - Friday, 9am - 5pm
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "1rem",
                  padding: "2rem",
                }}
              >
                <h3 className="text-xl font-bold mb-6">Send me a message</h3>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/80"
                    >
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md bg-white/5 border-none text-white focus:ring-2 focus:ring-[#4d79ff]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/80"
                    >
                      Your Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md bg-white/5 border-none text-white focus:ring-2 focus:ring-[#4d79ff]"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white/80"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md bg-white/5 border-none text-white focus:ring-2 focus:ring-[#4d79ff]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#ff4d4d] to-[#4d79ff] hover:opacity-90 transition-opacity">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/50">
        Copyright © 2024 - Designed &amp; Developed by Nova
      </footer>
    </div>
  );
}
