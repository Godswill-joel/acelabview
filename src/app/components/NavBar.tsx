"use client"

import { Menu, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "../components/Button";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation"

const navlinks = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/course", 
    children: [
    { name: "Marine Electrical courses", path: "/marineElectricalTraining" },
    { name: "IT Courses", path: "/course" },
    
  ],  },
  { name: "About", path: "/about" },
  { 
    name: "Contact", 
    path: "/contact", 
  },
  { name: "Blog", path: "/blog" }
];

export default function NavBar() {
  const [isScrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/contact") {
      setScrolled(true);
    }

    const handleScroll = () => setScrolled(window.scrollY > 9);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const handleNavClick = (path: string) => {
    setIsMobileMenuOpen(false);
    setDropdownOpen(null);
    router.push(path);
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Image
            src="/assets/images/ACELogo1.png"  
            alt="Acelabview"
            width={150}
            height={50}
            className="cursor-pointer"
            onClick={() => handleNavClick('/')}
          />
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <ul className="flex space-x-10 items-center">
              {navlinks.map(({ name, path, children }) => (
                <li key={path} className="relative">
                  <div 
                    onClick={() => children ? setDropdownOpen(dropdownOpen === name ? null : name) : handleNavClick(path)}
                    className={`cursor-pointer hover:text-[#2661E9] font-medium text-2xl transition-colors flex items-center
                      ${isScrolled ? "text-black" : "text-white"}`}
                  >
                    {name} {children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </div>
                  
                  {/* Dropdown */}
                  {children && dropdownOpen === name && (
                    <ul className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                      {children.map((child) => (
                        <li
                          key={child.path}
                          onClick={() => handleNavClick(child.path)}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                        >
                          {child.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Button
              onClick={() => handleNavClick('/contact')}
              className="bg-[#2661E9] hover:bg-[#1a4bb8] text-white font-bold transition-colors"
              size="lg"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            >
              <Menu className="h-8 w-8" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <ul className="space-y-3">
              {navlinks.map(({ name, path, children }) => (
                <li key={path} className="relative">
                  <div
                    onClick={() => children ? setDropdownOpen(dropdownOpen === name ? null : name) : handleNavClick(path)}
                    className="cursor-pointer font-medium py-1 text-gray-800 hover:text-[#2661E9] flex justify-between items-center"
                  >
                    {name} {children && <ChevronDown className="ml-1 h-4 w-4" />}
                  </div>

                  {/* Mobile Dropdown */}
                  {children && dropdownOpen === name && (
                    <ul className="mt-1 pl-4 space-y-1 border-l border-gray-200">
                      {children.map((child) => (
                        <li
                          key={child.path}
                          onClick={() => handleNavClick(child.path)}
                          className="cursor-pointer py-1 text-gray-700 hover:text-[#2661E9]"
                        >
                          {child.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <Button
                onClick={() => handleNavClick('/contact')}
                className="w-full bg-[#2661E9] hover:bg-[#1a4bb8] text-white"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}