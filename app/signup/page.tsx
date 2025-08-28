'use client'

import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import axios from 'axios'
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "customer",
  })

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
        "https://ffg-backend-p30k.onrender.com/api/auth/signup",
        formData,
        { headers: { "Content-Type": "application/json" } }
      )

      localStorage.setItem("fullname", res.data.newUser.fullname)
      localStorage.setItem("token", res.data.token)
      toast.success("Signup successful")
      window.location.href = "/"

    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data.message || "Signup failed")
      } else {
        console.log(error)
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
          src="https://images.unsplash.com/photo-1685263102097-7c34904b7543?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Gym"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side form */}
      <div className="flex w-full md:w-1/2 justify-center items-center p-6 bg-white">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-black font-semibold hover:underline">
              Sign in
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-800 text-md font-semibold">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                placeholder="Full Name"
                value={formData.fullname}
                onChange={handleChange}
                className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-3 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 text-md font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-3 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 text-md font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="+234 801 234 5678"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-3 transition"
                required
              />
            </div>

            <div>
              <label className="block text-gray-800 text-md font-semibold">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block text-gray-900 w-full rounded-lg border border-gray-300 p-3 pr-10 transition"
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
              className="w-full bg-black hover:bg-gray-800 text-white font-medium py-3 px-4 rounded-lg transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
