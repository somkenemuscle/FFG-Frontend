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
        <div className='my-14 sm:px-14 px-5'>
            {loading && <p></p>}
            <h2 className='text-center my-4 font-extrabold text-2xl'>Booking History</h2>
            <div className='flex flex-col  md:gap-8 gap-6 max-w-3xl mx-auto mb-36'>
                {history.map((booking) => (
                    <div
                        key={booking._id}
                        className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        {/* Status */}
                        <div className="flex items-center justify-between mb-4">
                            <span
                                className={`px-3 py-1 text-xs font-semibold rounded-full 
        ${booking.status === "active"
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-red-500/20 text-red-400"
                                    }`}
                            >
                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>

                            {/* Pulse dot */}
                            <span className="relative flex items-center">
                                <span
                                    className={`absolute inline-flex h-3 w-3 animate-ping rounded-full 
            ${booking.status === "active" ? "bg-green-400" : "bg-red-400"} 
            opacity-75`}
                                ></span>
                                <span
                                    className={`relative inline-flex h-3 w-3 rounded-full 
            ${booking.status === "active" ? "bg-green-500" : "bg-red-500"}`}
                                ></span>
                            </span>
                        </div>

                        {/* Booking Details */}
                        <div className="space-y-4">
                            {/* Date */}
                            <div className="flex items-center gap-2">
                                <Image
                                    width={24}
                                    height={24}
                                    alt="calendar"
                                    className="opacity-80"
                                    src="https://img.icons8.com/?size=100&id=vwGXRtPWrZSn&format=png&color=ffffff"
                                />
                                <h3 className="text-sm font-medium text-white">
                                    {new Date(booking.createdAt).toLocaleDateString("en-US", {
                                        weekday: "short",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </h3>
                            </div>

                            {/* Time */}
                            <div className="flex items-center gap-2">
                                <Image
                                    width={24}
                                    height={24}
                                    alt="clock"
                                    className="opacity-80"
                                    src="https://img.icons8.com/?size=100&id=i0JZUzTEcNXe&format=png&color=ffffff"
                                />
                                <h3 className="text-sm text-gray-200">10:00am - 7:00pm</h3>
                            </div>

                            {/* Duration */}
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-sm">Duration:</span>
                                <h3 className="font-medium text-white">
                                    {booking.membershipPlan.durationInMonths}{" "}
                                    {booking.membershipPlan.durationInMonths === 1 ? "month" : "months"}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2 text-gray-300">
                                <span className="text-sm">Price:</span>
                                <h3 className="text-[#72cd30] font-semibold">
                                    ₦{Number(booking.membershipPlan.price).toLocaleString()}
                                </h3>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="my-5 border-white/10" />

                        {/* Description */}
                        <div className="text-gray-300">
                            <h2 className="text-sm font-semibold mb-1 text-white">Description</h2>
                            <p className="text-sm leading-relaxed text-gray-300">
                                {booking.membershipPlan.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
