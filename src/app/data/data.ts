import { StaticImageData } from "next/image";
import { Lock, Send, Award, Users } from "lucide-react";
import { Layers, Shield, Headphones } from "lucide-react";
import Devops from "../../../public/assets/images/features04 .jpg";
import Backend from "../../../public/assets/images/features05 .jpg";
import Frontend from "../../../public/assets/images/features02.jpg";
import cybersecurity from "../../../public/assets/images/features01.jpg";
import DataAnalysis from "../../../public/assets/images/features03 .jpg";

type Course = {
    id: number;
    title: string;
    description: string;
    image: string | StaticImageData;
};


export const courses = [
    {
        id: 1,
        title: "Cyber Security",
        description:
            "Protect your digital assets with our cutting-edge cybersecurity courses. Learn the skills needed to safeguard systems, detect threats, and secure sensitive information in today's interconnected world.",
        image: cybersecurity,
    },
    {
        id: 2,
        title: "Frontend Development",
        description:
            "Master the art of creating stunning, user-friendly websites and applications. Learn essential skills in HTML, CSS, JavaScript, and modern frameworks to build responsive and interactive digital experiences.",
        image: Frontend,
    },
    {
        id: 3,
        title: "Data Analysis",
        description:
            "Unlock the power of data with our comprehensive Data Analysis courses. Gain skills in data visualization, statistical analysis, and tools like Excel, Python, and SQL to make informed decisions and drive business success.",
        image: DataAnalysis,
    },
    {
        id: 4,
        title: "Dev/ops & cloud ",
        description:
            "Learn data analysis, visualization and machine learning techniques to turn raw data into actionable insights that drive business decisions.",
        image: Devops,
    },
    {
        id: 5,
        title: "Backend Development",
        description:
            "Learn data analysis, visualization and machine learning techniques to turn raw data into actionable insights that drive business decisions.",
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