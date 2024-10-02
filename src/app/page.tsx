import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 shadow-sm">Home</h1>
      <div className="flex space-x-4">
        <Link href="/web3modal">
          <button className="px-6 py-3 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
            Web3Modal
          </button>
        </Link>
        <Link href="/dynamic">
          <button className="px-6 py-3 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg">
            Dynamic
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home