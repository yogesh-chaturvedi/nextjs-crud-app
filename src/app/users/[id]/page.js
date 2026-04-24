"use client";

import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'

const page = ({ params }) => {

  const { id } = use(params)

  const router = useRouter();

  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: ""
  })


  // to fetch single user
  useEffect(() => {
    const getUser = async () => {
      try {
        if (!id) return;

        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        setUserData(data);
        setFormData({
          userName: data.name,
          userEmail: data.email,
        });
      }
      catch (error) {
        console.error("getUser failed", error)
      }
    }
    getUser();
  }, [id])

  // submittion function
  async function onsubmit(e) {
    e.preventDefault();

    setLoading(true)

    setUserData(prev => ({
      ...prev,
      name: formData.userName, email: formData.userEmail
    }));
    setIsEditing(false)

    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: formData.userName, email: formData.userEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    setLoading(false);
  }

  // function to delete user
  async function handleDelete() {

    router.push(`/users`)

    try {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: "DELETE",
      })
    }
    catch (error) {
      console.error("handleDelete failed", error)
    }
  }

  if (!userData) return <p className='text-5xl text-white font-bold flex justify-center items-center'>Loading...</p>;

  return (
    <div className='p-5'>

      <div>
        <h3 className='text-3xl text-center text-pink-500 underline font-bold'>User Details</h3>
      </div>

      {isEditing ? (<div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl border border-gray-200 p-6">

        <h2 className="text-xl font-bold text-gray-800 mb-6">
          Update User
        </h2>

        <form onSubmit={onsubmit} className="space-y-4">

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              Username
            </label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
              className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter username"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-600 mb-1">
              User Email
            </label>
            <input
              type="email"
              value={formData.userEmail}
              onChange={(e) =>
                setFormData({ ...formData, userEmail: e.target.value })
              }
              className="px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter email"
            />
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </form>
      </div>
      ) : (<div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl border border-gray-200 p-6 transition hover:shadow-xl">

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          User Profile
        </h2>

        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Name:</span> {userData.name}
          </p>

          <p className="text-gray-700">
            <span className="font-semibold text-gray-900">Email:</span> {userData.email}
          </p>
        </div>

        <div className='flex gap-5 justify-between'>
          <button
            onClick={() => setIsEditing(true)}
            className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Update
          </button>

          <button
            onClick={() => { handleDelete() }}
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-300"
          >
            Delete
          </button>
        </div>

      </div>)}

    </div>
  )
}

export default page