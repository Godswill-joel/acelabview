"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import acelabview from "../../../public/assets/images/ACE-Logo-White-300x139.png";

export default function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#" },
        { icon: Twitter, href: "#" },
        { icon: Instagram, href: "#" },
    ];

    const linkGroups = [
        {
            title: "",
            links: ["Home", "Courses", "About", "Contact", "Blog"],
        },
        {
            title: "",
            links: ["About Us", "Career", "Customers", "Our Team"],
        },
    ];

    return (
        <footer className="bg-black text-white pt-16 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    <div>
                        <h2 className="text-2xl font-bold text-[#8B00B9] mb-4">
                            <Image
                                src={acelabview}
                                alt="acelabview" />
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            At DataForte Academy, our mission is to empower you with the knowledge,
                            confidence, and credentials to excel in your chosen field. Join us and
                            take the first step toward a brighter future.
                        </p>

                        <div className="flex space-x-4">
                            {socialLinks.map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="text-gray-400 hover:text-[#2661E9] transition-colors"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {linkGroups.map((group, i) => (
                            <ul key={i} className="space-y-7">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <a href="#" className="hover:text-[#2661E9] transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} ACELAB VIEW
                </div>
            </div>
        </footer>
    );
}
