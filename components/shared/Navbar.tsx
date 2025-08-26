'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { useFullNameStore } from "@/store/useFullnameStore"


function Navbar() {
  const [DropDown, setDropDown] = useState(false)
  const [UserDropDown, setUserDropDown] = useState(false)
  const [fullName, setFullName] = useState('');
  // const fullName = useFullNameStore((state) => state.fullName);


  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedName = localStorage.getItem("fullname");
    if (token && storedName) {
          setFullName(storedName)
    } 
  }, [])


  function HandleDropdown() {
    setDropDown(!DropDown)
  }

  function HandleUserDropdown() {
    setUserDropDown(!UserDropDown)
  }



  return (
    <div className="flex flex-row bg-black sticky top-0 border-b b0rder-[0.5px] z-40 border-[#c9c3c3]  items-center justify-between py-5 md:px-6 px-4 lg:px-8">
      <a href="/"><Image className=" font-bold sm:w-11 sm:h-11 w-6 h-6" width={40} height={40} alt="logo" src='https://img.icons8.com/?size=100&id=Y3RVb9560HW2&format=png&color=ffffff' /></a>
      <div className="flex flex-row gap-3 sm:gap-7 text-white text-[8px] cursor-pointer sm:text-[14px] md:text-md items-center">
        <div className="flex flex-col relative">
          <div onClick={HandleDropdown} className="inline-flex items-center">
            Services
            <Image
              width={80}
              height={80}
              className="w-5 h-5 ml-1"
              src={DropDown ? "https://img.icons8.com/?size=100&id=86205&format=png&color=72cd30" : "https://img.icons8.com/?size=100&id=85018&format=png&color=72cd30"}
              alt="dropdown-icon"
            />

          </div>

          {DropDown &&
            <ul className="absolute top-full sm:w-36 w-24 left-0 mt-1 sm:text-[10px] text-[8px] px-2 text-[#303030] md:text-sm z-40 py-2 flex flex-col rounded-[6px] bg-slate-100">
              <a href="/gym-packages"> <li className="px-5 py-2 rounded-[4px] hover:bg-gray-200">Gym Plans</li> </a>
              <hr className="border-gray-400 my-1" />
              <a href="/equipments"> <li className="px-5 py-2 rounded-[4px] hover:bg-gray-200">Gym  Tools</li> </a>
            </ul>
          }

        </div>


        <a href="/about">About us</a>
        <a href="/contact">Contact</a>

        {fullName ?
          <div className="flex flex-col relative">
            <div onClick={HandleUserDropdown} className="inline-flex items-center">
              Hi, {fullName}
              <Image
                width={80}
                height={80}
                className="w-5 h-5 ml-1"
                src={UserDropDown ? "https://img.icons8.com/?size=100&id=86205&format=png&color=72cd30" : "https://img.icons8.com/?size=100&id=85018&format=png&color=72cd30"}
                alt="dropdown-icon"
              />

            </div>

            {UserDropDown &&
              <ul className="absolute top-full w-24 mx-auto left-0 mt-1 sm:text-[10px] text-[8px] px-1 text-[#303030] md:text-sm z-40 py-1 flex flex-col rounded-[4px] bg-slate-100">
                <a href="/profile/booking-history"> <li className="px-5 py-2 rounded-[2px] hover:bg-gray-200">History</li> </a>
              </ul>
            }

          </div>

          :
          <a href="/signup" className="bg-[#72cd30] px-6 py-2 rounded-full text-black">Log in</a>

        }

      </div>
    </div>


  )
}

export default Navbar