import { useRouter } from 'next/navigation';
import React from 'react'

const UsersCard = ({ userData }) => {

    const router = useRouter();

    function handleView(data) {
        router.push(`/users/${data.id}`)
    }

    return (
        <div className="max-w-sm mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {userData.name}
            </h2>

            <p className="text-gray-500 mb-4">
                {userData.email}
            </p>

            <button
                onClick={() => { handleView(userData) }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition"
            >
                View
            </button>
        </div>
    );
};


export default UsersCard
