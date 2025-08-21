'use client'
import staricon from '../../public/stars.png'
import Image from 'next/image'

function HeroSection() {
  return (
    <>
      <div className="bg-[url('/bg.jpg')] relative h-auto   bg-no-repeat bg-cover bg-center" >
        <div className="absolute inset-0 z-10  bg-black/60"></div>
        <div className="relative z-20 text-center py-16  sm:pt-40 sm:pb-32 sm:px-16  px-3">
          <h2 className="text-white font-bold text-xl sm:text-5xl">
            Crush your health and fitness <br /> goals in no time
          </h2>
          <h3 className="text-white text-[8px] lg:text-sm pt-1 sm:pt-3">
            Begin your journey to your dream body today
          </h3>
          <button className="sm:text-md text-xs font-bold text-black bg-[#72cd30] py-2 px-4 rounded-full mt-8">Start 7 day free trial</button>

          <div className="flex flew-col justify-center items-center gap-5 pt-6">
            <Image width={500} height={500} className='w-20 h-20' src={staricon} alt='staricon' />
            <div>
              <h3 className='rounded-3xl text-[12px] font-semibold text-black bg-white  p-[10px]'>105</h3>
            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default HeroSection