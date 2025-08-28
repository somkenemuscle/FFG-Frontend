'use client'

import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useFullNameStore } from '@/store/useFullnameStore'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const router = useRouter()
  const setFullName = useFullNameStore((state: any) => state.setFullName)

  function handleChange(e: any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e: any) {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(
        "https://ffg-backend-p30k.onrender.com/api/auth/login",
        formData,
        { headers: { "Content-Type": "application/json" } }
      )

      setFullName(res.data.user.fullname)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("fullname", res.data.user.fullname)

      toast.success("Login successful")
      window.location.href = "/"

    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message || "Login failed")
      } else {
        toast.error("Something went wrong. Try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left side static image */}
      <div className="hidden md:flex w-1/2 h-screen">
        <img
          src="https://images.unsplash.com/photo-1679792756270-c90bb6f34868?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gym"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side form */}
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

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-800 text-md font-semibold">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block text-gray-900 w-full rounded-xl border border-gray-300 p-3 transition duration-300"
                required
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block text-gray-900 w-full rounded-xl border border-gray-300 p-3 transition duration-300 pr-10"
                  required
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

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black hover:bg-[#0d1408] text-white font-medium p-3 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
