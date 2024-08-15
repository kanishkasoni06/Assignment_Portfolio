import React from 'react'

const PageList = () => {
  return (
    <div>
           <ul className="hidden md:flex space-x-8 text-gray-600-bold ">
          <li>
            <a href="#HomePage" className="hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-800">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-800">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-800">
              Projects
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-gray-800">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
    </div>
  )
}

export default PageList