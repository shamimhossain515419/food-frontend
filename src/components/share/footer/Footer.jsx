import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary-color text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <p className="text-gray-200">
            Your trusted e-commerce platform. Quality products, best deals, and
            secure transactions.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/help" className="text-gray-200 hover:text-white">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="text-gray-200 hover:text-white">
                Shipping & Delivery
              </Link>
            </li>
            <li>
              <Link href="/returns" className="text-gray-200 hover:text-white">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-200 hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/about-us" className="text-gray-200 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-gray-200 hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-gray-200 hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-gray-200 hover:text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white text-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white text-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white text-lg"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white text-lg"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-300 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
