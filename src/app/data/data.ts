import { Lock, Send, Award, Users, Layers, Shield, Headphones, } from "lucide-react";
import blog1 from "../../../public/assets/images/blog1.webp";
import blog2 from "../../../public/assets/images/blog2.webp";
import blog3 from "../../../public/assets/images/blog7.webp";
import blog4 from "../../../public/assets/images/blog4.webp";
import Devops from "../../../public/assets/images/WhatsApp Image 2025-10-27 at 17.25.57.jpeg";
import Backend from "../../../public/assets/images/cybersecurity.webp";
import Cybersecurity from "../../../public/assets/images/WhatsApp Image 2025-10-27 at 17.25.56 (1).jpeg";
import Graphics from "../../../public/assets/images/features01.jpg";
import DataAnalysis from "../../../public/assets/images/WhatsApp Image 2025-10-27 at 17.25.56.jpeg";
import Frontend from "../../../public/assets/images/WhatsApp Image 2025-10-27 at 17.25.57 (1).jpeg";
import automation1 from "../../../public/assets/images/PLC1.png";
import marine1 from "../../../public/assets/images/marine1.png";
import marine2 from "../../../public/assets/images/marine2.png";
import marine3 from "../../../public/assets/images/marine3.png";
import marine4 from "../../../public/assets/images/marine4.png";
import marine5 from "../../../public/assets/images/marine5.png";
import marine7 from "../../../public/assets/images/marine7.png";
import marine8 from "../../../public/assets/images/marine8.png";
import marine9 from "../../../public/assets/images/marine9.png";
import marine10 from "../../../public/assets/images/marine10.png";
import marine12 from "../../../public/assets/images/marine12.png";
import automation2 from "../../../public/assets/images/automation2.png";
import automation3 from "../../../public/assets/images/automation3.png";
import automation4 from "../../../public/assets/images/automation 4.png";
import automation5 from "../../../public/assets/images/automation5.png";
import troubleshoot1 from "../../../public/assets/images/troubleshoot1.png";
import troubleshoot2 from "../../../public/assets/images/troubleshoot2.png";
import troubleshoot3 from "../../../public/assets/images/troubleshoot3.png";
import troubleshoot4 from "../../../public/assets/images/troubleshoot4.png";
import troubleshoot5 from "../../../public/assets/images/troubleshoot5.png";
import troubleshoot6 from "../../../public/assets/images/troubleshoot6.png";


/* ------------Tech Courses ---------*/
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
        image: Frontend,
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
        instructor: " Wisdom Chimeruchem",
        instructorImage: "/instructors/liam.jpg",
        months: 6,
        price: 300000,
        oldPrice: 600000,
        image: DataAnalysis,
        outline: [
            "Python Programming Fundamentals and Best Practices",
            "Foundations & Python Proficiency",
            "Introduction to Web & APIs",
            "Django Framework: Models, Views, and Templates",
            "RESTful API Development and Documentation",
            "Database Design with PostgreSQL and ORM",
            "Authentication and Authorization Systems",
            "Authentication & Authorization",
            "Performance Optimization and Caching Strategies",
            "Microservices Architecture and Containerization",
            "API Security and Vulnerability Prevention",
            "Testing and Debugging Backend Applications",
            "Production Readiness & Deployment",
            "CI/CD Pipeline Setup and Automation",
            "Final Project: Scalable Backend System Deployment",
        ],

        slug: "backend Web Development Bootcamp",
        metaTitle: "Backend Web Development| AceLabview Academy",
        metaDescription:
            "Master backend development with Python, Django, and PostgreSQL. Build scalable APIs and deploy production-ready applications.",
        keywords: "python, Django, Node.js, web development, backend",
        canonical:
            "https://acelabview.com/courses/backend-web-development-bootcamp"
    },
    {
        id: 3,
        category: "Web Development",
        title: "Frontend Web Development Bootcamp",
        instructor: "Godswill Emmanuel ",
        instructorImage: "/instructors/emma.jpg",
        months: 4,
        price: 250000,
        oldPrice: 400000,
        image: Graphics,
        outline: [
            "HTML5 Semantic Markup and Web Standards",
            "CSS3: Flexbox, Grid, and Responsive Design",
            "JavaScript ES6+ Fundamentals and Modern Syntax",
            "DOM Manipulation and Event Handling",
            "React.js: Components, Hooks, and State Management",
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
        price: 300000,
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
            "Incident Response and Digital Forensics (Aligned with GIAC Incident Handler (GCIH))",
            "Identity and Access Management (IAM)",
            "Security Compliance and Regulatory Frameworks",
            "Malware Analysis and Reverse Engineering",
            "Emerging Technologies and Advanced Topics (Aligned with Certified Information Systems Security Auditor (CISA))",
            "Data Protection and Recovery (Aligned with Certified Information Systems Security Professional (CISSP))",
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
        instructor: "Amadi Dominic ",
        instructorImage: "/instructors/emma.jpg",
        months: 4,
        price: 300000,
        oldPrice: 650000,
        image: Backend,
        outline: [
            "Linux System Administration and Shell Scripting",
            "Git Version Control and Collaboration Workflows",
            "Docker Containerization and Image Management",
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
        instructor: " Nneoma Pamella",
        instructorImage: "/instructors/emma.jpg",
        months: 3,
        price: 250000,
        oldPrice: 500000,
        image: Devops,
        outline: [
            "Introduction to Data and Data Analytics Overview",
            "Data Sources And Gathering Techniques",
            "Data Visualization",
            "Microsoft Excel (Data Mining And Visualization)",
            "SQL for Data Extraction and Database Management",
            "Power BI and Tableau for Business Intelligence",
            "Data Cleaning and Preprocessing Techniques",
            "Exploratory Data Analysis (EDA) Methodologies",
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

export const testimonialImages = [
    { id: 1, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901426/12_johdft.png', alt: "Testimonial 1" },
    { id: 2, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901426/13_fppi0s.png', alt: "Testimonial 2" },
    { id: 3, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901422/7_kjzxo0.png', alt: "Testimonial 3" },
    { id: 4, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901421/9_alho7s.png', alt: "Testimonial 4" },
    { id: 5, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901421/10_a2qjjq.png', alt: "Testimonial 5" },
    { id: 6, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901420/6_yd1qgr.png', alt: "Testimonial 6" },
    { id: 7, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901420/5_twe1rp.png', alt: "Testimonial 7" },
    { id: 8, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901415/3_z29lu7.png', alt: "Testimonial 8" },
    { id: 9, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901414/8_eaecv9.png', alt: "Testimonial 9" },
    { id: 10, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901411/14_uscz49.png', alt: "Testimonial 10" },
    { id: 11, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901410/1_qddaxq.png', alt: "Testimonial 11" },
    { id: 12, src: 'https://res.cloudinary.com/dzhpdvoqd/image/upload/v1772901410/4_ohzqly.png', alt: "Testimonial 12" },
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
    "Backend Web Development Bootcamp",
    "DevOps & Cloud Bootcamp",
    "Introduction to Graphic Design",
    "Digital Marketing",
    "Software Engineering",
    "Frontend Web Development Bootcamp",
    "TROUBLESHOOTING INDUSTRIAL CONTROL SYSTEM",
    "Troubleshooting PLC Circuits 1",
    "Troubleshooting Industrial Controls 1",
    "Troubleshooting Industrial Controls 2",
    "Troubleshooting Electric Circuits",
    "Troubleshooting Control Circuits",
    "Troubleshooting Motor Circuits",
    "AUTOMATION CONTROL SYSTEM",
    "PLC Programming Series (For Beginners)",
    "Siemens S7 & TIA Portal Programming Series",
    "Siemens S7 & STEP7 Programming Series",
    "Allen Bradley RSLogixStudio 5000 Programming",
    "SCADA Programming Series",
    "MARINE ELECTRICAL ENGINEERING",
    "Electrical,Electronic & Control Engineering at Operational Level",
    "Monitor the Operation of Automatic Control Systems of Propulsion & Auxilliary Machinery",
    "Fundamentals of electronics and Power Electronics ",
    "Operation & Maintenance of Power Systems in Excess of 1,000 Volts",
    "Computer Operation & Networks on Ship",
    "Operation of All Internal Communication Systems on Board",
    "Maintenance & Repair of Electrical & Electronic Equipment",
    "Maintenance/Repair of Automation & Control Systems of Main Propulsion & Auxilliary Machinery",
    "Maintenance/Repair of Bridge Navigation equipment & Ship Communication Systems",
    "Maintenance & Repair of Electrical, Electronic & Control Systems of Deck Machinery & Cargo Handling Equipment",
    "Maintenance/Repair of Control & Safety Systems of Hotel Equipment",
    "Troubleshooting Bridge Equipment & Engine Room Control Systems",

];

// marine courses 


export const marineCourseTopics = [
    {
        id: "1",
        title: "Electrical,Electronic & Control Engineering at Operational Level",
        months: 3,
        images: marine1,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Basic knowledge of heat transmission, mechanics and hydromechanics",
            "Electro-technology and electrical machines theory",
            "Fundamentals of electronics and power electronics",
            "Electrical power distribution boards and electrical equipment",
            "Fundamentals of automation, automatic control systems and technology",
            "Instrumentation, alarm and monitoring systems",
            " Electrical drives",
            "Technology of electrical material",
            "Appreciation of hazards and precautions required for operation of power systems above 1,000 volts",
        ],
    },
    {
        id: "2",
        title: "Monitor the Operation of Automatic Control Systems of Propulsion & Auxilliary Machinery",
        months: 4,
        image: marine2,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "PROPULSION CONTROL SYSTEMS",
            "Function of control systems of the main propulsion and auxiliary machinery",
            "sketch of block diagrams of main propulsion control of the main propulsion control systems",
            "Main propulsion controls systems used in normal and emergency situations",
            " Basic principles of propulsion control changeover in emergency",
            "Safety systems: start, shut-down and slow-down.",
            "Speed control and reversing systems of main engine with fixed and variable pitch propeller",
            "AUXILIARY MACHINERY CONTROL SYSTEMS",
            "Air compressors",
            "Auxiliary boilers; steering gear; fuel oil, cooling and lubricating oil systems",
            " Fuel temperature and viscosity control",
            "Boiler",
            "Sequential re-starting for auxiliary machinery",
            " Cut-in arrangements for auxiliary of unnamed machinery space",
            "Provision and cargo refrigeration plant",
            "Air conditioning plant",
        ],
    },
    {
        id: "3",
        title: "Fundamentals of electronics and Power Electronics ",
        months: 4,
        image: marine3,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "know the structure, principle of operation, parameters and application of different semiconductor elements: diodes, SCR, GTO and IGBT thyristors, field effect transistors – MOSFET and JFET, IGBT transistors",
            "Presents classification of power electronic converters and areas of their application on ships",
            "knows parameters, properties and basic applications of integrated stabilizers and operational amplifiers",
            "Gives example and describes structure and operation of analogue and impulse DC power supplies",
            " Lists and describes the construction and operation of controlled rectifiers",
            "Describe the construction and operation of AC voltage controllers",
            "Describe principle of operation and properties of MSI inverters",
            " Describes principle of operation and properties of cyclo-converters",
            "know diagnostics, methods of assembly and replacement of semiconductor elements",
            "List the requirements for electronic and power electronic systems installed on ships",
        ],
    },
    {
        id: "4",
        title: "Operation & Maintenance of Power Systems in Excess of 1,000 Volts",
        months: 3,
        images: marine4,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "High voltage technology",
            "Safety precautions and technology",
            "Electrical propulsion of ships, electrical motors and control systems",
            "Safe operation and maintenance of high-voltage systems",
        ],
    },
    {
        id: "5",
        title: "Computer Operation & Networks on Ship",
        months: 2,
        images: marine5,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Key features of data processing.",
            "Construction and use of computer networks on ships.",
            "Bridge based, engine room based and commercial computer use."
        ],
    },
    {
        id: "6",
        title: "Operation of All Internal Communication Systems on Board",
        months: 3,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Automatic Telephone System",
            "Emergency Sound Powered Telephone System",
            "Talkback – Intercom System",
            "Public Address System (PA)",
            "Communication between personnel and relaying of messages",
        ],
    },
    {
        id: "7",
        title: "Maintenance & Repair of Electrical & Electronic Equipment",
        months: 3,
        images: marine7,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Safety requirements for working on shipboard electrical equipment",
            "Maintenance and repair of electrical system equipment, switchboards, electric motors, generators and dc electrical systems and equipment",
            "Detection of electric malfunction, location of faults and measures to prevent damage",
            "Construction and operation of electrical testing and measuring equipment",
            "Function, configuration and performance tests of monitoring systems, automatic control devices, protective devices",
            "The interpretation of electrical and electronic diagrams",
        ],
    },
    {
        id: "8",
        title: "Maintenance/Repair of Automation & Control Systems of Main Propulsion & Auxilliary Machinery",
        months: 5,
        images: marine8,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Maintenance procedures and repair of electrical, mechanical, pneumatic, hydraulic components and automation equipment of main propulsion and auxiliary machinery",
            "Maintenance and repair of PID controllers",
            " Maintenance and repair of actuators",
            "Principle of controller optimal settings according to Ziegler-Nichols rule and manual adjustment of controller according to observed control errors",
            "Principles of maintenance and repair of propulsion remote control systems",
            "Maintenance procedures and repair of main propulsion with reference to",
            "Maintenance procedures and repair of fuel temperature and viscosity automatic control system",
            "Maintenance procedures and repair of lubrication, fuel and cooling automatic control systems",
            " Maintenance procedures and repair of variable pitch propeller control system",
            "Maintenance procedures and repair of ship refrigeration plans control systems: provision, refrigerated cargo holds and containers, air condition",
            "Maintenance and repair of the following engine auxiliary control systems: oil and fuel separator, sewage treatment plant, evaporator and osmotic fresh water generators, incinerators",
            "Maintenance procedures and repair of steering gear control system",
        ],
    },
    {
        id: "9",
        title: "Maintenance/Repair of Bridge Navigation equipment & Ship Communication Systems",
        months: 3,
        images: marine9,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Maintenance And Repair Of Bridge Navigation Equipment",
            "Radar",
            "Global Navigation Satellite Systems",
            "Ship Compass Equipment",
            "Speed Logs",
            "Echo Sounder Systems",
            "Marine Autopilots",
            "Voyage Data Recorders, Navigation Lights, Search Lights, Ship Horns And Sound Signal Systems, Wind Trackers",
            "Maintenance And Repair Of Ship Communication Systems",
            "Ship Communication Systems",
        ],
    },
    {
        id: "10",
        title: "Maintenance & Repair of Electrical, Electronic & Control Systems of Deck Machinery & Cargo Handling Equipment",
        category: "Marine Electrical Engineering Training",
        months: 2,
        images: marine10,
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Maintenance and repair Of Electrical, Electronic and Control Systems of Deck Machinery Systems",
            "Maintenance and Repair of Electrical, Electronic and Control Systems of Cargo-Handling Equipment",
            "Electrical and Electronic Systems Operating in Flammable Areas",
            "Safety and Emergency Procedures",
        ],
    },
    {
        id: "11",
        title: "Maintenance/Repair of Control & Safety Systems of Hotel Equipment",
        months: 3,
        category: "Marine Electrical Engineering Training",
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            " Operation of ship elevators",
            "Galley Equipment",
            "Laundry equipment",
            "Hotel safety and alarm system",
            "Hotel lighting systems",
        ],
    },
    {
        id: "12",
        title: " Troubleshooting Bridge Equipment & Engine Room Control Systems",
        category: "Marine Electrical Engineering Training",
        months: 3,
        images: marine12,
        description: "At the end of the course, you are expected to demonstrate knowledge, have a detailed understanding and proficiency in the following:",
        outline: [
            "Woodward EasYgen Controller (100,1000,2000,3000,3200 series)",
            "Balser Digital Excitation Controller",
            "Hyperterminal Software",
            "MRC Software",
            "DEIF Controllers Software",
            "Device Net",
        ],
    },
];

export const automationControl = [
    {
        id: "1",
        title: "PLC Programming Series (For Beginners)",
        months: 3,
        images: automation1,
        category: "Automation and Control",
        subtitle: "Main Objectives",
        description: `To ensure you are able to understand the basics of PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs to Industrial Standards using Ladder Logic and common routines that help to create a full program including Alarms and Status.
  
  We will walk you through the foundations of PLC Programming, universal to all PLCs, covering common programming instructions as well as how to design and structure a program.
  
  Our PLC programming courses not only teach you the basics of the PLC equipment which every programmer is required to learn but more importantly, how to write control routines and programs to a standard that is required in industry.
  
  Throughout the course, you’ll have access to Omron’s Syswin34 and a Live Omron CPM PLC Training Station, where you will be able to download, monitor and test your projects.
  
  At the end of the course, you are expected to have a detailed understanding of the most used instructions and routines in programming, as well as being able to design your own programs from scratch.`,
    },
    {
        id: "2",
        title: "Siemens S7 & TIA Portal Programming Series",
        months: 4,
        images: automation2,
        category: "Automation and Control",
        subtitle: "Main Objectives",
        description: `To ensure you are able to understand the basics of Siemens S7 PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs using Siemens Organisational Blocks, Functions, Function Blocks and Data Blocks.
  The Siemens TIA Portal Programming Series provides you with an understanding of Siemens S7 PLCs and the TIA Portal programming software including the background of the Siemens PLC, how and where they are used in today’s industry as well as setup and programming techniques. You will also gain an understanding of Siemens S7-1200 PLCs and TIA Portal programming software including advanced programming techniques using functions, function blocks, data blocks and how to apply them in programming.
  This course is primarily for people who will be working with Siemens PLCs but also may be found useful to anyone interested in Siemens PLCs.
  Throughout the course, you’ll have access to TIA Portal and a Live Siemens S7-1200 PLC Training Station, where you will be able to download, monitor and test your projects, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design routines and programs in the TIA Portal environment.
  At the end of the course, you are expected to have a detailed understanding of the Siemens S7 PLC and TIA Portal, as well as being able to use Organisation Blocks, Functions, Function Block and Data Blocks.`,
    },
    {
        id: "3",
        title: "Siemens S7 & STEP7 Programming Series",
        subtitle: "Main Objectives",
        months: 3,
        images: automation3,
        category: "Automation and Control",
        description: `To ensure you are able to understand the basics of Siemens S7 PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs using Siemens Organisational Blocks, Functions, Function Blocks and Data Blocks.
  The Siemens Programming Series provides you with an understanding of Siemens S7 PLCs and the STEP7 Professional programming software including the background of the Siemens PLC, how and where they are used in today’s industry as well as setup and programming techniques. You will also gain an understanding of Siemens S7-300 PLCs and STEP7 Professional programming software including advanced programming techniques using functions, function blocks, data blocks and how to apply them in programming.
  This course is primarily for people who will be working with Siemens PLCs but also may be found useful to anyone interested in Siemens PLCs.
  Throughout the course, you’ll have access to STEP7 Professional and a Siemens Simulator, where you will be able to download, monitor and test your projects, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design routines and programs in the STEP7 Professional environment.
  At the end of the course, you are expected to have a detailed understanding of the Siemens S7 PLC and STEP7 Professional, as well as being able to use Organisation Blocks, Functions, Function Block and Data Blocks..`,
    },
    {
        id: "4",
        title: "Allen Bradley RSLogixStudio 5000 Programming",
        subtitle: "Main Objectives",
        months: 3,
        images: automation4,
        category: "Automation and Control",
        description: `To ensure you are able to understand the basics of Allen Bradley ControlLogix PLCs such as its hardware, wiring and programming components as well as being able to create your own PLC Programs using Allen Bradley Routines and Add-on Instructions.
  The Allen Bradley Programming Series provides you with an understanding of Allen Bradley ControlLogix PLCs and the RSLogix 5000 programming software including the background of the Allen Bradley PLC, how and where they are used in today’s industry as well as setup and programming techniques. You will also gain an understanding of Allen Bradley ControlLogix PLCs and RSLogix 5000 programming software including advanced programming techniques using Routines and Add-on Instructions and how to apply them in programming. This course is primarily for people who will be working with Allen Bradley PLCs but also may be found useful to anyone interested in Allen Bradley PLCs.
  Throughout the course, you’ll have access to RSLogix 5000 and a Live Allen Bradley ControlLogix PLC Training Station for you to download and test your programs, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design routines and programs in the RSLogix 5000 environment.
  At the end of the course, you are expected to have a detailed understanding of the Allen Bradley ControlLogix PLC and RSLogix 5000, as well as being able to use Routines and Add-on Instructions.`,
    },
    {
        id: "5",
        title: "SCADA Programming Series",
        subtitle: "Main Objectives",
        months: 3,
        images: automation5,
        category: "Automation and Control",
        description: `To ensure you are able to understand the basics of SCADA such as its hardware and programming components as well as being able to create your own SCADA projects using the tools available.
  The SCADA Programming Series provides you with an understanding of SCADAs and their software including the background of SCADAs and HMIs, how and where they are used in today’s industry as well as setup and design techniques. You will also gain an understanding of CitectSCADA programming software including advanced design techniques using Genies, Paste Symbols and Symbol Sets and how to apply them in programming. This course is primarily for people who will be working with SCADAs but also may be found useful to anyone interested in SCADA design.
  Throughout the course, you’ll have access to CitectSCADA and Simulator for you to test your projects, this is to ensure that you fully understand how to work with the software as well as being able to demonstrate how to design objects and screens in the CitectSCADA environment.
  At the end of the course, you are expected to have a detailed understanding of how to create your own SCADA screens and projects from scratch to Industrial Standards, as well as understanding the fundamentals to SCADA design from how to setup a project to developing your own dynamic screens which react to Tags from PLCs displaying real-time processes and applications to Operators and Engineers on the shop-floor.`,
    },
];

export const troubleShooting = [
    {
        id: "1",
        title: "Troubleshooting Electric Circuits",
        subtitle: "Troubleshooting Electrical Circuits",
        months: 3,
        images: troubleshoot1,
        category: "Troubleshooting Industrial Control Systems",
        description: "Electrical Circuits Users receive hands-on training on several electrical circuit simulations, covering key troubleshooting techniques, to prepare them to diagnose a variety of problems on the main lighting circuit simulation. These simulations contain common components including fuses, pushbuttons, switches, relays, and lights.",
        outline: [
            "introduction",
            "Troubleshooting safety",
            "Troubleshooting techniques",
            "Explore the lighting circuit",
            "Troubleshoot the lighting circuit",
        ]
    },
    {
        id: "2",
        title: "Troubleshooting Control Circuits",
        subtitle: "Troubleshooting Control Circuits",
        months: 3,
        images: troubleshoot2,
        category: "Troubleshooting Industrial Control Systems",
        description: "Control Circuits With two unique control circuit simulations, including an electric door lock simulation, users will encounter a range of malfunctions found in typical control circuits containing components including relays, transformers, switches, and solenoids.",
        outline: [
            "introduction",
            "Troubleshooting safety",
            "Finding control circuit faults",
            "Explore the door lock circuit",
            "Troubleshooting the door lock circuit",
        ]
    },
    {
        id: "3",
        title: "Troubleshooting Motor Circuits",
        subtitle: "Troubleshooting Motor Circuits",
        months: 3,
        images: troubleshoot3,
        category: "Troubleshooting Industrial Control Systems",
        description: "The multiple motor lab simulations and the industrial garage door simulation included in this module contain components such as three-phase motors, transformers, contactors, overloads, fuses, and limit switches. Users will troubleshoot three-phase power circuits along with the control portion of these motor circuits.",
        outline: [
            "Motor windings and connection",
            "Motor behaviour",
            "Motor control components",
            "Determining causes of failure",
            "The language of controls",
            "Wiring diagram Vs ladder diagram",
            "Ladder logic and basic rules",
            "Solenoids",
            "Electromechanical relay",
            "Timer relay",
            "AC motors",
            "Sensing devices",
            "Two-wire controls",
            "Three-wire controls",
            "Separate control circuit",
            "Manual-Off-Auto control",
            "Sequence control",
            "Reverse control",
            "Jogging control",
            "Starting methods",
            "Deceleration methods",
            "Practice exercise",
        ]
    },
    {
        id: "4",
        title: "Troubleshooting PLC Circuits 1",
        subtitle: " PLC Circuits 1",
        months: 4,
        images: troubleshoot4,
        category: "Troubleshooting Industrial Control Systems",
        description: "This program includes several circuit simulations containing generic PLCs with digital inputs and outputs providing the basic functioning of PLCs and their circuits. Users gain experience while troubleshooting dozens of challenging malfunctions to build skills that matter.",
        outline: [
            "introduction",
            "PLC overview",
            "PLC components",
            "PLC ladder diagrams",
            "Diagnostic malfunction",
            "Troubleshooting PLC circuits",
        ]
    },
    {
        id: "5",
        title: "Troubleshooting Industrial Controls 1",
        subtitle: "Troubleshooting Industrial Controls 1",
        months: 5,
        images: troubleshoot5,
        category: "Troubleshooting Industrial Control Systems",
        description: "Industrial Controls Users troubleshoot complex malfunctions on this realistic simulation of an industrial process for mixing and processing fluids. The system uses a three-phase, 480 volt supply and contains a variety of industrial components such as pumps, agitators, heaters, temperature and float switches, relays, and timers.",
        outline: [
            "introduction",
            "PLC overview",
            "PLC components",
            "PLC ladder diagrams",
            "Diagnostic malfunction",
            "Troubleshooting PLC circuits",
        ]
    },
    {
        id: "6",
        title: "Troubleshooting Industrial Controls 2",
        subtitle: "Troubleshooting Industrial Controls 2",
        months: 4,
        images: troubleshoot6,
        category: "Troubleshooting Industrial Control Systems",
        description: "The PLC in this simulation has 20 PLC programs available providing a variety of different processes. Users will disconnect wires, take meter readings, even connect a laptop to compare readings and settings against schematics. Users will also examine pumps, motors, transformers, overloads and contactors to build skills while troubleshooting this complex industrial control system.",
        outline: [
            "introduction",
            "PLC overview",
            "PLC components",
            "PLC ladder diagrams",
            "Diagnostic malfunction",
            "Troubleshooting PLC circuits",
        ]
    },
]

