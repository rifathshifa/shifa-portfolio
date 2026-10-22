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
  { name: "Experience", href: "#experience" },
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
    id: "titan",
    name: "TITAN",
    subtitle: "Horology Showcase — Art of Time",
    description: "Problem: luxury watches need cinematic presentation. Built a Vite showcase with rich visuals and smooth motion for horological storytelling.",
    technologies: ["React.js", "Vite", "CSS3"],
    liveUrl: "https://titan-lake.vercel.app",
    githubUrl: "https://github.com/rifathshifa/titan",
    image: "/images/titan.jpg",
    featured: true,
    category: "UI/UX & Web"
  },
  {
    id: "juicely",
    name: "Juicely",
    subtitle: "Fresh Beverage Showcase & Web Application",
    description: "Problem: local juice brands needed a vibrant online menu. Built a fast showcase with smooth product transitions and an interactive ordering UI in warm amber aesthetics.",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI/UX Design"],
    liveUrl: "https://juicely-e-commerce-p-fvy8.bolt.host/",
    githubUrl: "https://github.com/rifathshifa/fruitjuice",
    image: "/images/juicely.jpg",
    featured: true,
    category: "UI/UX & Web"
  },
  {
    id: "novachat",
    name: "NovaChat",
    subtitle: "Real-Time Full Stack Chat Application",
    description: "Problem: teams needed secure low-latency chat with calls. Built one-to-one messaging, voice messages, voice/video calls, file sharing, JWT auth, REST APIs, and Socket.IO + WebRTC. PostgreSQL-backed with responsive UI.",
    technologies: ["React.js", "Flask", "Socket.IO", "WebRTC", "PostgreSQL", "JWT", "REST API"],
    liveUrl: "https://nova-chat-uz5z.onrender.com",
    linkedinLive: "https://lnkd.in/gmk9AGgC",
    githubUrl: "https://github.com/rifathshifa/novachat",
    image: "/images/novachat.jpg",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "equipx",
    name: "EquipX",
    subtitle: "Lab Equipment Management with QR Tracking",
    description: "Problem: labs double-booked equipment with no tracking. Built deterministic conflict-free bookings, QR passport tracking, live inventory, and event calendar with Next.js + Prisma.",
    technologies: ["Next.js", "Prisma", "QR", "Vercel"],
    liveUrl: "https://hackathon-ashen-phi.vercel.app",
    githubUrl: "https://github.com/rifathshifa/hackathon",
    image: "/images/equipx.jpg",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "zayans-trust",
    name: "Zayan's Trust",
    subtitle: "Charitable Trust Website",
    description: "Problem: a trust needed a credible online presence. Built a React + Vite site with programs, gallery, and contact flows, deployed on Vercel.",
    technologies: ["React.js", "Vite", "Tailwind CSS"],
    liveUrl: "https://zayans-trust.vercel.app",
    githubUrl: "https://github.com/rifathshifa/zayans-trust",
    image: "/images/zayans_trust.jpg",
    featured: true,
    category: "Frontend & React"
  },
  {
    id: "tourist-website",
    name: "Tourist Website",
    subtitle: "Interactive Travel Destination Explorer",
    description: "Problem: travelers struggled to compare itineraries. Built a curated explorer with trip itineraries, booking UI, and location filters in a fully responsive layout.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    liveUrl: "https://touristapp-60064450750.development.catalystserverless.in/app/index.html",
    githubUrl: "",
    image: "/images/tourist.jpg",
    featured: true,
    category: "Frontend"
  },
  {
    id: "bmi-calculator",
    name: "BMI Calculator & Medical Hub",
    subtitle: "React.js Healthcare Utility Platform",
    description: "Problem: quick health checks were scattered. Built BMI, BP, sugar, heart-rate, calorie, water, and sleep calculators plus medicine reminders, symptom checker, and first-aid guide in React.",
    technologies: ["React.js", "JavaScript", "CSS3", "Bootstrap", "REST API"],
    liveUrl: "https://bm-icalculator-tan.vercel.app/",
    githubUrl: "https://github.com/rifathshifa/BMIcalculator",
    image: "/images/medical_hub.jpg",
    featured: true,
    category: "Frontend & React"
  },
  {
    id: "shopping-app",
    name: "Shopping Web Application",
    subtitle: "E-Commerce Retail Platform",
    description: "Problem: small retailers needed a simple storefront. Built dynamic listings, category filters, cart state management, and a streamlined checkout UI.",
    technologies: ["React.js", "JavaScript", "REST API", "CSS3"],
    liveUrl: "https://shopping-app-60064450750.development.catalystserverless.in/app/index.html",
    githubUrl: "https://github.com/rifathshifa/Rifath-Shifa",
    image: "/images/shopping_app.jpg",
    featured: true,
    category: "Full Stack"
  },
  {
    id: "billing-software",
    name: "Billing Software",
    subtitle: "Smart Invoicing & Business Dashboard",
    description: "Problem: shops wasted time on manual bills. Built instant invoice generation with auto calculations, itemized tracking, and downloadable receipts using LocalStorage.",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    liveUrl: "https://billing-software-60064450750.development.catalystserverless.in/app/index.html",
    githubUrl: "https://github.com/rifathshifa/Rifath-Shifa",
    image: "/images/billing_software.jpg",
    featured: false,
    category: "Web App"
  },
  {
    id: "coffee-shop",
    name: "Coffee Shop",
    subtitle: "Artisan Café Landing & Menu Web App",
    description: "Problem: cafés needed an inviting online menu. Built an aesthetic landing page with ordering highlights and warm coffee-toned responsive UI.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://coffeeshop-60064450750.development.catalystserverless.in/app/index.html",
    githubUrl: "",
    image: "/images/coffee_shop.jpg",
    featured: false,
    category: "Frontend"
  },
  {
    id: "weather-app",
    name: "Weather App",
    subtitle: "Real-Time Forecasting Tool",
    description: "Problem: quick weather checks felt cluttered. Built a focused forecast tool with location search, animated icons, and multi-day breakdown via REST API.",
    technologies: ["JavaScript", "REST API", "HTML5", "CSS3"],
    liveUrl: "https://weather-app-60064450750.development.catalystserverless.in/app/index.html",
    githubUrl: "",
    image: "/images/weather_app.jpg",
    featured: false,
    category: "Web App"
  },
  {
    id: "snake-game",
    name: "Snake Game",
    subtitle: "Classic Browser Arcade Game",
    description: "Problem: learning canvas needed a fun target. Built a vanilla-JS Snake game with high-score tracking, smooth grid controls, and sound toggle.",
    technologies: ["JavaScript", "HTML5 Canvas", "CSS3"],
    liveUrl: "https://snakegame-one-omega.vercel.app/",
    githubUrl: "",
    image: "/images/snake_game.jpg",
    featured: false,
    category: "Games & Utilities"
  },
  {
    id: "digital-alarm",
    name: "Digital Alarm",
    subtitle: "Web Clock & Sound Alarm Manager",
    description: "Problem: browser clocks lacked alarm control. Built a clock manager with custom sounds, snooze, and live digital display using HTML Audio.",
    technologies: ["JavaScript", "HTML5 Audio", "CSS3"],
    liveUrl: "https://digital-alarm-60064450750.development.catalystserverless.in/app/index.html",
    githubUrl: "",
    image: "/images/digital_alarm.jpg",
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
    details: "Completed Higher Secondary with Distinction in Mathematics, Physics, Chemistry and Biology."
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
