// import React from "react";
// import PageList from "../pageList/page";


// const Navbar = () => {
//   return (
//     <nav className="bg-white  p-4 w-full sticky top-0">
//       <div className="flex justify-between items-center max-w-screen-xl mx-auto">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//         <img
//             src="/assests/logo_assignment.png" // Replace with your logo path
//             alt="Logo"
//             style={{width:"150px"}}
//           />
//         </div>
//         <PageList/>

//         {/* Download CV Button */}
//         <a
//           href="/cv.pdf"
//           className="bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
//           download
//         >
//           Download CV
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client"
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 w-full sticky top-0 shadow-md z-50">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/assests/logo_assignment.png" // Replace with your logo path
            alt="Logo"
            style={{ width: "150px" }}
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-8 text-gray-600-bold absolute md:static bg-white w-full left-0 md:w-auto md:bg-transparent top-14 md:top-0 p-4 md:p-0`}
        >
          <li>
            <a href="#HomePage" className="block md:inline hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="block md:inline hover:text-gray-800">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="block md:inline hover:text-gray-800">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="block md:inline hover:text-gray-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="block md:inline hover:text-gray-800">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="block md:inline hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>

        {/* Download CV Button */}
        <a
          href="/cv.pdf"
          className="hidden md:inline bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300"
          download
        >
          Download CV
        </a>
      </div>

      {/* Download CV Button for Mobile */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <a
            href="/cv.pdf"
            className="block bg-orange-500 text-white py-2 px-6 rounded-md hover:bg-orange-600 transition duration-300 text-center"
            download
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
