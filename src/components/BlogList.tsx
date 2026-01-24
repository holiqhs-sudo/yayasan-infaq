// src/components/BlogList.tsx
import React, { useState, useEffect } from 'react';
import { wordpressService, WordPressPost } from '../services/wordpressService';

const BlogList: React.FC = () => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch posts saat component dimuat
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await wordpressService.getPosts(3); // Ambil 6 posts
        setPosts(data);
        setError(null);
      } catch (err) {
        setError('Gagal mengambil data dari WordPress');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Helper function untuk strip HTML tags
  const stripHtml = (html: string) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  // Helper function untuk ambil featured image
  const getFeaturedImage = (post: WordPressPost): string => {
    if (post._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
      return post._embedded['wp:featuredmedia'][0].source_url;
    }
    return 'https://via.placeholder.com/400x250'; // Placeholder jika tidak ada gambar
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl text-gray-600">Memuat artikel...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-600 font-semibold">{error}</p>
        <p className="text-sm text-gray-600 mt-2">
          Pastikan WordPress sudah dikonfigurasi dengan benar
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Blog Terbaru</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Featured Image */}
            <img
              src={getFeaturedImage(post)}
              alt={stripHtml(post.title.rendered)}
              className="w-full h-48 object-cover"
            />
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                {stripHtml(post.title.rendered)}
              </h3>
              
              <div 
                className="text-gray-600 mb-4 line-clamp-3"
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              />
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                
                <a
                  href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-secondary font-semibold text-sm"
                    >
                      Baca Selengkapnya →
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;