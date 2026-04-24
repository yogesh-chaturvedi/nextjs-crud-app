"use client";

export const dynamic = "force-dynamic";

import React, { useEffect, useState } from 'react'
import UsersCard from '../components/UsersCard';

const page = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {

      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await res.json();
        setUsers(data);

      }
      catch (error) {
        console.error("fetchAllUsers failed", error);
      }
    }
    fetchAllUsers();
  }, [])

  return (
    <div className='p-5 '>
      <h1 className="text-3xl font-bold text-pink-500 text-center underline">
        All Users
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {users.map((data) => {
          return (
            <div key={data.id}>
              <UsersCard userData={data} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page
