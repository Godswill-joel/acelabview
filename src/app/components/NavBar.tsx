"use client"
import path from "path"
import { Menu, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"

const navlinks = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
]

export default function NavBar() {
    const [isScrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === "/contact") {
            setScrolled(true);
        }

        const handlescroll = () => setScrolled(window.scrollY > 9);
        window.addEventListener('scroll', handlescroll);
        return () => window.removeEventListener('scroll', handlescroll);
    }, [pathname]);

    const handleNavClick = (path: string) => {
        setIsMobileMenuOpen(false);
        router.push(path);
    }

    return (
        <nav
        className={`fixed w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between"> ACE LABVIEW TECH
            <div className="hidden md:flex items-center space-x-10">
              <ul className="flex space-x-8">
                {navlinks.map(({ name, path }) => (
                  <li
                    key={path}
                    onClick={() => handleNavClick(path)}
                    className={`cursor-pointer hover:text-[#2661E9] font-medium transition-colors
                    ${isScrolled ? "text-black" : "text-white"}`}
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-6">
                <Button
                  onClick={() => handleNavClick('/contact')}
                  className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white transition-colors"
                >
                 Enroll Now
                </Button>
              </div>
            </div>
            <div className="md:hidden">
              <Button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              >
                <Menu className="h-8 w-8" />
              </Button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
              <ul className="space-y-3">
                {navlinks.map(({ name, path }) => (
                  <li
                    key={path}
                    onClick={() => handleNavClick(path)}
                    className="cursor-pointer font-medium py-1 text-gray-800 hover:text-[#2661E9]"
                  >
                    {name}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Button
                  onClick={() => handleNavClick('/inventory')}
                  className="w-full bg-[#2661E9] hover:bg-[#1a4bb8] text-white"
                >
                  Add car
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    )
} 