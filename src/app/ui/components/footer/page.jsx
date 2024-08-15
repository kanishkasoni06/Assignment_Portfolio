import React from "react";
import PageList from "../pageList/page";
import IconList from "../iconList/page";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-8">
      <div className=" mx-auto text-center py-8">
        {/* Logo */}
        <div className="flex justify-center items-center space-x-2 mb-4 ">
          <Image
            src="/assests/logo_assignment.png" // Replace with your actual logo path
            alt="Mumair Logo"
            style={{height:"45px"}}
          />
        </div>
        <div className="flex justify-center space-x-8  mb-6 py-4">
    <PageList/>
        </div>
        <IconList/>
        {/* Copyright Text */}
      </div>
      <div className="bg-[#545454] py-4 mx-auto text-center">
          <p className="text-gray-200">
            © 2023 <span className="text-orange-500">Mumair</span> All Rights Reserved, Inc.
          </p>
        </div>
    </footer>
  );
};

export default Footer;