'use client'
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { Trainer } from "@/types/plan";

export default function AboutUs(){
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  async function fetchTrainers() {
    try {
      const res = await axios.get("https://ffg-backend-p30k.onrender.com/api/admin/trainers");
      setTrainers(res.data.data)
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchTrainers();
  }, []);

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
      <div className="max-w-6xl mx-auto text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 md:px-20">
        <div className="border-[0.5px]  border-white bg-[#9cff32]/10 shadow-md p-6  rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl  font-bold mb-2">Our Mission</h3>
          <p className="font-light">
           To empower individuals to achieve their fitness goals through dedication,
      proper guidance, and a supportive community.
          </p>
        </div>

        <div className="border-[0.5px]  border-white bg-[#9cff32]/10 shadow-md p-6 rounded-2xl  hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">What We Offer</h3>
          <p className="font-light">
            State-of-the-art gym equipment, expert trainers, personalized workout
      programs, and group classes designed to keep you motivated.
          </p>
        </div>

        <div className="border-[0.5px]  border-white bg-[#9cff32]/10 shadow-md p-6 rounded-2xl hover:shadow-xl transition">
          <h3 className="text-xl font-bold  mb-2">Our Vision</h3>
          <p className="font-light">
            To build a fitness culture where strength, health, and discipline are a
      lifestyle — inspiring transformation in and out of the gym.
          </p>
        </div>
      </div>

      {/* Meet the Team */}
      <div className="max-w-6xl mx-auto pt-32 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Meet Our Trainers</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {trainers.map((member) => (
            <div key={member._id} className="bg-[#ededed] shadow-md rounded-2xl overflow-hidden hover:shadow-xl text-center">
              <img src={member.profile_picture} alt={member.fullname} className="w-full h-56 object-cover aspect-square" />
              <div className="py-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{member.fullname}</h3>
                <p className="text-gray-500 font-light">{member.field}</p>
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

