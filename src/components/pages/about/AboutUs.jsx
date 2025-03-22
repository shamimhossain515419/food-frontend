"use client";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUsers,
  FaShoppingCart,
} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-color text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">
            Learn more about our company, values, and mission.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl font-semibold text-primary-color flex items-center gap-2 mb-4">
            <FaUsers className="text-primary-color" /> Who We Are
          </h2>
          <p className="text-gray-700 mb-4">
            We are a leading e-commerce platform providing top-quality products
            at the best prices. Our mission is to bring convenience to online
            shopping while maintaining the highest level of customer
            satisfaction.
          </p>
          <h2 className="text-2xl font-semibold text-primary-color flex items-center gap-2 mb-4">
            <FaShoppingCart className="text-primary-color" /> Our Mission
          </h2>
          <p className="text-gray-700">
            We strive to offer the best shopping experience by ensuring fast
            delivery, secure payments, and excellent customer service.
          </p>
        </div>

        {/* Right Content - Google Map */}
        <div className="shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116535.5717205977!2d90.3495237419431!3d23.783899874345863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1742022314988!5m2!1sen!2sbd"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-[300px] rounded-lg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold text-primary-color mb-4">
            Contact Us
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <p className="text-gray-700 flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary-color" /> 123 Street,
              City, Country
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaPhone className="text-primary-color" /> +123 456 7890
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaEnvelope className="text-primary-color" />{" "}
              support@yourcompany.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
