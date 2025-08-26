import React from 'react'
import Image from 'next/image'
import starpng from '../../public/stars.png'
import { Plan } from '@/types/plan';
import { useState,useEffect } from 'react';
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  py-16 gap-3 lg:gap-5">
                {plans.map((plan) => (
                    <div key={plan._id} className="rounded-2xl bg-white text-black flex flex-col justify-center items-center px-5 pt-16 pb-14">
                        <h2 className='font-bold text-3xl'>{plan.name}</h2>
                        <div className='flex flex-row items-center justify-center pt-5'><h2 className="text-[#465734] font-bold text-4xl">${plan.price} </h2> <sub className='text-xl font-bold'>{''}/mo</sub> </div>
                        <ul className='py-10 text-md space-y-2 text-black'>
                            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full  border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=000000' />All Classes</li>
                            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full  border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=000000' />All members events</li>
                            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full  border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=000000' />Full gym access</li>
                        </ul>
                        <h4 className='text-md text-[#979494] pb-8'>Changes every {plan.durationInMonths} months unless you cancel</h4>
                        <a href={`/book-plan/${plan._id}`} className='text-sm font-bold bg-black text-white px-5 rounded-full py-2' >Start 7 day free trial</a>

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
