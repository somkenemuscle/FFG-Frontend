"use client"
import React from 'react'
import Image from 'next/image'
import axios from 'axios';
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react';
import { Plan, MembershipPlan } from '@/types/plan';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation'


export default function () {
    const [plan, setPlan] = useState<Plan | null>(null);
    const [loading, setLoading] = useState(false);
    const { id } = useParams<{ id: string }>();
    const router = useRouter()

    async function fetchPlan(planId: string) {
        setLoading(true);
        try {
            const res = await axios.get(
                `https://ffg-backend-p30k.onrender.com/api/admin/membership-plans/${planId}`
            );
            setPlan(res.data.data);
        } catch (error) {
            console.error("Error fetching plan:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (id) {
            fetchPlan(id);
        }
    }, [id]);


    const handleBooking = async (membershipPlanId: string) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("You need to log in first.");
                return;
            }

            const response = await axios.post(
                "https://ffg-backend-p30k.onrender.com/api/booking",
                { membershipPlanId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log("Booking created:", response.data);
            toast.success("Booking successful!");
            router.push('/')
        } catch (error: any) {
            console.error("Booking error:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Booking failed");
        }
    };

    return (
        <div className='flex my-16 flex-col sm:px-14 px-5 md:gap-8 gap-5 max-w-2xl mx-auto'>
            {loading && <p>Loading confirmation...</p>}

            {plan && (
                <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-black max-w-md mx-auto">
                    {/* Header */}
                    <h5 className="text-2xl font-semibold mb-6 text-center">
                        Session with{" "}
                        <span className="text-[#72cd30] font-bold">FFG</span>
                    </h5>

                    {/* Plan Info */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-gray-700">Plan:</h2>
                            <h3 className="text-gray-900">{plan.name}</h3>
                        </div>

                        <div className="flex justify-between items-center">
                            <h2 className="font-semibold text-gray-700">Duration:</h2>
                            <h3 className="text-gray-900">
                                {plan.durationInMonths}{" "}
                                {plan.durationInMonths === 1 ? "month" : "months"}
                            </h3>
                        </div>

                        <div>
                            <h2 className="font-semibold text-gray-700 mb-1">Description</h2>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {plan.description}
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="my-6 border-gray-300" />

                    {/* Price */}
                    <div className="flex justify-between items-center text-lg font-medium mb-6">
                        <span className="text-gray-700">Total:</span>
                        <span className="text-black font-bold">₦{Number(plan.price).toLocaleString()}</span>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => handleBooking(plan._id)}
                        className="w-full py-3 rounded-lg bg-black text-white font-semibold text-sm hover:bg-gray-800 transition"
                    >
                        Confirm Booking
                    </button>
                </div>
            )}

        </div>
    )
}
