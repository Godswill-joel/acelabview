"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import acelabview from "../../../public/assets/images/ACE-Logo-White-300x139.png";

export default function Footer() {
    const socialLinks = [
        { icon: FaFacebookF, link: "https://www.facebook.com/share/v/1YZ9r7MJcq/?mibextid=wwXIfr" },
        { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/ace-labview-ltd/" },
        { icon: FaSquareXTwitter, link: "https://x.com/acelabacademy?s=21" },
        { icon: FaInstagram, link: "https://www.instagram.com/acelabacademy?igsh=dm43ZDFmMXI3cWw2&utm_source=qr" },
    ];
    const navlinks = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/course" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" },
    ];

    const linkGroups = [
        {
            title: "Quick Links",
            links: navlinks,
        },
        {
            title: "Company",
            links: [
                { name: "About Us", path: "/about" },
                { name: "Career", path: "/" },
                { name: "Customers", path: "/" },
                { name: "Our Team", path: "/" },
            ],
        },
    ];

    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setStatus("error");
            return;
        }

        setStatus("idle"); 
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B00B9] via-[#2661E9] to-[#8B00B9]" />
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
                    <div>
                        <div className="mb-4">
                            <Image
                                src={acelabview}
                                alt="acelabview"
                                className="w-36 md:w-44"
                                priority
                            />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
                            At Acelabview Academy, our mission is to empower you with the
                            knowledge, confidence, and credentials to excel in your chosen
                            field. Join us and take the first step toward a brighter future.
                        </p>
                        <div className="flex space-x-5 mt-4 relative z-10">
                            {socialLinks.map(({ icon: Icon, link }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-[#2661E9] transition-colors duration-300 focus:ring-2 focus:ring-[#2661E9] focus:outline-none cursor-pointer"
                                >
                                    <Icon className="w-5 h-5 text-gray-300 hover:text-white" />
                                </a>
                            ))}
                        </div>

                    </div>

                    {linkGroups.map((group, i) => (
                        <div key={i}>
                            <h3 className="text-lg font-semibold text-[#2661E9] mb-4">
                                {group.title}
                            </h3>
                            <ul className="space-y-3 text-sm">
                                {group.links.map((link, j) => (
                                    <li key={j}>
                                        <Link
                                            href={link.path}
                                            className="text-gray-300 hover:text-[#2661E9] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="text-lg font-semibold text-[#2661E9] mb-4">
                            Stay Connected
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                            Subscribe to our newsletter to get the latest updates and
                            learning opportunities.
                        </p>
                        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="w-full px-3 py-2 bg-white rounded-md text-sm text-black focus:outline-none focus:ring-2 focus:ring-[#2661E9]"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-[#2661E9] text-white text-sm px-4 py-2 rounded-md hover:bg-[#1a4bb8] transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                        {status === "success" && (
                            <p className="text-green-400 text-sm mt-3 transition-all duration-300">
                                ✅ Thank you for subscribing!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-sm mt-3 transition-all duration-300">
                                ⚠️ Please enter a valid email address.
                            </p>
                        )}
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} ACELABVIEW — All rights reserved.
                </div>
            </div>
        </footer>
    );
}
