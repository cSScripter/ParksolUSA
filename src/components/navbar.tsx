"use client";
import { useState } from "react";
import Link from "next/link";

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
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT US</Link>

        <div className="relative group">
          <Link href="/products" className="flex items-center space-x-1 cursor-pointer">
            <span>PRODUCTS AND SERVICES</span>
            <span className="text-xs leading-none">v</span>
          </Link>
          {/* drop down menu */}
          <div className="absolute left-0 top-full mt-0-64 bg-black hidden group-hover:block z-50 pt-2 pb-2">
            <Link href="/products" className="block px-4 py-2">
              Our Products
            </Link>
            <Link href="/parksoft" className="block px-4 py-2 whitespace-nowrap">
              Parksoft&trade; Garage Management Software
            </Link>
          </div>
        </div>

        <div className="relative group">
          <Link href="/projects" className="flex items-center space-x-1 cursor-pointer">
            <span>PROJECTS</span>
            <span className="text-xs leading-none">v</span>
          </Link>
          {/* drop down menu */}
          <div className="absolute left-0 top-full mt-0 bg-black hidden group-hover:block z-50 pt-2 pb-2">
            <Link href="/projects" className="block px-4 py-2">
              Current Projects
            </Link>
            <Link href="/case-studies" className="block px-4 py-2 whitespace-nowrap">
              Portfolio/Case Studies
            </Link>
          </div>
        </div>

        <Link href="/contact-us">CONTACT US</Link>
        <Link href="/member-login">MEMBER LOGIN</Link>
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
          <button
            onClick={() => {
              setIsOpen(false);
              setOpenSection(null);
            }}
            className="absolute top-2 right-10 text-white text-4xl font-bold text-center"
            aria-label="Close menu"
          >
            &times;
          </button>
          <Link
            href="/"
            className="text-lg font-semibold"
            onClick={() => {
              setIsOpen(false);
              setOpenSection(null);
            }}
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="text-lg font-semibold"
            onClick={() => {
              setIsOpen(false);
              setOpenSection(null);
            }}
          >
            ABOUT US
          </Link>
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
              <Link
                href="/products"
                className="text-base text-center"
                onClick={() => {
                  setIsOpen(false);
                  setOpenSection(null);
                }}
              >
                Our Products
              </Link>
              <Link
                href="/parksoft"
                className="text-base text-center whitespace-nowrap"
                onClick={() => {
                  setIsOpen(false);
                  setOpenSection(null);
                }}
              >
                Parksoft&trade; Garage Management Software
              </Link>
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
              <Link
                href="/projects"
                className="text-base text-center"
                onClick={() => {
                  setIsOpen(false);
                  setOpenSection(null);
                }}
              >
                Current Projects
              </Link>
              <Link
                href="/case-studies"
                className="text-base text-center whitespace-nowrap"
                onClick={() => {
                  setIsOpen(false);
                  setOpenSection(null);
                }}
              >
                Portfolio/Case Studies
              </Link>
            </div>
          )}

          <Link
            href="/contact-us"
            className="text-lg font-semibold"
            onClick={() => {
              setIsOpen(false);
              setOpenSection(null);
            }}
          >
            CONTACT US
          </Link>
          <Link
            href="member-login"
            className="text-lg font-semibold"
            onClick={() => {
              setIsOpen(false);
              setOpenSection(null);
            }}
          >
            MEMBER LOGIN
          </Link>
        </div>
      )}
    </nav>
  );
}
