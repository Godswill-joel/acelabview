import { StaticImageData } from "next/image";
import cybersecurity from "../../../public/assets/images/features01.jpg";
import Frontend from "../../../public/assets/images/features02.jpg";
import DataAnalysis from "../../../public/assets/images/features03 .jpg";
import Devops from "../../../public/assets/images/features04 .jpg";
import Backend from "../../../public/assets/images/features05 .jpg";
import { Layers, Shield, Headphones } from "lucide-react";

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