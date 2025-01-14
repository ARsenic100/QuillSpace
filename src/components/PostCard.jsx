import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="transform hover:scale-105 transition duration-300 ease-in-out">
      <div 
        className="w-full rounded-2xl p-4 hover:shadow-xl relative bg-gradient-to-br"
        style={{ background: 'linear-gradient(to right, #6B7280, #4B5563, #111827)' }}

      >
        {/* Featured Image */}
        <div className="w-full h-64 mb-4 flex justify-center overflow-hidden rounded-xl border border-white shadow-md">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-2 text-center drop-shadow-lg">
          {title}
        </h2>

        {/* Decorative Divider */}
        <div className="w-16 h-1 mx-auto bg-white rounded-full mb-2"></div>

        {/* Action Button */}
        <div className="text-center mt-4">
          <button className="px-4 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:shadow-lg transition duration-300">
            Read More
          </button>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
