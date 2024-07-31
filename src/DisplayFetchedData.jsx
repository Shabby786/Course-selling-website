import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://nobleeducation.in/wp-json/wp/v2/posts');
        setPosts(response.data);
        setLoading(false); // Once data is fetched, set loading to false
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false); // Set loading to false in case of error as well
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Posts</h1>

      {loading ? ( // Conditional rendering based on loading state
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
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
  );
};

export default Posts;
