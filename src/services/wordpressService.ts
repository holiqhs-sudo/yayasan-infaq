// src/services/wordpressService.ts
import axios from 'axios';

// GANTI dengan URL WordPress Anda
const WORDPRESS_URL = 'https://web.infaqfoundation.org';
const API_BASE = `${WORDPRESS_URL}/wp-json/wp/v2`;

// Interface untuk tipe data Post
export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  link: string;
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
}

// Interface untuk tipe data Page
export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
}

class WordPressService {
  // Ambil semua posts
  async getPosts(perPage: number = 10, page: number = 1): Promise<WordPressPost[]> {
    try {
      const response = await axios.get(`${API_BASE}/posts`, {
        params: {
          per_page: perPage,
          page: page,
          _embed: true, // Include featured image
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  }

  // Ambil satu post berdasarkan ID
  async getPostById(id: number): Promise<WordPressPost> {
    try {
      const response = await axios.get(`${API_BASE}/posts/${id}`, {
        params: {
          _embed: true,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching post:', error);
      throw error;
    }
  }

  // Ambil post berdasarkan slug
  async getPostBySlug(slug: string): Promise<WordPressPost> {
    try {
      const response = await axios.get(`${API_BASE}/posts`, {
        params: {
          slug: slug,
          _embed: true,
        },
      });
      return response.data[0];
    } catch (error) {
      console.error('Error fetching post by slug:', error);
      throw error;
    }
  }

  // Ambil pages
  async getPages(): Promise<WordPressPage[]> {
    try {
      const response = await axios.get(`${API_BASE}/pages`);
      return response.data;
    } catch (error) {
      console.error('Error fetching pages:', error);
      throw error;
    }
  }

  // Search posts
  async searchPosts(query: string): Promise<WordPressPost[]> {
    try {
      const response = await axios.get(`${API_BASE}/posts`, {
        params: {
          search: query,
          _embed: true,
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error searching posts:', error);
      throw error;
    }
  }
}

// Export instance
export const wordpressService = new WordPressService();