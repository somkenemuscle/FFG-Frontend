import React from 'react'

export default function ServicesList() {
    return (
        <div className='my-28 px-8 sm:px-10'>
            <h2 className='sm:text-5xl text-2xl md:mb-20 mb-14 font-bold text-center'>We offer something<br/> for everybody</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2   pb-16 lg:grid-cols-4 gap-8'>

                <div className="relative bg-[url('/img1.jpg')] bg-no-repeat rounded-2xl bg-cover bg-center aspect-square">
                    <div className="absolute inset-0 rounded-2xl bg-[#4a6d25]/45 z-10"></div>

                    <div className="relative z-30 flex items-center text-center justify-center h-full">
                        <h2 className="text-2xl font-bold px-4 text-white">
                            CrossFit Group Class
                        </h2>
                    </div>
                </div>

                <div className="relative bg-[url('/img2.jpg')] rounded-2xl bg-no-repeat bg-cover bg-center aspect-square">
                    <div className="absolute inset-0 rounded-2xl bg-[#4a6d25]/45  z-10"></div>

                    <div className="relative z-30 flex items-center text-center justify-center h-full">
                        <h2 className="text-2xl font-bold px-4 text-white">Strength Training</h2>
                    </div>
                </div>

                <div className="relative bg-[url('/img3.jpg')] rounded-2xl bg-no-repeat bg-cover bg-center aspect-square">
                    <div className="absolute inset-0 rounded-2xl  bg-[#4a6d25]/45 z-10"></div>

                    <div className="relative z-30 flex items-center text-center justify-center h-full">
                        <h2 className="text-2xl font-bold px-4 text-white">Personal Training</h2>
                    </div>
                </div>

                <div className="relative bg-[url('/img4.jpg')] rounded-2xl bg-no-repeat bg-cover bg-center aspect-square">
                    <div className="absolute inset-0 rounded-2xl  bg-[#4a6d25]/45 z-10"></div>

                    <div className="relative z-30 flex items-center text-center justify-center h-full">
                        <h2 className="text-2xl font-bold px-4 text-white">Members Only Events</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}
