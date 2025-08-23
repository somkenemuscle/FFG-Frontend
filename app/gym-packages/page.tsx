'use client'
import Image from "next/image"

function page() {
  return (
    <div className="my-20 px-8">
      <h2 className="text-center text-4xl font-bold ">Membership Plans</h2>
      <p className="text-center text-xs pt-2 text-[#d0d0d0]">Looking to complement your routine with group training or drop into a few classes? <br /> Check out our class pass options below.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  py-14 gap-3 lg:gap-5">

        <div className='rounded-2xl bg-white text-black flex flex-col justify-center items-center px-5 pt-16 pb-14'>
          <h2 className='font-bold text-3xl'>1 Month Plan</h2>
          <div className='flex flex-row items-center justify-center pt-5'><h2 className='text-[#465734] font-bold text-4xl'>$165 </h2> <sub className='text-xl font-bold'>{''}/mo</sub> </div>
          <ul className=' py-10 text-md space-y-2 text-black'>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />All Classes</li>
            <li className='flex flex-row items-center gap-5  md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />All members events</li>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />Full gym access</li>
          </ul>
          <h4 className='text-md text-[#979494] pb-8'>Changes every month unless you cancel</h4>
          <h2 className='text-sm font-bold bg-black text-white px-5 rounded-full py-2'>Join Membership</h2>

        </div>


        <div className='rounded-2xl bg-[#647b4c]  text-white flex flex-col justify-center items-center px-5 pt-16 pb-14'>
          <h2 className='font-bold text-center  text-3xl'>6 Months Plan</h2>
          <div className='flex flex-row items-center justify-center pt-5'><h2 className='text-black font-bold text-4xl'>$145 </h2> <sub className='text-xl font-bold'>{''}/mo</sub> </div>
          <ul className='py-10 text-md space-y-2'>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#000000]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=000000' />All Classes</li>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#000000]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=000000' />All members events</li>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#000000]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=000000' />Full gym access</li>
          </ul>
          <h4 className='text-md text-[#f1f1f1] pb-8'>Changes every 6 months unless you cancel</h4>
          <h2 className='text-sm font-bold bg-white text-black px-5 rounded-full py-2'>Join Membership</h2>

        </div>


        <div className='rounded-2xl bg-white text-black flex flex-col justify-center items-center px-5 pt-16 pb-14'>
          <h2 className='font-bold text-black text-3xl'>1 year Plan</h2>
          <div className='flex flex-row items-center justify-center pt-5'><h2 className='text-[#465734] font-bold text-4xl'>$125 </h2> <sub className='text-xl font-bold'>{''}/mo</sub> </div>
          <ul className=' py-10 text-md space-y-2 text-black'>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'> <Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />All Classes</li>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />All members events</li>
            <li className='flex flex-row items-center gap-5 md:gap-3 lg:gap-5'><Image width={40} height={40} alt='checkmark' className='p-2 border-[2px] w-8 h-8 rounded-full border-[#465734]' src='https://img.icons8.com/?size=100&id=e0QmzRlv9YWo&format=png&color=465734' />Full gym access</li>
          </ul>
          <h4 className='text-md text-[#979494] pb-8'>Changes every year unless you cancel</h4>
          <h2 className='text-sm font-bold bg-black text-white px-5 rounded-full py-2'>Join Membership</h2>

        </div>
      </div>

      <section className="text-left pt-12">
        <h2 className="text-4xl font-bold text-[#9cff32]">Why Choose Us?</h2>
        <p className="text-sm pt-2 text-[#d0d0d0]">Our commitment to your wellness goes beyond just classes and training sessions. Discover the unique <br /> benefits that set us apart and ensure you have the best experience on your wellness journey.
        </p>
      </section>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8  items-stretch  mx-auto mt-20 mb-28'>
        <div className='rounded-2xl flex flex-col justify-center py-12  px-5 border-[0.5px]  border-white bg-[#9cff32]/10'>
         <Image width={40} height={40} alt="calendar" className="w-10 h-10 mb-4 bg-white p-2 rounded-full" src='https://img.icons8.com/?size=100&id=vwGXRtPWrZSn&format=png&color=000000'/>
          <h2 className="font-bold text-2xl italic">Flexible Scheduling</h2>
          <p className="pt-2 text-sm font-light">
            Adapt your fitness routine to your busy life with our flexible scheduling options.
          </p>
        </div>

        <div className='rounded-2xl flex flex-col justify-center py-12  px-5 border-[0.5px] border-white bg-[#9cff32]/10'>
                 <Image width={40} height={40} alt="calendar" className="w-10 h-10 mb-4 bg-white p-2 rounded-full" src='https://img.icons8.com/?size=100&id=74239&format=png&color=000000'/>
          <h2 className="font-bold text-2xl italic">Fitness Training</h2>
          <p className="pt-2 text-sm font-light">
            Personalized training programs tailored to your fitness goals. Focus on strength and flexibility.
          </p>
        </div>

        <div className='rounded-2xl flex flex-col justify-center py-12  px-5 border-[0.5px]  border-white bg-[#9cff32]/10'>
                 <Image width={40} height={40} alt="calendar" className="w-10 h-10 mb-4 bg-white p-2 rounded-full" src='https://img.icons8.com/?size=100&id=8xdIpCljn695&format=png&color=000000'/>
          <h2 className="font-bold text-2xl italic">Wellness Laps</h2>
          <p className="pt-2 text-sm font-light">
           Explore workshops on mindfulness, stress relief, and holistic wellness. Suitable for all levels of experience.
          </p>
        </div>


      </div>

    </div>
  )
}

export default page