"use client"

import { useState, useEffect, forwardRef, createContext, useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Custom Icon Components
const ChevronRight = ({ className = "h-4 w-4" }) => (
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
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const Trophy = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
)

const Users = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const ArrowRight = ({ className = "h-4 w-4" }) => (
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
    className={className}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const Menu = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
)

const X = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const Instagram = ({ className = "h-5 w-5" }) => (
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
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const Twitter = ({ className = "h-5 w-5" }) => (
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
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const Facebook = ({ className = "h-5 w-5" }) => (
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
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const Mail = ({ className = "h-5 w-5" }) => (
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
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const Brain = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
)

const Heart = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
)

const Clock = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

const Dumbbell = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="m6.5 6.5 11 11" />
    <path d="m21 21-1-1" />
    <path d="m3 3 1 1" />
    <path d="m18 22 4-4" />
    <path d="m2 6 4-4" />
    <path d="m3 10 7-7" />
    <path d="m14 21 7-7" />
  </svg>
)

const Smile = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" x2="9.01" y1="9" y2="9" />
    <line x1="15" x2="15.01" y1="9" y2="9" />
  </svg>
)

const BookOpen = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
)

const ArrowUpRight = ({ className = "h-4 w-4" }) => (
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
    className={className}
  >
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
)

const Quote = ({ className = "h-6 w-6" }) => (
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
    className={className}
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
)

const Star = ({ className = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

// Custom UI Components Implementation
// Button Component
const Button = forwardRef(({ className, variant = "default", size = "default", children, ...props }, ref) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-green-500 text-white shadow hover:bg-green-600",
    outline: "border border-green-500 text-green-500 bg-transparent hover:bg-green-50",
    link: "text-green-500 underline-offset-4 hover:underline p-0 h-auto font-medium",
  }

  const sizes = {
    default: "h-9 px-4 py-2 text-sm",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8 text-base",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} ref={ref} {...props}>
      {children}
    </button>
  )
})
Button.displayName = "Button"

// Dialog Components
const DialogContext = createContext({})

const Dialog = ({ children, open, onOpenChange }) => {
  return <DialogContext.Provider value={{ open, onOpenChange }}>{children}</DialogContext.Provider>
}

const DialogContent = ({ children, className = "", ...props }) => {
  const { open, onOpenChange } = useContext(DialogContext)

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={() => onOpenChange(false)}
    >
      <div
        className={`bg-white rounded-lg shadow-lg max-w-md w-full mx-4 p-6 ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

const DialogHeader = ({ children, className = "", ...props }) => (
  <div className={`mb-4 ${className}`} {...props}>
    {children}
  </div>
)

const DialogTitle = ({ children, className = "", ...props }) => (
  <h3 className={`text-lg font-semibold ${className}`} {...props}>
    {children}
  </h3>
)

const DialogDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-gray-500 ${className}`} {...props}>
    {children}
  </p>
)

const DialogFooter = ({ children, className = "", ...props }) => (
  <div className={`flex justify-end space-x-2 mt-4 ${className}`} {...props}>
    {children}
  </div>
)

// Input Component
const Input = forwardRef(({ className = "", ...props }, ref) => (
  <input
    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    ref={ref}
    {...props}
  />
))
Input.displayName = "Input"

// Label Component
const Label = forwardRef(({ className = "", ...props }, ref) => (
  <label
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    ref={ref}
    {...props}
  />
))
Label.displayName = "Label"

// Main Component
export default function Home() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [loginType, setLoginType] = useState("student")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [typedText, setTypedText] = useState("")
  const fullText = "Game"

  // Typing effect for "Game" text
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [typedText, fullText])

  // Reset typing effect when component mounts
  useEffect(() => {
    setTypedText("")
    // Start typing after a delay
    const timeout = setTimeout(() => {
      setTypedText("G")
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])

  // Hero slider images
  const heroSlides = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Football match on college field",
      title: "Football",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Cycling race with athletes in action",
      title: "Cycling",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
      alt: "Students playing volleyball",
      title: "Volleyball",
    },
  ]

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  // Sports benefits data
  const sportsBenefits = [
    {
      id: 1,
      icon: <Brain className="h-8 w-8 text-green-500" />,
      title: "Mental Health",
      description: "Sports improve concentration, reduce stress and anxiety, and boost overall mental wellbeing.",
    },
    {
      id: 2,
      icon: <Heart className="h-8 w-8 text-green-500" />,
      title: "Physical Fitness",
      description:
        "Regular sports activity strengthens your heart, improves stamina, and helps maintain a healthy weight.",
    },
    {
      id: 3,
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Social Skills",
      description: "Team sports build communication skills, foster friendships, and develop leadership abilities.",
    },
    {
      id: 4,
      icon: <Dumbbell className="h-8 w-8 text-green-500" />,
      title: "Discipline",
      description: "Sports teach time management, goal setting, and the value of consistent practice.",
    },
    {
      id: 5,
      icon: <Smile className="h-8 w-8 text-green-500" />,
      title: "Confidence",
      description: "Achieving sports goals builds self-esteem and creates a positive self-image.",
    },
    {
      id: 6,
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: "Longevity",
      description: "Active individuals tend to live longer, healthier lives with fewer chronic health issues.",
    },
  ]

  // Sports tips data
  const sportsTips = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=600",
      title: "Proper Hydration Techniques",
      excerpt: "Learn how to stay properly hydrated before, during, and after intense sports activities.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=600",
      title: "Injury Prevention Strategies",
      excerpt: "Discover the most effective warm-up routines and techniques to prevent common sports injuries.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=600",
      title: "Nutrition for Athletes",
      excerpt: "Fuel your performance with the right balance of nutrients for optimal athletic performance.",
    },
  ]

  // Gallery images - using Unsplash sports images
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Basketball players in action",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Football match on college field",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
      alt: "Cricket players celebrating",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80",
      alt: "Students playing volleyball",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1599474401061-961d4a71b452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Table tennis tournament",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80",
      alt: "College athletics event",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      quote:
        "Sports have completely transformed my college experience. I've made lifelong friends and learned valuable leadership skills.",
      name: "Rahul Sharma",
      role: "Basketball Team Captain",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      quote:
        "Being part of the college cricket team taught me discipline and time management that has helped me excel academically too.",
      name: "Priya Patel",
      role: "Cricket Team Member",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      quote:
        "The coaching staff at Zeal College has been instrumental in developing my athletic abilities and confidence.",
      name: "Arjun Singh",
      role: "Football Player",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Trophy className="h-8 w-8 text-green-500 mr-2" />
              <span className="text-2xl font-bold text-green-500">Sportyfy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors relative group">
                Sport
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
              <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors relative group">
                News
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full"></span>
              </a>
            </nav>

            {/* Login Buttons */}
            <div className="hidden md:flex space-x-4">
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white shadow-md transition-all hover:shadow-lg"
                onClick={() => {
                  setLoginType("student")
                  setIsLoginOpen(true)
                }}
              >
                Student
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-50 shadow-sm transition-all hover:shadow-md"
                onClick={() => {
                  setLoginType("admin")
                  setIsLoginOpen(true)
                }}
              >
                Admin
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-green-50 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6 text-green-800" /> : <Menu className="h-6 w-6 text-green-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-green-100 py-4"
          >
            <div className="container mx-auto px-4">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors">
                  Home
                </a>
                <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors">
                  About
                </a>
                <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors">
                  Sport
                </a>
                <a href="#" className="text-green-800 font-medium hover:text-green-500 transition-colors">
                  News
                </a>
                <div className="flex space-x-4 pt-2">
                  <Button
                    size="sm"
                    className="bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => {
                      setLoginType("student")
                      setIsLoginOpen(true)
                      setMobileMenuOpen(false)
                    }}
                  >
                    Student Login
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-50"
                    onClick={() => {
                      setLoginType("admin")
                      setIsLoginOpen(true)
                      setMobileMenuOpen(false)
                    }}
                  >
                    Admin Login
                  </Button>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section with Image Slider */}
      <section className="relative">
        <div className="relative h-[85vh] w-full overflow-hidden">
          {/* Image Slider */}
          <div className="absolute inset-0">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0"
              >
                <Image
                  src={heroSlides[currentSlide].src || "/placeholder.svg"}
                  alt={heroSlides[currentSlide].alt}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-800/70 to-green-700/30"></div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Navigation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-white w-8" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 md:px-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl text-white"
              >
                <div className="inline-block px-3 py-1 mb-4 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-500/30">
                  <span className="text-green-100 font-medium">{heroSlides[currentSlide].title}</span>
                </div>
                <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                  Elevate Your{" "}
                  <span className="text-green-300 relative inline-block">
                    {typedText}
                    <span className="animate-blink ml-0.5 inline-block h-10 w-1 bg-green-300"></span>
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1.5 bg-green-300 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: typedText.length ? "100%" : "0%" }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    ></motion.span>
                  </span>
                </h1>
                <p className="mb-8 text-lg md:text-xl text-green-50 max-w-md">
                  Join Zeal College's premier sports platform. Track matches, celebrate victories, and be part of our
                  thriving sports community.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    onClick={() => {
                      setLoginType("student")
                      setIsLoginOpen(true)
                    }}
                  >
                    Get Started <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 right-8 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="flex flex-col items-center text-white">
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1">
                <motion.div
                  className="w-1.5 h-1.5 bg-white rounded-full"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
            </div>
          </motion.div>

          {/* Trophy Icon */}
          <motion.div className="absolute bottom-8 left-8 z-10" animate={pulseAnimation}>
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full border border-white/30">
              <Trophy className="h-8 w-8 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 bg-green-100 px-4 py-1.5 rounded-full">
              <span className="text-green-700 font-medium">Our Features</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-4">
              What We Offer
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-green-700">
              Sportyfy brings you the complete college sports experience with these amazing features
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1459865264687-595d652de67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="Live scores feature"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Live Match Updates</h3>
                <p className="text-green-700 mb-4">
                  Get real-time scores and updates for all college sports events as they happen.
                </p>
                <Button variant="link" className="text-green-500 p-0 h-auto font-medium group-hover:underline">
                  Coming Soon <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560272564-c83b66b1ad12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80"
                  alt="Match history feature"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Complete Match History</h3>
                <p className="text-green-700 mb-4">
                  Access archives of past games, statistics, and memorable sporting moments.
                </p>
                <Button variant="link" className="text-green-500 p-0 h-auto font-medium group-hover:underline">
                  Coming Soon <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                  alt="Sports news feature"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-green-800 mb-2">Sports News & Updates</h3>
                <p className="text-green-700 mb-4">
                  Stay informed with the latest news, announcements, and upcoming events.
                </p>
                <Button variant="link" className="text-green-500 p-0 h-auto font-medium group-hover:underline">
                  Coming Soon <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits of Sports Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 bg-green-100 px-4 py-1.5 rounded-full">
              <span className="text-green-700 font-medium">Why Sports Matter</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-4">
              Benefits of Sports
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-green-700">
              Discover how participating in sports can transform your college experience and life
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportsBenefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:border-green-300 transition-colors"
              >
                <div className="rounded-full bg-green-100 w-16 h-16 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">{benefit.title}</h3>
                <p className="text-green-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* College Sports Gallery */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block mb-4 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm"
            >
              <span className="text-green-100 font-medium">Our Gallery</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-4">
              Our College Sports in Action
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-green-200">
              Capturing the excitement, teamwork, and joy of sports at Zeal College
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className={`overflow-hidden rounded-lg ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
              >
                <div className={`relative ${index === 0 ? "h-96" : "h-64"} w-full overflow-hidden group`}>
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-block rounded-full bg-green-100 p-2 mb-4">
              <BookOpen className="h-6 w-6 text-green-500" />
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-4">
              Sports Tips & Advice
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-green-700">
              Expert guidance to help you improve your performance and enjoy sports safely
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {sportsTips.map((tip) => (
              <motion.div
                key={tip.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 group"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={tip.image || "/placeholder.svg"}
                    alt={tip.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{tip.title}</h3>
                  <p className="text-green-700 mb-4">{tip.excerpt}</p>
                  <Button className="bg-green-500 hover:bg-green-600 text-white shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                    Read More <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 bg-green-100 px-4 py-1.5 rounded-full">
              <span className="text-green-700 font-medium">Testimonials</span>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl font-bold text-green-800 mb-4">
              What People Say About Sport
            </motion.h2>
            <motion.p variants={itemVariants} className="max-w-2xl mx-auto text-green-700">
              Hear from our community about how sports have impacted their lives
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 p-6"
              >
                <div className="flex justify-center mb-4">
                  <Quote className="h-10 w-10 text-green-500/20" />
                </div>
                <p className="text-green-800 mb-6 text-center italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center flex-col text-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-green-500">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-green-800">{testimonial.name}</h4>
                  <p className="text-green-600 text-sm">{testimonial.role}</p>
                  <div className="flex mt-2 text-yellow-500">
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div animate={pulseAnimation} className="inline-block rounded-full bg-green-200 p-3 mb-6">
              <Trophy className="h-10 w-10 text-green-500" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Ready to Join Our Sports Community?</h2>
            <p className="text-lg text-green-700 mb-8 max-w-2xl mx-auto">
              Be part of Zeal College's vibrant sports ecosystem. Get access to exclusive content, match updates, and
              connect with fellow sports enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                onClick={() => {
                  setLoginType("student")
                  setIsLoginOpen(true)
                }}
              >
                Join Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Login Dialog */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{loginType === "student" ? "Student Login" : "Admin Login"}</DialogTitle>
            <DialogDescription>
              {loginType === "student" ? "Access sports content and updates" : "Manage sports data and events"}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder={`${loginType}@zealcollege.edu`}
                className="focus:border-green-500 focus:ring-green-500"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="focus:border-green-500 focus:ring-green-500" />
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button variant="outline" onClick={() => setIsLoginOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-green-500 hover:bg-green-600 shadow-md hover:shadow-lg transition-all">
              Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Trophy className="h-8 w-8 text-green-300 mr-2" />
                <span className="text-2xl font-bold text-green-300">Sportyfy</span>
              </div>
              <p className="text-green-200 mb-4">
                The ultimate platform for college sports updates, bringing the excitement of every match to your
                fingertips.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-green-300 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-green-300 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-green-300 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-green-200 hover:text-green-300 transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-300">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Sport
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-300">Sports</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Basketball
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Football
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cricket
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Volleyball
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-green-300 transition-colors inline-flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Table Tennis
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-300">Contact</h3>
              <address className="not-italic text-green-200">
                <p>Zeal College of Engineering</p>
                <p>123 College Road</p>
                <p>Pune, Maharashtra</p>
                <p className="mt-2">Email: info@zealcollege.edu</p>
                <p>Phone: +91 1234567890</p>
              </address>
            </div>
          </div>

          <div className="border-t border-green-700 mt-8 pt-8 text-center text-green-200">
            <p>© {new Date().getFullYear()} Sportyfy. All rights reserved.</p>
            <p className="mt-2 text-sm">Designed and developed for Zeal College</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
