'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

// Carousel images
const images = [
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0',
  'https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0'
]

function ImageCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover object-center"
      />

      {/* Dots */}
      <div className="absolute bottom-4 left-0 w-full flex justify-center gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-1 w-8 rounded-full transition-all ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default function LoginPage() {
  const [usePhone, setUsePhone] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left side carousel */}
      <div className="hidden md:flex w-1/2 h-screen">
        <ImageCarousel />
      </div>

      {/* Right side */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-6 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            Create an account
          </h2>
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:underline">
              Sign in
            </a>
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-800 text-sm font-semibold">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="mt-1 block text-sm text-gray-900 w-full rounded-lg border border-gray-300 p-2 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="mt-1 block text-sm text-gray-900 w-full rounded-lg border border-gray-300 p-2 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+234 801 234 5678"
                className="mt-1 block text-sm text-gray-900 w-full rounded-lg border border-gray-300 p-2 transition duration-300"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••"
                  className="mt-1 block text-sm text-gray-900 w-full rounded-lg border border-gray-300 p-2 pr-10 transition duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
