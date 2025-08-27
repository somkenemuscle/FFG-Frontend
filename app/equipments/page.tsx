'use client'
import Image from "next/image"
import { useState, useEffect } from "react";
import axios from "axios";
import { GymTools } from "@/types/plan";


function page() {
  const [tools, setTools] = useState<GymTools[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchTrainers() {
    setLoading(true);
    try {
      const res = await axios.get("https://ffg-backend-p30k.onrender.com/api/admin/equipments");
      setTools(res.data.data)
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrainers();
  }, []);

  return (
    <div className="">
      <div className="text-center py-24 bg-[#66ae32]  bg-[url('/bgp.png')] ">
        <h2 className="sm:text-6xl text-4xl font-bold">Collection</h2>
        <p className="">Sport Accessories</p>
      </div>
      {loading && <p>Loading confirmation...</p>}
      {tools && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   items-center justify-center py-20 gap-12 sm:px-14 px-5">
          {tools.map((tool) => (
            <div key={tool._id} className="relative overflow-hidden h-[300px]">
              <Image
                width={800}
                height={800}
                className="object-cover  h-full rounded-2xl w-full"
                alt="eqp1"
                src={tool.image}
              />

              <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t  from-black via-black/80 to-transparent rounded-2xl">
                <div className="px-4 absolute bottom-0">
                  <div className="pb-8">
                    <h4 className="sm:text-3xl text-xl font-bold">{tool.name}</h4>

                  </div>

                </div>
              </div>
            </div>

          ))
          }

        </div>
      )}
    </div>


  )
}

export default page