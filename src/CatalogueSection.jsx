import React, { useState } from 'react';
import axios from 'axios';

const CatalogSection = () => {
  const [postContent, setPostContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadPost = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://nobleeducation.in//wp-json/wp/v2/posts/1149'
      );
      setPostContent(response.data.content.rendered);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Course Catalog
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse our online course catalog with detailed descriptions and schedules.
          </p>
        </div>
        {postContent ? (
          <div dangerouslySetInnerHTML={{ __html: postContent }} />
        ) : (
          <div className="mt-8 text-center">
            <button
              onClick={loadPost}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogSection;
