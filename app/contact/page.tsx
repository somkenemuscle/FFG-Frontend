"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <div className="bg-gray-50 sm:px-14 px-4">
 

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-24 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div>
          <h2 className="text-xl md:text-2xl text-gray-900 font-semibold mb-4">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-gray-900 border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-gray-900 border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full text-gray-900 border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full text-gray-900 border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full text-gray-900 border border-gray-300 rounded-lg p-3 focus:ring focus:ring-blue-300"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg transition w-full sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h2 className="text-xl md:text-2xl text-gray-900 font-semibold mb-4">
            Contact Information
          </h2>
          <p className="mb-4 text-gray-700">
            Get in touch with us via phone, email, or visit our office.
          </p>
          <div className="space-y-3">
            <div>
              <h3 className="font-medium text-gray-900">Phone:</h3>
              <p className="text-gray-700">+234 803 123 4567</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Email:</h3>
              <p className="text-gray-700">ffg@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Address:</h3>
              <p className="text-gray-700">13, adeniyi Street, Lagos, Nigeria</p>
            </div>
          </div>

          {/* Map */}
          <div className="mt-6 aspect-video w-full">
            <iframe
              className="w-full h-full rounded-lg border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.858097273348!2d3.379205715326232!3d6.524379295282848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bcd6d273567%3A0xf62adfe1dbb3ddcc!2sLagos!5e0!3m2!1sen!2sng!4v1618923247725!5m2!1sen!2sng"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
