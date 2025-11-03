import {
  Lock,
  Send,
  Award,
  Users,
  Layers,
  Shield,
  Headphones,
} from "lucide-react";

import blog1 from "../../../public/assets/images/blog1.webp";
import blog2 from "../../../public/assets/images/blog2.webp";
import blog3 from "../../../public/assets/images/blog7.webp";
import blog4 from "../../../public/assets/images/blog4.webp";

import Devops from "../../../public/assets/images/features04 .jpg";
import Backend from "../../../public/assets/images/features05 .jpg";
import Frontend from "../../../public/assets/images/features02.jpg";
import Graphics from "../../../public/assets/images/features01.jpg";
import DataAnalysis from "../../../public/assets/images/features03 .jpg";
import Cybersecurity from "../../../public/assets/images/Backend.webp";

/* ---------------------------------- COURSES ---------------------------------- */

export const courses = [
  {
    id: 1,
    category: "UI/UX Design",
    title: "User Experience Design Fundamentals",
    instructor: "Sarah Mitchell",
    instructorImage: "/instructors/sarah.jpg",
    months: 3,
    price: 250000,
    oldPrice: 300000,
    image: Graphics,
    outline: [
      "Introduction to UI/UX Design Principles and Psychology",
      "User Research Methods: Interviews, Surveys, and Persona Development",
      "Information Architecture and Content Strategy",
      "Wireframing Techniques: Low to High Fidelity Prototypes",
      "Interactive Prototyping with Figma and Adobe XD",
      "Usability Testing and User Feedback Analysis",
      "Design Systems and Component Libraries",
      "Accessibility and Inclusive Design Practices",
      "Mobile-First and Responsive Design Approaches",
      "Portfolio Development: Real-world Client Projects",
      "Design Critique and Presentation Skills",
      "Industry Best Practices and Career Preparation",
    ],
    // SEO Metadata
    slug: "user-experience-design-fundamentals",
    metaTitle: "User Experience Design Fundamentals | AceLabview Academy",
    metaDescription:
      "Master the principles of UI/UX design with real-world projects. Learn from expert designers and create intuitive, user-centered digital experiences.",
    keywords: "UI/UX design, user experience, Figma, Adobe XD, web design",
    canonical:
      "https://acelabview.com/courses/user-experience-design-fundamentals",
  },
  {
    id: 2,
    category: "Web Development",
    title: "Backend Web Development Bootcamp",
    instructor: "Liam Garcia",
    instructorImage: "/instructors/liam.jpg",
    months: 2,
    price: 350000,
    oldPrice: 600000,
    image: DataAnalysis,
    outline: [
      "Python Programming Fundamentals and Best Practices",
      "Django Framework: Models, Views, and Templates",
      "RESTful API Development and Documentation",
      "Database Design with PostgreSQL and ORM",
      "Authentication and Authorization Systems",
      "Server Deployment and Cloud Infrastructure",
      "Performance Optimization and Caching Strategies",
      "Microservices Architecture and Containerization",
      "API Security and Vulnerability Prevention",
      "Testing and Debugging Backend Applications",
      "CI/CD Pipeline Setup and Automation",
      "Final Project: Scalable Backend System Deployment",
    ],
    slug: "backend-web-development-bootcamp",
    metaTitle: "Backend Web Development Bootcamp | AceLabview Academy",
    metaDescription:
      "Master backend development with Python, Django, and PostgreSQL. Build scalable APIs and deploy production-ready applications.",
    keywords: "python, Django, Node.js, web development, backend",
    canonical:
      "https://acelabview.com/courses/backend-web-development-bootcamp",
  },
  {
    id: 3,
    category: "Web Development",
    title: "Frontend Web Development Bootcamp",
    instructor: "Emma Wilson",
    instructorImage: "/instructors/emma.jpg",
    months: 7,
    price: 250000,
    oldPrice: 400000,
    image: Frontend,
    outline: [
      "HTML5 Semantic Markup and Web Standards",
      "CSS3: Flexbox, Grid, and Responsive Design",
      "JavaScript ES6+ Fundamentals and Modern Syntax",
      "DOM Manipulation and Event Handling",
      "React.js: Components, Hooks, and State Management",
      "Next.js Framework and Server-Side Rendering",
      "TypeScript for Large-Scale Applications",
      "State Management with Redux and Context API",
      "API Integration and Async Operations",
      "Frontend Testing with Jest and React Testing Library",
      "Performance Optimization and Code Splitting",
      "Progressive Web Apps (PWA) and Mobile Optimization",
      "Build Tools: Webpack, Vite, and Package Management",
      "Portfolio Development: Enterprise-level Projects",
    ],
    slug: "frontend-web-development-bootcamp",
    metaTitle: "Frontend Web Development Bootcamp | AceLabview Academy",
    metaDescription:
      "Become a professional frontend developer. Learn HTML, CSS, JavaScript, React, and build modern web applications from scratch.",
    keywords: "frontend, react, javascript, html, css, web development",
    canonical:
      "https://acelabview.com/courses/frontend-web-development-bootcamp",
  },
  {
    id: 4,
    category: "Cybersecurity",
    title: "Cybersecurity Bootcamp",
    instructor: "Success Chukwu",
    instructorImage: "/instructors/emma.jpg",
    months: 6,
    price: 350000,
    oldPrice: 700000,
    image: Cybersecurity,
    outline: [
      "Cybersecurity Fundamentals and Threat Landscape",
      "Network Security and Protocol Analysis",
      "Ethical Hacking Methodologies and Tools",
      "Vulnerability Assessment and Penetration Testing",
      "Cryptography and Encryption Techniques",
      "Security Information and Event Management (SIEM)",
      "Incident Response and Digital Forensics",
      "Web Application Security and OWASP Top 10",
      "Cloud Security: AWS, Azure, and GCP",
      "Identity and Access Management (IAM)",
      "Security Compliance and Regulatory Frameworks",
      "Malware Analysis and Reverse Engineering",
      "Social Engineering and Physical Security",
      "Career Preparation: Certifications and Job Readiness",
    ],
    slug: "cybersecurity-bootcamp",
    metaTitle: "Cybersecurity Bootcamp | AceLabview Academy",
    metaDescription:
      "Learn ethical hacking, network security, and threat prevention techniques to build a strong cybersecurity career.",
    keywords: "cybersecurity, ethical hacking, network security, IT security",
    canonical: "https://acelabview.com/courses/cybersecurity-bootcamp",
  },
  {
    id: 5,
    category: "DevOps & Cloud",
    title: "DevOps & Cloud Bootcamp",
    instructor: "John Stones",
    instructorImage: "/instructors/emma.jpg",
    months: 5,
    price: 350000,
    oldPrice: 650000,
    image: Devops,
    outline: [
      "Linux System Administration and Shell Scripting",
      "Containerization with Docker and Docker Compose",
      "Kubernetes: Orchestration and Cluster Management",
      "Infrastructure as Code: Terraform and CloudFormation",
      "CI/CD Pipeline Design with Jenkins and GitLab CI",
      "Cloud Platforms: AWS, Azure, and GCP Core Services",
      "Monitoring and Logging with Prometheus and ELK Stack",
      "Configuration Management with Ansible and Chef",
      "Network Security and Cloud Security Best Practices",
      "Microservices Architecture and Service Mesh",
      "Disaster Recovery and High Availability Setup",
      "Cost Optimization and Resource Management",
      "DevOps Culture and Team Collaboration Strategies",
      "Capstone Project: End-to-end DevOps Implementation",
    ],
    slug: "devops-and-cloud-bootcamp",
    metaTitle: "DevOps & Cloud Bootcamp | AceLabview Academy",
    metaDescription:
      "Master CI/CD, Docker, Kubernetes, and cloud deployment using AWS and Azure in this hands-on DevOps program.",
    keywords: "devops, cloud computing, docker, aws, kubernetes, azure",
    canonical: "https://acelabview.com/courses/devops-and-cloud-bootcamp",
  },
  {
    id: 6,
    category: "Data Analysis",
    title: "Data Analysis Bootcamp",
    instructor: "Silvesta",
    instructorImage: "/instructors/emma.jpg",
    months: 6,
    price: 350000,
    oldPrice: 500000,
    image: Backend,
    outline: [
      "Python for Data Analysis: Pandas, NumPy, and SciPy",
      "Statistical Analysis and Hypothesis Testing",
      "Data Visualization with Matplotlib, Seaborn, and Plotly",
      "SQL for Data Extraction and Database Management",
      "Power BI and Tableau for Business Intelligence",
      "Data Cleaning and Preprocessing Techniques",
      "Exploratory Data Analysis (EDA) Methodologies",
      "Machine Learning Fundamentals for Analysts",
      "Time Series Analysis and Forecasting",
      "Big Data Tools: Apache Spark and Hadoop",
      "Data Storytelling and Presentation Skills",
      "A/B Testing and Experimental Design",
      "Data Ethics and Privacy Considerations",
      "Real-world Case Studies and Industry Projects",
    ],
    slug: "data-analysis-bootcamp",
    metaTitle: "Data Analysis Bootcamp | AceLabview Academy",
    metaDescription:
      "Learn to analyze, visualize, and interpret data using Python, Excel, and Power BI. Gain job-ready data analytics skills.",
    keywords: "data analysis, python, power bi, excel, statistics",
    canonical: "https://acelabview.com/courses/data-analysis-bootcamp",
  },
];

export const values = [
  {
    title: "Excellence",
    description:
      "Delivering world-class education and certifications that meet global industry standards.",
    icon: Layers,
    color: "bg-purple-600",
  },
  {
    title: "Innovation",
    description:
      "Staying at the forefront of emerging technologies and learning methodologies.",
    icon: Shield,
    color: "bg-pink-400",
  },
  {
    title: "Empowerment",
    description:
      "Equipping students with the knowledge and skills to achieve their career goals.",
    icon: Headphones,
    color: "bg-blue-500",
  },
];

export const features = [
  "Globally Recognized Certifications",
  "Hands-On Training",
  "Expert-Led Courses",
  "Flexible Learning Options",
  "Career Placement Support",
  "Cutting-Edge Curriculum",
  "Lifetime Learning Community",
  "Master essential methodologies in your program",
];

export const featuresData = [
  {
    title: "Career Placement",
    description:
      "Benefit from our dedicated job placement services and internship opportunities to land your dream role.",
    icon: Lock,
    color: "bg-purple-600",
  },
  {
    title: "Dedicated Mentorship",
    description:
      "Receive personalized guidance and support from experienced mentors throughout your learning journey.",
    icon: Send,
    color: "bg-pink-500",
  },
  {
    title: "Globally Recognized Certifications",
    description:
      "Earn certifications that are highly valued by employers worldwide.",
    icon: Award,
    color: "bg-green-500",
  },
  {
    title: "Lifetime Learning Community",
    description:
      "Join a supportive network of peers, alumni, and mentors for ongoing professional growth.",
    icon: Users,
    color: "bg-yellow-500",
  },
];

export const testimonials = [
  {
    name: "Michael Adeyemi",
    program: "Cybersecurity Bootcamp",
    year: "Class of 2024",
    text: "AceLabview Academy transformed my career path. The hands-on cybersecurity training and personalized mentorship helped me secure a network security role in just months.",
    image: "/michael.jpg",
  },
  {
    name: "Fehintola O.",
    program: "Web development",
    year: "Class of 2024",
    text: "AceLabview Academy exceeded my expectations! The instructors were patient, skilled, and made complex topics simple to grasp. I gained confidence and practical coding skills.",
    image: "/fehintola.jpg",
  },
  {
    name: "Morris K.",
    program: "Dtat analysis",
    year: "Class of 2024",
    text: "Coming from a non-tech background, AceLabview made my transition into IT smooth. The structured learning and real-world projects made all the difference.",
    image: "/morris.jpg",
  },
];

/* ---------------------------------- BLOGS ---------------------------------- */

export const blogs = [
  {
    id: 1,
    title: "5 Simple Ways to Stay Motivated While Learning Online",
    date: "Oct 11, 2025",
    author: "Admin",
    tag: "Motivation",
    description:
      "Discover easy strategies to keep your motivation high while studying online and stay consistent with your goals.",
    image: blog1,
    featured: true,
  },
  {
    id: 2,
    title: "How to Create Effective Study Schedules for Online Courses",
    date: "Oct 08, 2025",
    author: "Admin",
    tag: "Study Tips",
    description:
      "Learn the art of organizing your online classes, assignments, and breaks efficiently to stay productive.",
    image: blog2,
  },
  {
    id: 3,
    title: "Top 10 Online Resources for Self-Directed Learners",
    date: "Oct 08, 2025",
    author: "Admin",
    tag: "Online Learning",
    description:
      "Explore the best websites and tools that make self-learning effective, enjoyable, and interactive.",
    image: blog3,
  },
  {
    id: 4,
    title: "Balancing Work and Study: Tips for Busy Professionals",
    date: "Oct 08, 2025",
    author: "Admin",
    tag: "Productivity",
    description:
      "Manage your time and energy efficiently while working and studying online with practical strategies.",
    image: blog4,
  },
];

export const techBlogs = [
  {
    id: 101,
    title: "The Rise of Everyday Tech: How Innovation Shapes Our Lives",
    author: "Tech Insights",
    date: "October 18, 2025",
    tag: "Innovation",
    description:
      "From smart wearables to AI-driven shopping recommendations, technology has quietly integrated into every corner of our routines. Here's how it's redefining human experiences and creativity.",
    image: blog3,
    featured: true,
  },
  {
    id: 102,
    title: "Why Artificial Intelligence Is Becoming Your New Daily Assistant",
    author: "Ava Johnson",
    date: "October 10, 2025",
    tag: "AI & Life",
    description:
      "AI isn’t the future—it’s the present. From fitness trackers that predict your stress to smart homes that anticipate your mood, AI is learning to adapt to human emotion and needs.",
    image: blog4,
    featured: false,
  },
  {
    id: 103,
    title: "Digital Wellbeing: Staying Human in a Hyperconnected World",
    author: "Liam Chen",
    date: "September 29, 2025",
    tag: "Mindful Tech",
    description:
      "The more we connect online, the more important it becomes to protect our mental space. Discover habits and tools for maintaining balance in the digital era.",
    image: blog2,
    featured: false,
  },
];

export const selection = [
  "Data Analysis Bootcamp",
  "User Experience Design Fundamentals",
  "Cybersecurity Bootcamp",
  "Backend Web Development Bootcampt",
  "DevOps & Cloud Bootcamp",
  "Introduction to Graphic Design",
  "Digital Marketing",
  "Software Engineering",
  "Frontend Web Development Bootcamp",
];
