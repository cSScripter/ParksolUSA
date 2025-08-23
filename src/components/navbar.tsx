"use client";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<
    "products" | "projects" | null
  >(null);

  const toggleSection = (section: "products" | "projects") => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <nav className="flex justify-between space-x-12">
      <div className="hidden md:flex justify-between space-x-12">
        <a href="/">HOME</a>
        <a href="/about">ABOUT US</a>

        <div className="relative group">
          <a href="#" className="flex items-center space-x-1 cursor-pointer">
            <span>PRODUCTS AND SERVICES</span>
            <span className="text-xs leading-none">v</span>
          </a>
          {/* drop down menu */}
          <div className="absolute left-0 top-full mt-0-64 bg-black hidden group-hover:block z-50 pt-2 pb-2">
            <a href="#" className="block px-4 py-2">
              Our Products
            </a>
            <a href="#" className="block px-4 py-2 whitespace-nowrap">
              Parksoft&trade; Garage Management Software
            </a>
          </div>
        </div>

        <div className="relative group">
          <a href="#" className="flex items-center space-x-1 cursor-pointer">
            <span>PROJECTS</span>
            <span className="text-xs leading-none">v</span>
          </a>
          {/* drop down menu */}
          <div className="absolute left-0 top-full mt-0 bg-black hidden group-hover:block z-50 pt-2 pb-2">
            <a href="#" className="block px-4 py-2">
              Current Projects
            </a>
            <a href="#" className="block px-4 py-2 whitespace-nowrap">
              Portfolio/Case Studies
            </a>
          </div>
        </div>

        <a href="#">CONTACT US</a>
        <a href="#">MEMBER LOGIN</a>
      </div>

      {/* mobile devices */}
      <button
        className="block md:hidden"
        aria-label="Toggle Menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img src="/burger.svg" alt="Menu" className="w-6 h-6" />
      </button>
      {isOpen && (
        <div
          className="
            fixed top-25.5 left-0 right-0 bg-black shadow-md
            flex flex-col items-center space-y-4 p-6 md:hidden
            z-50
            "
        >
          {/* CHANGE: Added close button in top-right to close the menu */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-10 text-white text-4xl font-bold text-center"
            aria-label="Close menu"
          >
            &times;
          </button>
          <a href="/" className="text-lg font-semibold">
            HOME
          </a>
          <a href="/about" className="text-lg font-semibold">
            ABOUT US
          </a>
          <button
            className="w-full flex items-center justify-center"
            onClick={() => toggleSection("products")}
            aria-expanded={openSection === "products"}
          >
            <span
              className="
                text-white
                font-normal         /* font-weight: 400 */
                no-underline        /* text-decoration: none */
                text-[17px]         /* font-size: 17px */
                tracking-[0.05em]   /* letter-spacing: 0.05em */
                font-montserrat     /* custom font family - see below */
            "
            >
              PRODUCTS AND SERVICES
            </span>
            <span className="text-xs text-white ml-2 leading-none">
              {openSection === "products" ? "▲" : "▼"}
            </span>
          </button>
          {openSection === "products" && (
            <div className="pl-4 flex flex-col space-y-2 w-full">
              <a href="#" className="text-base text-center">
                Our Products
              </a>
              <a href="#" className="text-base text-center whitespace-nowrap">
                Parksoft&trade; Garage Management Software
              </a>
            </div>
          )}

          {/* Expandable Projects */}
          <button
            className="w-full flex items-center justify-center"
            onClick={() => toggleSection("projects")}
            aria-expanded={openSection === "projects"}
          >
            <span
              className="
                text-white
                font-normal        
                no-underline       
                text-[17px]        
                tracking-[0.05em]   
                font-montserrat"
            >
              PROJECTS
            </span>
            <span className="text-xs text-white ml-2 leading-none">
              {openSection === "projects" ? "▲" : "▼"}
            </span>
          </button>
          {openSection === "projects" && (
            <div className="pl-4 flex flex-col space-y-2 w-full">
              <a href="#" className="text-base text-center">
                Current Projects
              </a>
              <a href="#" className="text-base text-center whitespace-nowrap">
                Portfolio/Case Studies
              </a>
            </div>
          )}

          <a href="#" className="text-lg font-semibold">
            CONTACT US
          </a>
          <a href="#" className="text-lg font-semibold">
            MEMBER LOGIN
          </a>
        </div>
      )}
    </nav>
  );
}
