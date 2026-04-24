"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {


  const router = useRouter();

  return (

    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-[90%] max-w-md text-center border border-gray-200">

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Welcome 👋
        </h1>

        <p className="text-gray-500 mb-6">
          Click below to explore all users
        </p>

        <button
          onClick={() => router.push("/users")}
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition duration-300 w-full"
        >
          Go to Users Page
        </button>

      </div>

    </div>
  )
}

export default page
