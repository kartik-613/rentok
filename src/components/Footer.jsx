import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaInfoCircle, FaPhoneAlt, FaNewspaper, FaHandsHelping, FaShieldAlt, FaSitemap, FaFileContract } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 pt-2 border-y border-gray-300">

          {/* Popular Locations */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase text-gray-800">Popular Locations</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Kolkata</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Mumbai</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Chennai</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span>Pune</span>
              </li>
            </ul>
          </div>

          {/* About Rentok */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase text-gray-800">About Rentok</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2 hover:text-indigo-500"><FaInfoCircle /><span>About Rentok</span></li>
              <li className="flex items-center space-x-2 hover:text-indigo-500"><FaNewspaper /><span>Careers</span></li>
              <li className="flex items-center space-x-2 hover:text-indigo-500"><FaPhoneAlt /><span>Contact Us</span></li>
              <li className="flex items-center space-x-2 hover:text-indigo-500"><FaNewspaper /><span>Media Center</span></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4 uppercase text-gray-800">Rentok Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2 hover:text-green-600"><FaHandsHelping  /><span>Help</span></li>
              <li className="flex items-center space-x-2 hover:text-green-600"><FaShieldAlt  /><span>Safety Guidelines</span></li>
              <li className="flex items-center space-x-2 hover:text-green-600"><FaSitemap /><span>Sitemap</span></li>
              <li className="flex items-center  space-x-2 hover:text-green-600"><FaFileContract className="" /><span>Terms & Conditions</span></li>
            </ul>
          </div>

          {/* Social Links */}
                    <div>
            <h4 className="text-sm font-semibold mb-4 uppercase text-gray-800">Follow Us</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-600 sm:flex sm:space-y-0 sm:space-x-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex pb-2 items-center space-x-2 hover:text-blue-600 transition"
              >
                <FaFacebookF className="text-blue-600" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center pb-2 space-x-2 hover:text-blue-400 transition"
              >
                <FaTwitter className="text-blue-400" />
                <span>Twitter</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center pb-2 space-x-2 hover:text-pink-500 transition"
              >
                <FaInstagram className="text-pink-500" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 py-6 space-y-2 md:space-y-0">
          <p className="text-center md:text-left">
            Other Countries: Pakistan - South Africa - Indonesia
          </p>
          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Rentok. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
