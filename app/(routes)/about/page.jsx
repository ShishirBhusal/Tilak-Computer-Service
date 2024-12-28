"use client"
import React, { useState } from 'react';

export default function AboutUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-6 md:p-12 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-96 mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            At our Technical Service Shop, our mission is to provide fast, reliable, and affordable technical services. 
            We aim to empower individuals and businesses by ensuring their equipment operates at peak performance.
          </p>
        </section>

        {/* Services Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Services We Offer</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
              Router installation and network setup
            </li>
            <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
              Computer repairs and hardware upgrades
            </li>
            <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
              Printer toner refilling and maintenance
            </li>
            <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
              CCTV installation and troubleshooting
            </li>
            <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
              Projector repairs and new installations
            </li>
            <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
              Customized technical solutions for businesses
            </li>
          </ul>
        </section>

        {/* Vision Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a world where technology works seamlessly to enhance daily life and business operations. 
            By offering expert technical services, we strive to minimize downtime and maximize productivity for our clients.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Contact Information</h2>
          <p className="text-gray-700">
            📞 <span className="font-semibold">Phone:</span> +977 9847462341
          </p>
          <p className="text-gray-700">
            📧 <span className="font-semibold">Email:</span> tilak@gmail.com
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="text-gray-700 mb-2">
              📞 <span className="font-semibold">Phone:</span> +977 9847462341
            </p>
            <p className="text-gray-700 mb-4">
              📧 <span className="font-semibold">Email:</span> tilak@gmail.com
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
