import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { wordpressService, WordPressPost } from '../services/wordpressService';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (id) {
        try {
          const data = await wordpressService.getPostById(parseInt(id));
          setPost(data);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center py-12">Memuat...</div>;
  if (!post) return <div className="text-center py-12">Post tidak ditemukan</div>;

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 
        className="text-4xl font-bold mb-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      
      <p className="text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        })}
      </p>

      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  );
};

export default BlogDetail;