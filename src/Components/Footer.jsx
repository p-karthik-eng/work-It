import React from "react";
import { Link } from "react-router-dom";

import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative text-white py-10 px-8 lg:px-20 md:px-14 bg-cover bg-center bg-no-repeat bg-gradient-to-r from-black to-blue-600"
     
    >
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Company Info */}
        <div  className="flex flex-col items-start">
          <div className="flex flex-row space-x-3">
            
            <div>
              <h2 className="text-xl font-bold text-white">Work It</h2>
              <p className="mt-1 text-sm  text-white">simplifying student Work – Get Help, Get Paid!</p>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className=" hover:text-pink-400 text-lg"><FaInstagram /></a>
            <a href="#" className=" hover:text-blue-600 text-lg"><FaFacebookF /></a>
            <a href="#" className=" hover:text-blue-600 text-lg"><FaLinkedinIn /></a>
            <a href="#" className=" hover:text-red-500 text-lg"><FaYoutube /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="">
          <h3 className="text-lg font-semibold mb-3 ">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-gray-300">Home</li>
            <li className="hover:text-gray-300">About</li>
            <li className="hover:text-gray-300">Features</li>
            <li className="hover:text-gray-300">Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 ">
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm flex items-center space-x-2">
            <FaEnvelope  /> <span>karthikputcha123@gmail.com</span>
          </p>
          <p className="text-sm flex items-center space-x-2">
            <FaPhone  /> <span>+91 -7416756511</span>
          </p>
          <p className="text-sm flex items-center space-x-2">
            <FaMapMarkerAlt  /> <span>IIIT nuzvid</span>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative mt-8 text-center  text-sm border-t border-gray-500 pt-4">
        © {new Date().getFullYear()} Work It. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
