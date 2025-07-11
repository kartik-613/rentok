import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-10 border-b border-gray-300">

          {/* Popular Locations */}
          <div>
            <h4 className="text-sm font-semibold mb-4">POPULAR LOCATIONS</h4>
            <ul className="space-y-2 text-sm">
              <li>Kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>

          {/* About Rentok */}
          <div>
            <h4 className="text-sm font-semibold mb-4">ABOUT RENTOK</h4>
            <ul className="space-y-2 text-sm">
              <li>About Rentok</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Media Center</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">RENTOK SERVICES</h4>
            <ul className="space-y-2 text-sm">
              <li>Help</li>
              <li>Safety Guidelines</li>
              <li>Sitemap</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">FOLLOW US</h4>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="hover:text-blue-600">Facebook</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-pink-500">Instagram</a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 py-6">
          <p>Other Countries: Pakistan - South Africa - Indonesia</p>
          <p>&copy; {new Date().getFullYear()} Rentok. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
