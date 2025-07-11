import React from 'react';
import { Calendar, User } from 'lucide-react';

const BlogCard = ({ blog, onEdit, onDelete, isOwner = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {blog.image && (
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt || blog.content.substring(0, 150) + '...'}
        </p>
        
        {/* Metadata */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar size={14} />
              <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            </div>
            {blog.userId?.fullName && (
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>{blog.userId.fullName}</span>
              </div>
            )}
          </div>
          
          {/* Action buttons for owner */}
          {isOwner && (
            <div className="flex space-x-2">
              <button
                onClick={() => onEdit(blog)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(blog._id)}
                className="text-red-600 hover:text-red-800 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          )}
        </div>
        
        {/* Read More Button */}
        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
          Read More →
        </button>
      </div>
    </div>
  );
};

export default BlogCard;