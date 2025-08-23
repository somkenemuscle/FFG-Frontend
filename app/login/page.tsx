'use client'

import { useState, useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

// Carousel images
const images = [
  'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGd5bXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1637430308606-86576d8fef3c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
            Welcome Back
            <span className="text-2xl animate-bounce">👋</span>
          </h2>
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-purple-600 hover:underline">
              Sign up
            </a>
          </p>

          <form className="space-y-4">
            {!usePhone ? (
              <>
                <div>
                  <label className="block text-gray-800 text-md font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-2 
                    transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-md font-semibold text-gray-800">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="• • • • •"
                      className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-2 
                      transition duration-300 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-md font-semibold text-gray-800">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 801 234 5678"
                    className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-2 
                      transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-md font-semibold text-gray-800">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="• • • • •"
                      className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-2 
                      transition duration-300 pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={() => setUsePhone(!usePhone)}
                className="text-sm text-gray-600 hover:underline"
              >
                {usePhone ? 'Use email instead' : 'Use phone number instead'}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-800 text-white font-medium py-2 px-4 rounded-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
