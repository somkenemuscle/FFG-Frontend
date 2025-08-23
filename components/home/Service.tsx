import React from 'react'
import Image from 'next/image'
import img5 from '../../public/img5.jpg'
import img6 from '../../public/img6.jpg'
import img7 from '../../public/img7.jpg'
import img8 from '../../public/img8.jpg'

export default function Service() {
  return (
    <div className='flex flex-col gap-y-44 pb-20 sm:px-10 xl:px-0 px-5 '>

      <div className='flex flex-col gap-4 md:flex-row items-center w-full'>
        <div className=' xl:px-8 md:w-1/2 w-full '>
          <button className='px-4 py-2 text-md border-[#4a6d25] border-[0.5px] rounded-full'>Group CrossFit Classes</button>
          <h2 className='lg:text-5xl text-3xl font-bold pt-5'>Get fit while having fun with our group CrossFit classes</h2>
          <ul className='text-lg py-12 text-md space-y-5 text-white'>
            <li className='flex flex-row items-center gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Just 30 minutes long</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' /> Warm up & workout included</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />  Fun is guaranteed</li>
          </ul>
        </div>
        <Image width={700} height={500} alt='img5' className='lg:rounded-l-2xl lg:rounded-r-none rounded-2xl  w-full md:w-1/2' src={img5} />
      </div>


      <div className='flex flex-col-reverse gap-4 md:flex-row items-center w-full'>
        <Image width={700} height={500} alt='img5' className='lg:rounded-r-2xl lg:rounded-l-none rounded-2xl  w-full md:w-1/2' src={img6} />
        <div className='xl:px-8 md:w-1/2 w-full'>
          <button className='px-4 py-2 text-md border-[#4a6d25] border-[0.5px] rounded-full'>Strength Training</button>
          <h2 className='lg:text-5xl text-3xl font-bold pt-5'>Crush any strength program with our suite of strength equipment</h2>
          <ul className='text-lg py-12 text-md space-y-5 text-white'>
            <li className='flex flex-row items-center gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Fully fitted powerlifting and strongman section</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' /> Olympic lifting platforms, weights, and bars</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Dumbells ranging 5lbs-250lbs</li>
          </ul>
        </div>
      </div>



      <div className='flex flex-col gap-4 md:flex-row items-center w-full'>
        <div className='xl:px-8 md:w-1/2 w-full '>
          <button className='px-4 py-2 text-md border-[#4a6d25] border-[0.5px] rounded-full'>Personal Training</button>
          <h2 className='lg:text-5xl  text-3xl font-bold pt-5'>Be guided every step of the way with one of our world class coaches</h2>
          <div className='bg-[#171717] text-neutral-200 px-3 py-3 rounded-xl mt-10 font-medium text-sm'>We have coaches in each one of the following categories :</div>
          <ul className='text-lg text-md py-12 space-y-5 text-white'>
            <li className='flex flex-row items-center gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Weight Loss</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Competitive CrossFit</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Powerlifting</li>
          </ul>
        </div>
        <Image width={700} height={500} alt='img5' className='lg:rounded-l-2xl lg:rounded-r-none rounded-2xl w-full md:w-1/2' src={img7} />
      </div>



      <div className='flex flex-col-reverse gap-4 md:flex-row items-center w-full'>
        <Image width={700} height={500} alt='img5' className='lg:rounded-r-2xl lg:rounded-l-none rounded-2xl w-full md:w-1/2' src={img8} />
        <div className='xl:px-8 md:w-1/2 w-full'>
          <button className='px-4 py-2 text-md border-[#4a6d25] border-[0.5px] rounded-full'>Member Only Events</button>
          <h2 className='lg:text-5xl text-3xl font-bold pt-5'>Make new friends and get competitive with fun member events</h2>
          <ul className='text-lg py-12 text-md space-y-5 text-white'>
            <li className='flex flex-row items-center gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Friendly competitions</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Monthly Challenges</li>
            <li className='flex flex-row items-center gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#9cff32]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=9cff32' />Summer potlucks and games</li>
          </ul>
        </div>
      </div>



    </div>



  )
}
