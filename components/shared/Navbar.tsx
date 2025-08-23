'use client'
import Image from "next/image"
import { useState } from "react"


function Navbar() {
  const [DropDown, setDropDown] = useState(false)

  function HandleDropdown() {
    setDropDown(!DropDown)
  }


  return (
    <div className="flex flex-row bg-black sticky top-0 border-b b0rder-[0.5px] z-40 border-[#c9c3c3] items-center justify-between py-5 md:px-6 px-4 lg:px-8">
      <a href="/"><Image className="md:ml-8 font-bold sm:w-12 sm:h-12 w-6 h-6" width={40} height={40} alt="logo" src='https://img.icons8.com/?size=100&id=Y3RVb9560HW2&format=png&color=ffffff' /></a>
      <div className="flex gap-2 sm:gap-7 text-white text-[9px] cursor-pointer sm:text-[14px] md:text-md items-center">
        <div className="flex flex-col relative">
          <div onClick={HandleDropdown} className="inline-flex items-center">
            Services
            <Image
              width={80}
              height={80}
              className="w-5 h-5 ml-1"
              src={DropDown ?"https://img.icons8.com/?size=100&id=86205&format=png&color=72cd30" : "https://img.icons8.com/?size=100&id=85018&format=png&color=72cd30" }
              alt="dropdown-icon"
            />

          </div>
          {DropDown &&
            <ul className="absolute top-full sm:w-36 w-24 left-0 mt-1 sm:text-[10px] text-[8px] text-[#303030] md:text-sm z-40 py-1 flex flex-col rounded-sm bg-slate-100 border border-[#101010]">
              <a href="/gym-packages"> <li className="px-5 py-2 hover:bg-[#e9e9e9]">Gym Packages</li> </a>
              <a href="/equipments"> <li className="px-5 py-2  hover:bg-[#e9e9e9]">Gym  Tools</li> </a>
            </ul>
          }
        </div>


        <a href="">About us</a>
        <a href="">Contact</a>
        <div className="bg-[#72cd30] px-6 py-2 rounded-full text-black"> Log in</div>
      </div>
    </div>


  )
}

export default Navbar