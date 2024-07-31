import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BiSpeaker } from 'react-icons/bi'; // Import loudspeaker icon from react-icons library
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://nobleeducation.in/wp-json/wp/v2/posts?categories=21');
        // Map over the response data and modify each post object to include slug instead of ID
        const modifiedPosts = response.data.map(post => ({
          ...post,
          slug: post.slug, // Add slug property to each post object
        }));
        setPosts(modifiedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="py-10 bg-slate-50 justify-center p-20">
      <h2 className="text-2xl font-bold mb-4 flex items-center lg:w-3/6">
        <BiSpeaker className="mr-2 h-6 w-6 animate-pulse" /> Latest News and Announcements
      </h2>
      <div className="marquee-container overflow-hidden">
        <div className="marquee">
          {posts.map(post => (
            <Link
              key={post.id} // Unique key prop
              to={`/post/${post.slug}`} // Use post slug for the link
              rel="noopener noreferrer"
              className="flex items-center bg-white rounded-lg shadow-md p-2 hover:shadow-lg"
            >
              <img src="http://nobleeducation.in/wp-content/uploads/2024/06/new.gif" alt="New" className="mr-2 w-4 h-4" />
              <span className={`text-lg font-semibold ${post.is_new ? 'text-red-500' : 'text-gray-900'}`}>{post.title.rendered}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
