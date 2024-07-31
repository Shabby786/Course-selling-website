import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://nobleeducation.in/wp-json/wp/v2/posts');
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>

      <div className="h-96 flex items-center justify-center">
        {loading ? (
          <div className="animate-pulse rounded-lg bg-gray-200 h-80 w-96 flex items-center justify-center">
            <div className="text-center">
              <div className="h-16 w-16 mb-4 rounded-full bg-gray-400"></div>
              <div className="h-4 w-24 bg-gray-400 mb-2"></div>
              <div className="h-4 w-16 bg-gray-400"></div>
            </div>
          </div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {posts.map(post => (
              <li key={post.id} className="py-4">
                <Link to={`/post/${post.id}`} className="text-xl font-medium text-blue-600 hover:text-blue-800">
                  {post.title.rendered}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Posts;
