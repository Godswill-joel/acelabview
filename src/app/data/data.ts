
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
        price: 300,
        oldPrice: 500,
        image: Graphics,

        // SEO Metadata
        slug: "user-experience-design-fundamentals",
        metaTitle: "User Experience Design Fundamentals | AceLabview Academy",
        metaDescription:
            "Master the principles of UI/UX design with real-world projects. Learn from expert designers and create intuitive, user-centered digital experiences.",
        keywords: "UI/UX design, user experience, Figma, Adobe XD, web design",
        canonical: "https://acelabview.com/courses/user-experience-design-fundamentals",
    },
    {
        id: 2,
        category: "Graphic Design",
        title: "Introduction to Graphic Design",
        instructor: "Liam Garcia",
        instructorImage: "/instructors/liam.jpg",
        months: 2,
        price: 300,
        oldPrice: 500,
        image: DataAnalysis,

        slug: "introduction-to-graphic-design",
        metaTitle: "Introduction to Graphic Design | AceLabview Academy",
        metaDescription:
            "Kickstart your design career with hands-on training in graphic design fundamentals, typography, color theory, and composition.",
        keywords: "graphic design, photoshop, illustrator, branding, creativity",
        canonical: "https://acelabview.com/courses/introduction-to-graphic-design",
    },
    {
        id: 3,
        category: "Web Development",
        title: "Frontend Web Development Bootcamp",
        instructor: "Emma Wilson",
        instructorImage: "/instructors/emma.jpg",
        months: 7,
        price: 300,
        oldPrice: 500,
        image: Frontend,

        slug: "frontend-web-development-bootcamp",
        metaTitle: "Frontend Web Development Bootcamp | AceLabview Academy",
        metaDescription:
            "Become a professional frontend developer. Learn HTML, CSS, JavaScript, React, and build modern web applications from scratch.",
        keywords: "frontend, react, javascript, html, css, web development",
        canonical: "https://acelabview.com/courses/frontend-web-development-bootcamp",
    },
    {
        id: 4,
        category: "Cybersecurity",
        title: "Cybersecurity Bootcamp",
        instructor: "Success Chukwu",
        instructorImage: "/instructors/emma.jpg",
        months: 6,
        price: 300,
        oldPrice: 500,
        image: Cybersecurity,

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
        price: 300,
        oldPrice: 500,
        image: Devops,

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
        price: 300,
        oldPrice: 500,
        image: Backend,

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
    "Web Development",
    "Data Science",
    "Data Analysis Bootcamp",
    "User Experience Design Fundamentals",
    "Cybersecurity Bootcamp",
    "Mobile App Development",
    "DevOps & Cloud Bootcamp",
    "Introduction to Graphic Design",
    "Digital Marketing",
    "Software Engineering",
    "Frontend Web Development Bootcamp",
];
