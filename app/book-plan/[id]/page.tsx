"use client"
import React from 'react'
import Image from 'next/image'
import axios from 'axios';
import toast from 'react-hot-toast'
import { useState, useEffect } from 'react';
import { Plan, MembershipPlan } from '@/types/plan';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation'


export default function  () {
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
                <div className='py-6 rounded-2xl md:text-md text-black  bg-white px-5'>
                    <h5 className=' pb-3 font-semibold text-2xl'>Session with <span className='text-[#72cd30] font-bold'>FFG</span></h5>
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-row items-center gap-2'>
                            <h2 className='font-semibold'>Plan:</h2>
                            <h3>{plan.name}</h3>
                        </div>
                        <div className='flex flex-row items-center pb-5  gap-2'>
                            <h2 className='font-semibold'>Duration:</h2>
                            <h3>{plan.durationInMonths} {plan.durationInMonths === 1 ? "month" : "months"}</h3>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <h2 className='font-semibold'>Description</h2>
                            <h3 className='text-[#424242] font-light text-md'>{plan.description}</h3>
                        </div>
                        <hr className=' bg-gray-500 my-3' />
                        <div className='flex flex-row  justify-between items-center px-4'>
                            <div className='font-semibold'>Total: </div>
                            <div>$ {plan.price}</div>
                        </div>

                        <button onClick={() => handleBooking(plan._id)} className="text-sm font-bold cursor-pointer mt-10  bg-black text-white px-5 rounded-full py-2">Confirm booking</button>

                    </div>
                </div>
            )}

        </div>
    )
}
