export const personalInfo = {
  name: "RIFATH SHIFA M",
  role: "Full-Stack Developer & UI/UX Designer",
  tagline: "Creative by design. Powerful by technology.",
  summary: "Results-driven Computer Science undergraduate at GCE Srirangam with hands-on experience building production-grade full stack applications using React.js, Flask, PostgreSQL, and WebSocket. Proven ability to ship end-to-end features — from RESTful APIs and JWT authentication to real-time messaging systems. Seeking a role where strong fundamentals and a bias for building can drive real product impact.",
  email: "rifathshifa.mr@gmail.com",
  phone: "+91 8925255239",
  linkedin: "https://linkedin.com/in/rifathshifa/",
  github: "https://github.com/rifathshifa/",
  githubCalculator: "https://github.com/rifathshifacalculator",
  resumePdf: "/Rifathshifa_resume.pdf",
  heroVideo: "/shifaportfolio.mp4",
  languages: ["English", "Tamil"]
};

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "UI/UX", href: "#uiux" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" }
];

export const skillsData = [
  {
    category: "Frontend Development",
    icon: "Layout",
    skills: [
      { name: "HTML5", level: "Expert", tag: "Markup" },
      { name: "CSS3", level: "Expert", tag: "Styling" },
      { name: "JavaScript", level: "Advanced", tag: "Core" },
      { name: "React.js", level: "Advanced", tag: "Framework" },
      { name: "Bootstrap", level: "Advanced", tag: "UI Components" },
      { name: "Tailwind CSS", level: "Advanced", tag: "Utility CSS" }
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    skills: [
      { name: "Python", level: "Advanced", tag: "Core" },
      { name: "Flask", level: "Advanced", tag: "Web Framework" },
      { name: "REST API", level: "Advanced", tag: "Architecture" },
      { name: "JWT", level: "Advanced", tag: "Security & Auth" },
      { name: "Socket.IO", level: "Advanced", tag: "Real-time" },
      { name: "WebRTC", level: "Intermediate", tag: "Media Streaming" }
    ]
  },
  {
    category: "Databases & Tools",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tag: "Relational DB" },
      { name: "MySQL", level: "Advanced", tag: "Relational DB" },
      { name: "Git & GitHub", level: "Advanced", tag: "Version Control" }
    ]
  },
  {
    category: "UI/UX & Creative",
    icon: "Figma",
    skills: [
      { name: "Figma", level: "Expert", tag: "Prototyping & Wireframing" },
      { name: "Canva", level: "Advanced", tag: "Visual Design" }
    ]
  }
];

export const projectsData = [
  {
    id: "novachat",
    name: "NovaChat",
    subtitle: "Real-Time Full Stack Chat Application",
    description: "Developed a real-time full-stack chat application with secure one-to-one messaging, voice messaging, voice and video calling, user profile management, and file sharing. Built JWT-based authentication, RESTful APIs, and WebSocket/Socket.IO for low-latency communication. Used PostgreSQL for database management and designed a responsive, user-friendly interface.",
    technologies: ["React.js", "Flask", "Socket.IO", "WebRTC", "PostgreSQL", "JWT", "REST API"],
    liveUrl: "https://nova-chat-uz5z.onrender.com",
    linkedinLive: "https://lnkd.in/gmk9AGgC",
    githubUrl: "https://github.com/rifathshifa/novachat",
    image: "/images/novachat.jpg",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator & Medical Hub",
    subtitle: "React.js Healthcare Utility Platform",
    description: "Developed a React.js-based healthcare utility application featuring BMI Calculator, Blood Pressure, Blood Sugar, Heart Rate, Calorie, Water Intake, and Sleep Cycle calculators, along with Medicine Reminder, Symptom Checker, and First Aid Guide. Designed a responsive, user-friendly interface to provide quick health insights.",
    technologies: ["React.js", "JavaScript", "CSS3", "Bootstrap", "REST API"],
    liveUrl: "https://bm-icalculator-tan.vercel.app/",
    githubUrl: "https://github.com/rifathshifa/BMIcalculator",
    image: "/images/medical_hub.jpg",
    featured: true,
    category: "Frontend & React"
  },
  {
    id: "juicely",
    name: "Juicely",
    subtitle: "Fresh Beverage Showcase & Web Application",
    description: "A refreshing & modern web application showcase for handcrafted juices and organic smoothies featuring smooth product transitions, interactive ordering interface, and vibrant warm amber aesthetics.",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    liveUrl: "https://lnkd.in/d7kp57EV",
    githubUrl: "https://github.com/rifathshifa/",
    image: "/images/juicely.jpg",
    featured: true,
    category: "UI/UX & Web"
  },
  {
    id: "tourist-website",
    name: "Tourist Website",
    subtitle: "Interactive Travel Destination Explorer",
    description: "Interactive travel and tourism destination explorer featuring curated trip itineraries, booking interfaces, location filters, and responsive visual layout.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://lnkd.in/gUUsMxs3",
    githubUrl: "https://github.com/rifathshifa/",
    image: "/images/tourist.jpg",
    featured: true,
    category: "Frontend"
  },
  {
    id: "shopping-app",
    name: "Shopping Web Application",
    subtitle: "E-Commerce Retail Platform",
    description: "E-commerce shopping platform with dynamic product listings, category filters, interactive cart state management, and seamless checkout UI.",
    technologies: ["React.js", "JavaScript", "REST API", "CSS3"],
    liveUrl: "https://lnkd.in/grDQaeNW",
    githubUrl: "https://github.com/rifathshifa/",
    image: "/images/shopping_app.jpg",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "billing-software",
    name: "Billing Software",
    subtitle: "Smart Invoicing & Business Dashboard",
    description: "Smart invoicing and billing solution for fast invoice generation, auto calculations, itemized sales tracking, and downloadable receipt records.",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    liveUrl: "https://lnkd.in/gcyR4-e2",
    githubUrl: "https://github.com/rifathshifa/",
    image: "/images/billing_software.jpg",
    featured: true,
    category: "Web App"
  },
  {
    id: "coffee-shop",
    name: "Coffee Shop",
    subtitle: "Artisan Café Landing & Menu Web App",
    description: "Aesthetic café landing page & menu web app featuring interactive ordering highlights, warm coffee ambiance UI, and responsive layout.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://lnkd.in/gPJ7pmGJ",
    githubUrl: "https://github.com/rifathshifa/",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    category: "Frontend"
  },
  {
    id: "weather-app",
    name: "Weather App",
    subtitle: "Real-Time Forecasting Tool",
    description: "Dynamic real-time weather forecasting app with location search, animated weather icons, temperature metrics, and multi-day weather breakdown.",
    technologies: ["JavaScript", "REST API", "HTML5", "CSS3"],
    liveUrl: "https://lnkd.in/gcCMrJ2Q",
    githubUrl: "https://github.com/rifathshifa/",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    category: "Web App"
  },
  {
    id: "snake-game",
    name: "Snake Game",
    subtitle: "Classic Browser Arcade Game",
    description: "Classic interactive browser Snake Game built with vanilla JavaScript, featuring high score tracking, smooth arcade grid controls, and sound toggles.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    liveUrl: "https://lnkd.in/gPSaZrcM",
    githubUrl: "https://github.com/rifathshifa/",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    category: "Games & Utilities"
  },
  {
    id: "digital-alarm",
    name: "Digital Alarm",
    subtitle: "Web Clock & Sound Alarm Manager",
    description: "Feature-rich web clock & digital alarm manager with custom alarm sound alerts, snooze functions, and live digital time display.",
    technologies: ["JavaScript", "HTML5 Audio", "CSS3"],
    liveUrl: "https://lnkd.in/gE_fAEWF",
    githubUrl: "https://github.com/rifathshifa/",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200&auto=format&fit=crop",
    featured: false,
    category: "Games & Utilities"
  }
];

export const experienceData = [
  {
    role: "Full Stack Development Intern",
    company: "ROZA Solutions",
    location: "Karaikudi",
    period: "Internship",
    description: "Built end-to-end web features for client applications using React.js and Flask. Engineered real-time communication modules utilizing WebRTC and Socket.IO for low-latency streaming and messaging.",
    skills: ["React.js", "Flask", "WebRTC", "Socket.IO", "PostgreSQL", "REST APIs"],
    highlights: [
      "Integrated Socket.IO and WebRTC for live real-time audio/video streaming and instant messaging features.",
      "Designed and deployed responsive frontend interfaces in React.js with modular component state management.",
      "Developed secure Flask RESTful backend endpoints with database queries in PostgreSQL."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Engineering (B.E) in Computer Science and Engineering",
    institution: "Government College of Engineering Srirangam, Trichy",
    period: "2023 – 2027",
    score: "Current CGPA: 8.42",
    badge: "Undergraduate Degree",
    details: "Focusing on Core Computer Science, Software Engineering, Database Systems, Web Technologies, and Full-Stack System Design."
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    institution: "Government Higher Secondary School, Anandur",
    period: "2022 – 2023",
    score: "Percentage: 87.5%",
    badge: "Higher Secondary",
    details: "Completed Higher Secondary with distinction in Mathematics, Computer Science, and Physical Sciences."
  }
];

export const certificationsData = [
  {
    title: "Fullstack Developer",
    issuer: "Professional Certification",
    category: "Full Stack Web Development",
    icon: "Code2",
    skills: ["React.js", "Flask", "PostgreSQL", "REST APIs", "JavaScript"]
  },
  {
    title: "UI/UX Designer",
    issuer: "Design & User Experience Certification",
    category: "UI/UX Design",
    icon: "Figma",
    skills: ["Figma", "User Interface", "User Experience", "Wireframing", "Prototyping"]
  },
  {
    title: "Python: Data Structures and Algorithms",
    issuer: "Computer Science Certification",
    category: "Algorithms & Logic",
    icon: "Cpu",
    skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"]
  },
  {
    title: "Oracle's Java Fundamentals",
    issuer: "Oracle Academy",
    category: "Software Engineering",
    icon: "Terminal",
    skills: ["Java Fundamentals", "Object-Oriented Programming", "Software Architecture"]
  }
];
