'use client'
import Image from "next/image"



function page() {
  return (
    <div className="mb-20">
      <div className="text-center py-16 ">
        <h2 className="sm:text-6xl text-[#72cd30] text-4xl font-bold">Current Gym Plan</h2>
      </div>
      <div className='rounded-2xl bg-white max-w-3xl mx-auto text-black flex flex-col justify-center items-center px-5 pt-16 pb-14'>
        <h2 className='font-bold text-black text-2xl sm:text-5xl'>1 year Plan</h2>
        <div className='flex flex-row items-center justify-center pt-5'><h2 className='text-[#465734] font-bold text-3xl sm:text-4xl'>$125 </h2> <sub className='text-xl sm:text-2xl font-bold'>{''}/mo</sub> </div>
        <ul className=' py-10 text-md sm:text-xl space-y-2 text-black'>
          <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />All Classes</li>
          <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />All members events</li>
          <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />Full gym access</li>
        </ul>
      </div>

    </div>
  )
}

export default page