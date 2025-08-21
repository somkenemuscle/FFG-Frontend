import React from 'react'

export default function About() {
    return (
        <div className='py-20 flex flex-col justify-center items-center text-center'>
            <h4 className='px-6 py-2 text-md  border-[#4a6d25] border-[2px] rounded-full w-auto'>About FFG</h4>
            <div className='sm:px-36 px-8'>
                <h2 className='sm:text-5xl tracking-tighter text-2xl pt-10 font-bold '>Hi! We’re a local Fitness gym in Denver, Colorado.</h2>
                <h2 className='text-xs text-[#d0d0d0] font-medium py-8'>Fitness Gym was started by Alex and Sparky in 2012. It’s our mission to help people <br/> in Denver get fit, stay healthy, and live life on their terms without <br/> fitness being an obstacle.</h2>
            </div>

        </div>
    )
}
