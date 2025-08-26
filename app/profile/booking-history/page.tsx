'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plan } from '@/types/plan';

export default function () {
    const [history, setHistory] = useState<Plan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchBookings() {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("User is not authenticated");

            const response = await axios.get(
                "https://ffg-backend-p30k.onrender.com/api/booking",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setHistory(response.data.data);
        } catch (err: any) {
            setError(err.response?.data?.message || err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchBookings();
    }, []);


    if (error) return <p>Error: {error}</p>;

    return (
        <div className='my-14 sm:px-14 px-5 '>
            {loading && <p>Loading booking plans...</p>}
            <div className='flex flex-col  md:gap-8 gap-6 max-w-3xl mx-auto'>
                {history.map((booking) => (
                    <div key={booking._id} className='pt-5 pb-8 rounded-2xl md:text-md text-sm bg-white/20 px-5'>

                        <div className='flex flex-row items-center gap-2'>
                           {booking.status}
                            <span className="relative flex size-3 my-3">
                                <span className={`absolute inline-flex h-full w-full animate-ping rounded-full   ${booking.status === 'active' ? 'bg-green-400' : 'bg-red-400'} opacity-75`}></span>
                                <span className={`relative inline-flex size-3 rounded-full ${booking.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                            </span>
                        </div>


                        <div className='flex flex-col justify-center gap-2'>
                            <div className='flex flex-row items-center gap-2'>
                                <div>
                                    <Image width={40} height={40} alt="calendar" className="w-6 h-6" src='https://img.icons8.com/?size=100&id=vwGXRtPWrZSn&format=png&color=ffffff' />
                                </div>
                                <div>

                                    <h3>
                                        {new Date(booking.createdAt).toLocaleDateString("en-US", {
                                            weekday: "short",
                                            month: "short",
                                            day: "numeric",
                                        })}

                                    </h3>
                                </div>
                            </div>

                            <div className='flex flex-row items-center gap-2'>
                                <div>
                                    <Image width={40} height={40} alt="calendar" className="w-6 h-6" src='https://img.icons8.com/?size=100&id=i0JZUzTEcNXe&format=png&color=ffffff' />
                                </div>
                                <div>
                                    <h3>10:00am - 7:00pm</h3>
                                </div>
                            </div>

                            <div className='flex flex-row items-center gap-2'>
                                Duration: <h3>{booking.membershipPlan.durationInMonths} {booking.membershipPlan.durationInMonths === 1 ? "month" : "months"} </h3>
                            </div>

                            <div className='flex flex-row items-center gap-2'>
                                Price: <h3 className='text-[#72cd30] font-semibold'>${booking.membershipPlan.price}</h3>
                            </div>
                            <hr className='my-4' />

                            <div className='flex flex-col justify-center'>
                                <div className='flex text-[#e1e1e1] flex-col justify-center'>
                                    <h2 className='text-md font-bold'>Description</h2>
                                    <h3 className='text-[#e1e1e1] text-md'>{booking.membershipPlan.description}</h3>
                                </div>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
