import React from "react";
import { Instagram } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8 mb-12">
        <div className="md:col-span-2">
          <img src="public/melucacare/melucacarelogo.png" alt="Meluca Care" className="h-10 mb-6" />
          <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
            Your premier beauty destination in Addis Ababa, Ethiopia. Where artistry meets luxury, and every visit
            leaves you glowing with confidence.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
              </svg>
            </a>
            <a href="#" className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About Us</a></li>
            <li><a href="/services/" className="text-gray-400 hover:text-emerald-400 transition-colors">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Gallery</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Book Online</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Professional Makeup</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Hair Salon</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Nail Care</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Skin Care</a></li>
            <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Bridal Packages</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">© 2025 Meluca Care. All rights reserved.</p>
        <p className="text-gray-400">
          Developed with ❤️ by {" "}
          <a href="https://pixelorr.com/" className="text-blue-400 hover:text-emerald-300 transition-colors">Pixelorr</a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
