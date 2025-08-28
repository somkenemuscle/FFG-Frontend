'use client'
import Image from "next/image"
import { useState, useEffect } from "react";
import axios from "axios";
import { Plan } from "@/types/plan"

function page() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch membership plans
  async function fetchPlans() {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://ffg-backend-p30k.onrender.com/api/admin/membership-plans"
      );
      setPlans(res.data.data);
    } catch (error) {
      console.error("Error fetching plans:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <div className="my-20 px-8 w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold ">Membership Plans</h2>
      <p className="text-center text-xs pt-2 text-[#d0d0d0]">Looking to complement your routine with group training or drop into a few classes? <br /> Check out our class pass options below.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  py-14 gap-3 lg:gap-5">
        {loading && <p></p>}

        {plans.map((plan, idx) => (
          <div
            key={plan._id}
            className="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col p-8 relative"
          >
            {/* Highlight Popular */}
            {idx === 1 && (
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#465734] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                Most Popular
              </span>
            )}

            {/* Title */}
            <h2 className="font-bold text-2xl text-center mb-4">{plan.name}</h2>

            {/* Price */}
            <div className="text-center mb-6">
              <span className="text-4xl font-extrabold text-[#465734]">
                ${Number(plan.price).toLocaleString()}
              </span>
              <p className="text-sm text-gray-500 mt-1">
                billed every {plan.durationInMonths} month(s)
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 flex-1">
              {[
                "All Classes",
                "All members events",
                "Full gym access",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#465734]/10 text-[#465734]">
                    ✓
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={`/book-plan/${plan._id}`}
              className="mt-8 inline-block text-center bg-[#465734] hover:bg-[#364427] text-white font-semibold py-3 rounded-xl transition"
            >
              Start {plan.name}
            </a>
          </div>
        ))}
      </div>

      <section className="text-left pt-12">
        <h2 className="text-4xl font-bold text-[#9cff32]">Why Choose Us?</h2>
        <p className="text-sm pt-2 text-[#d0d0d0]">Our commitment to your wellness goes beyond just classes and training sessions. Discover the unique <br /> benefits that set us apart and ensure you have the best experience on your wellness journey.
        </p>
      </section>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8  items-stretch  mx-auto mt-20 mb-28'>
        <div className='rounded-2xl flex flex-col justify-center py-12  px-5 border-[0.5px]  border-white bg-[#9cff32]/10'>
          <Image width={40} height={40} alt="calendar" className="w-10 h-10 mb-4 bg-white p-2 rounded-full" src='https://img.icons8.com/?size=100&id=vwGXRtPWrZSn&format=png&color=000000' />
          <h2 className="font-bold text-2xl italic">Flexible Scheduling</h2>
          <p className="pt-2 text-sm font-light">
            Adapt your fitness routine to your busy life with our flexible scheduling options.
          </p>
        </div>

        <div className='rounded-2xl flex flex-col justify-center py-12  px-5 border-[0.5px] border-white bg-[#9cff32]/10'>
          <Image width={40} height={40} alt="calendar" className="w-10 h-10 mb-4 bg-white p-2 rounded-full" src='https://img.icons8.com/?size=100&id=74239&format=png&color=000000' />
          <h2 className="font-bold text-2xl italic">Fitness Training</h2>
          <p className="pt-2 text-sm font-light">
            Personalized training programs tailored to your fitness goals. Focus on strength and flexibility.
          </p>
        </div>

        <div className='rounded-2xl flex flex-col justify-center py-12  px-5 border-[0.5px]  border-white bg-[#9cff32]/10'>
          <Image width={40} height={40} alt="calendar" className="w-10 h-10 mb-4 bg-white p-2 rounded-full" src='https://img.icons8.com/?size=100&id=8xdIpCljn695&format=png&color=000000' />
          <h2 className="font-bold text-2xl italic">Wellness Laps</h2>
          <p className="pt-2 text-sm font-light">
            Explore workshops on mindfulness, stress relief, and holistic wellness. Suitable for all levels of experience.
          </p>
        </div>


      </div>

    </div>
  )
}

export default page