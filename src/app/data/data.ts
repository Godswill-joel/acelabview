import { StaticImageData } from "next/image";
import { Lock, Send, Award, Users } from "lucide-react";
import { Layers, Shield, Headphones } from "lucide-react";
import blog1 from "../../../public/assets/images/blog1.webp";
import blog2 from "../../../public/assets/images/blog2.webp";
import blog3 from "../../../public/assets/images/blog7.webp";
import blog4 from "../../../public/assets/images/blog4.webp";
import Devops from "../../../public/assets/images/features04 .jpg";
import Backend from "../../../public/assets/images/features05 .jpg";
import Frontend from "../../../public/assets/images/features02.jpg";
import graphics from "../../../public/assets/images/features01.jpg";
import DataAnalysis from "../../../public/assets/images/features03 .jpg";
import cybersecurity from "../../../public/assets/images/Backend.webp";



export const courses = [

    {
        id: 1,
        category: "UI/UX Design",
        title: "User Experience Design Fundamentals",
        instructor: "Sarah Mitchell",
        instructorImage: "/instructors/sarah.jpg",
        months: 6,
        price: 300,
        oldPrice: 500,
        image: graphics,
    },
    {
        id: 2,
        category: "Graphic Design",
        title: "Introduction to Graphic Design",
        instructor: "Liam Garcia",
        instructorImage: "/instructors/liam.jpg",
        months: 6,
        price: 300,
        oldPrice: 500,
        image: DataAnalysis,
    },
    {
        id: 3,
        category: "Web Development",
        title: "Frontend Web Development Bootcamp",
        instructor: "Emma Wilson",
        instructorImage: "/instructors/emma.jpg",
        months: 6,
        price: 300,
        oldPrice: 500,
        image: Frontend,
    },
    {
        id: 4,
        category: "cybersecurity",
        title: "cybersecurity Bootcamp",
        instructor: "Emma Wilson",
        instructorImage: "/instructors/emma.jpg",
        months: 6,
        price: 300,
        oldPrice: 500,
        image: cybersecurity,
    },
    {
        id: 5,
        category: "Dev/ops & cloud",
        title: "Frontend Web Development Bootcamp",
        instructor: "Emma Wilson",
        instructorImage: "/instructors/emma.jpg",
        months: 6,
        price: 300,
        oldPrice: 500,
        image: Devops,
    },
    {
        id: 6,
        category: "Data Analysis",
        title: "Data analysis Bootcamp",
        instructor: "Emma Wilson",
        instructorImage: "/instructors/emma.jpg",
        months: 6,
        price: 300,
        oldPrice: 500,
        image: Backend,
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

export const featuresdata = [
    {
        title: "Career Placement",
        description:
            "Benefit from our dedicated job placement services and internship to land your dream role.",
        icon: Lock,
        color: "bg-purple-600",
    },
    {
        title: "Dedicated Mentorship",
        description:
            "Receive guidance and personalized support from experienced mentors throughout your learning journey.",
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
            "Join a supportive network of peers, alumni, and mentors for ongoing growth and development.",
        icon: Users,
        color: "bg-yellow-500",
    },
];

export const testimonials = [
    {
        name: "Michael",
        text: "Enrolling in DataForte Academy’s cybersecurity program was a game-changer for my career...",
        image: "/michael.jpg",
    },
    {
        name: "Fehintola",
        text: "DataForte Academy exceeded my expectations! The instructors were knowledgeable...",
        image: "/fehintola.jpg",
    },
    {
        name: "Morris",
        text: "I was completely new to IT, but DataForte Academy made the learning process seamless...",
        image: "/morris.jpg",
    },
];

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
      "Learn the art of organizing your online classes, assignments, and breaks efficiently.",
    image: blog2,
  },
  {
    id: 3,
    title: "Top 10 Online Resources for Self-Directed Learners",
    date: "Oct 08, 2025",
    author: "Admin",
    tag: "Online Learning",
    description:
      "Explore top websites and tools that make self-learning effective and engaging.",
    image: blog3,
  },
  {
    id: 4,
    title: "Balancing Work and Study: Tips for Busy Professionals",
    date: "Oct 08, 2025",
    author: "Admin",
    tag: "Productivity",
    description:
      "Manage your time and energy efficiently while working and studying online.",
    image: blog4,
  },
];

export const selection = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Cybersecurity",
    "Mobile App Development",
    "Cloud Computing",
    "Graphics Design",
    "Digital Marketing",
    "Software Engineering",
];
  
