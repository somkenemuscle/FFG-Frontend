import React from 'react'
import Image from 'next/image'
import starpng from '../../public/stars.png'
import { Plan } from '@/types/plan';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function () {
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
        <div className='bg-[#647b4c] px-5 py-32 text-center'>
            <h2 className='border-[1px] border-white rounded-full w-32 mx-auto px-4  py-2'>Membership</h2>
            {loading && <p>Loading membership plans...</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-16 max-w-7xl mx-auto">
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



            <div className='grid md:grid-cols-2 grid-cols-1 gap-8 max-w-4xl mx-auto'>
                <div className='rounded-2xl flex flex-col justify-center items-center px-5 border-[2px] pb-5 border-white bg-white/20'>
                    <Image width={80} height={80} alt='star' className='' src={starpng} />
                    <h2>
                        "6 months after joining I lost 15lbs and I’m getting stronger."
                    </h2>
                    <Image width={80} height={80} alt='star' className='w-12 h-12 my-2' src='https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000' />
                </div>
                <div className='rounded-2xl flex flex-col justify-center items-center px-5 border-[2px] pb-5 border-white bg-white/20'>
                    <Image width={80} height={80} alt='star' className='' src={starpng} />
                    <h2>
                        "I've gotten so much stronger after joining it's insane. My deadlift increased by 65lbs."
                    </h2>
                    <Image width={80} height={80} alt='star' className='w-12 h-12 my-2' src='https://img.icons8.com/?size=100&id=z-JBA_KtSkxG&format=png&color=000000' />
                </div>
            </div>
        </div>

    )
}
