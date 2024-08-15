import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const IconList = () => {
  return (
    <div>
        <div className="flex justify-center space-x-6 text-gray-600 mb-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-6 w-6 hover:text-gray-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="h-6 w-6 hover:text-gray-800" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 hover:text-gray-800" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-6 w-6 hover:text-gray-800" />
          </a>
        </div>
    </div>
  )
}

export default IconList