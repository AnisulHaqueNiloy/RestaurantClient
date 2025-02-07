import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black">
      <footer className="bg-black text-white py-10 w-11/12 mx-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
            {/* Logo and Description */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Restaurant Name</h2>
              <p className="text-gray-400">
                Delight in every bite with our exquisite cuisines. From Chinese
                to Thai and beyond, we serve flavors that you'll savor forever.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    All Foods
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to get the latest updates and
                offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-2 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full sm:w-auto flex-1 text-black"
                />
                <button className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8 border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400">
                © 2024 Restaurant Name. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
