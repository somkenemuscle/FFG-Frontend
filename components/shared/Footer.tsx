'use client'
import Image from "next/image"
 import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email); 
    setEmail(""); 
  };


    return (
        <div className="pt-20 border-t-[0.5px] border-t-white">
        <div className=" ">
                <div className="flex pb-8 md:flex-row md:justify-between  flex-col sm:px-8 px-5 gap-5">
                <div className="flex flex-col  font-medium">
                    <h2 className="text-white text-lg md:text-3xl "> Ready to unleash the <br /> potential of yourself?</h2>
                    <h5 className="text-[#9cff32] text-xl md:text-3xl  font-bold" >Get in Touch.</h5>
                </div>
                <div className="flex flex-col justify-center  ">
                    <h2 className="text-2xl font-bold text-white">Get unspammy deals and updates</h2>
                    <form onSubmit={handleSubmit}>
                        <input id="myInput" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white text-[#858282] w-full px-3 py-2 mt-4 text-md" placeholder="Enter Email address" type="text" />
                    </form>

                    <div className="flex flex-row items-center gap-3 pt-10">
                        <Image width={60} height={60} alt="facebooklogo" className="w-8 h-8" src='https://img.icons8.com/?size=100&id=118468&format=png&color=ffffff' />
                        <Image width={60} height={60} alt="instagramlogo" className="w-8 h-8" src='https://img.icons8.com/?size=100&id=Ns8Oze9tK1Y7&format=png&color=ffffff' />
                        <Image width={60} height={60} alt="twitterlogo" className="w-7 h-7" src='https://img.icons8.com/?size=100&id=jlpBF1fJe9fs&format=png&color=ffffff' />
                    </div>
                </div>

            </div>

            <div className="border-t-[0.5px] flex flex-col md:flex-row md:justify-between  px-8 md:gap-5  text-center text-xs py-5 text-[#d0d0d0] border-t-[#636262] ">
                <p>&#169; 2025 FFG. All rights reserved</p>
                <div className="flex flex-row items-center gap-3 justify-center">
                    <p className="underline underline-offset-0">privacy policy</p>
                    <p className="underline underline-offset-0">terms of use</p>
                </div>

            </div>
            </div>
            
        </div>

    )
}

export default Footer