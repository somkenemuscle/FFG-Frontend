'use client'
import Image from "next/image"


function page() {
  return (
    <div className="">
      <div className="text-center py-24 bg-[#66903a] bg-[url('/bgp.png')] ">
        <h2 className="sm:text-6xl text-4xl font-bold">Collection</h2>
        <p className="">Sport Accessories</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   items-center justify-center py-20 gap-12 sm:px-14 px-5">

        <div className="relative overflow-hidden h-[300px]">
          <Image
            width={800}
            height={800}
            className="object-cover  h-full rounded-2xl w-full"
            alt="eqp1"
            src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3ltJTIwbWF0fGVufDB8fDB8fHww"
          />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t  from-black via-black/80 to-transparent rounded-b-xl">
            <div className="px-4 absolute bottom-0">
              <div className="pb-8">
                <h4 className="sm:text-3xl text-xl font-bold">Floor Mat</h4>
                <h4 className="sm:text-lg text-sm">$200</h4>
              </div>
              <button className="border-[0.5px] text-sm  cursor-pointer font-semibold hover:bg-white hover:text-black border-white px-4 py-2 mb-8">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden h-[300px]">
          <Image
            width={800}
            height={800}
            className="object-cover h-full w-full rounded-2xl"
            alt="eqp2"
            src="https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-xl">
            <div className="px-4 absolute bottom-0">
              <div className="pb-8">
                <h4 className="sm:text-3xl text-xl font-bold">Dumbells</h4>
                <h4 className="sm:text-lg text-sm">$160</h4>
              </div>
              <button className="border-[0.5px] text-sm font-semibold cursor-pointer hover:bg-white hover:text-black  border-white px-4 py-2 mb-8">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden h-[300px]">
          <Image
            width={800}
            height={800}
            className="object-cover  h-full w-full rounded-2xl"
            alt="eqp1"
            src="https://images.unsplash.com/photo-1618354691249-18772bbac3a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdhdGVyYm90dGxlJTIwZ3ltfGVufDB8fDB8fHww"
          />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-xl">
            <div className="px-4 absolute bottom-0">
              <div className="pb-8">
                <h4 className="sm:text-3xl text-xl font-bold">Water Bottle</h4>
                <h4 className="sm:text-lg text-sm">$60</h4>
              </div>
              <button className="border-[0.5px] text-sm font-semibold hover:bg-white hover:text-black cursor-pointer border-white px-4 py-2 mb-8">Buy Now</button>
            </div>
          </div>
        </div>

          <div className="relative overflow-hidden h-[300px]">
          <Image
            width={800}
            height={800}
            className="object-cover  h-full w-full rounded-2xl"
            alt="eqp1"
            src="https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzaXN0YW5jZSUyMGJhbmR8ZW58MHx8MHx8fDA%3D"
          />

          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black via-black/80 to-transparent rounded-b-xl">
            <div className="px-4 absolute bottom-0">
              <div className="pb-8">
                <h4 className="sm:text-3xl text-xl font-bold">Resistance Band</h4>
                <h4 className="sm:text-lg text-sm">$10</h4>
              </div>
              <button className="border-[0.5px] text-sm font-semibold hover:bg-white hover:text-black cursor-pointer border-white px-4 py-2 mb-8">Buy Now</button>
            </div>
          </div>
        </div>

      </div>

    </div>


  )
}

export default page