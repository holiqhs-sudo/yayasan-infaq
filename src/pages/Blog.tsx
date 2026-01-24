import React from 'react';
import BlogList from '../components/BlogList';

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <BlogList />
      </div>
    </div>
  );
}

export default Blog;