import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-72 flex items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative text-4xl md:text-5xl font-bold text-white drop-shadow-lg">About Us</h1>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">Taste Quest</span>, your community-driven 
          recipe platform! We’re passionate about bringing people together 
          through food—whether it’s Nigerian classics or creative modern twists.  
          Our mission is simple: to make cooking fun, easy, and inspiring for 
          everyone.
        </p>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
        <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To connect food lovers and home cooks by sharing recipes, ideas, 
            and experiences that bring joy to the table.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">What We Offer</h3>
          <p className="text-gray-600">
            A platform where you can explore new recipes, share your own, and 
            discover cooking tips to level up your kitchen skills.
          </p>
        </div>

        <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the go-to community for authentic and innovative recipes, 
            where culture and creativity meet on a plate.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Michael Ade", role: "Founder & Head Chef", img: "https://randomuser.me/api/portraits/men/32.jpg" },
            { name: "Sarah Johnson", role: "Community Manager", img: "https://randomuser.me/api/portraits/women/44.jpg" },
            { name: "David Lee", role: "Food Photographer", img: "https://randomuser.me/api/portraits/men/65.jpg" },
          ].map((member, i) => (
            <div key={i} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition text-center">
              <img src={member.img} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Taste Quest?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          We’re not just another recipe site. Taste Quest is a space where culture, creativity, 
          and community come together. From authentic local dishes to modern experiments, 
          you’ll find inspiration that suits every kitchen.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Community First</h3>
            <p className="text-gray-600">We’re built by food lovers, for food lovers—sharing knowledge and joy.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Cultural Roots</h3>
            <p className="text-gray-600">From Nigerian classics to global cuisines, we celebrate diversity in food.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-2xl shadow">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Endless Inspiration</h3>
            <p className="text-gray-600">Discover new recipes daily, from everyday meals to festive feasts.</p>
          </div>
        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Join the Taste Quest Community</h2>
        <p className="text-gray-600 mb-6">Share your recipes, explore new ideas, and be part of a growing family of food lovers.</p>
        <a href="/signup" className="px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
