import React from 'react';
import { useTranslation } from 'react-i18next';
import BlogList from '../components/BlogList';

function Blog() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">{t('blogPage.title')}</h1>
        <BlogList />
      </div>
    </div>
  );
}

export default Blog;
