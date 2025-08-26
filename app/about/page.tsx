import React from "react";

const AboutUs = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <div className="text-center py-24 bg-[#66ae32]  bg-[url('/bgp.png')] ">
        <h2 className="sm:text-6xl text-4xl font-bold">Who we are</h2>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto py-16 sm:px-14 px-5 text-center">

        <p className="lg:text-lg text-sm leading-relaxed">
          Welcome to <span className="font-semibold text-[#72cd30] ">FFG</span>, your community-driven
          Gym platform! We’re passionate about bringing people together through exercise, whether it’s classic routines or fun,
          creative twists to keep things fresh.
        </p>
      </div>

      {/* Core Values */}
      <div className="max-w-6xl mx-auto text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-20">
        <div className="border-[0.5px]  border-white bg-[#9cff32]/10 shadow-md p-6  rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl  font-bold mb-2">Our Mission</h3>
          <p className="font-light">
            To connect food lovers and home cooks by sharing recipes, ideas,
            and experiences that bring joy to the table.
          </p>
        </div>

        <div className="border-[0.5px]  border-white bg-[#9cff32]/10 shadow-md p-6 rounded-2xl  hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">What We Offer</h3>
          <p className="font-light">
            A platform where you can explore new recipes, share your own, and
            discover cooking tips to level up your kitchen skills.
          </p>
        </div>

        <div className="border-[0.5px]  border-white bg-[#9cff32]/10 shadow-md p-6 rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-bold  mb-2">Our Vision</h3>
          <p className="font-light">
            To become the go-to community for authentic and innovative recipes,
            where culture and creativity meet on a plate.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-6xl mx-auto pt-32 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Meet Our Trainers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { name: "Michael Ade", role: "Head Coach", img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fHww" },
            { name: "Sarah Johnson", role: "Strength & Conditioning Coach", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
            { name: "David Lee", role: "Personal Trainer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },

          ].map((member, i) => (
            <div key={i} className="bg-[#ededed] shadow-md rounded-2xl overflow-hidden hover:shadow-xl text-center">
              <img src={member.img} alt={member.name} className="w-full h-56 object-cover aspect-square" />
              <div className="py-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 font-light">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="text-center mt-16 bg-[#647b4c]  py-16 px-6">
        <a href="/gym-packages" className="text-2xl md:text-3xl font-bold text-white mb-4">Join the Community</a>
        <p className="font-light mb-10">Share your recipes, explore new ideas, and be part of a growing family of food lovers.</p>
        <a href="/signup" className="px-6 py-2 rounded-full font-semibold text-white bg-black transition">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
