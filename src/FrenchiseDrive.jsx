import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FranchiseDriveSection.module.css'; // Example CSS module import

const FranchiseDriveSection = () => {
  const [post, setPost] = useState(null);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get('https://nobleeducation.in/wp-json/wp/v2/posts/1034');
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  if (!post) return null;

  // Function to create blinking effect for "We are Open" text
  const blinkingText = () => {
    return (
      <span className="inline-block">
        We are&nbsp;
        <span className="text-green-600 font-bold animate-blink">Open</span>
      </span>
    );
  };

  return (
    <section className="bg-gradient-to-r from-red-50 via-orange-50 to-green-50 py-12 md:py-24">
      <div className="container mx-auto px-4 md:flex ">
        <div className="md:w-1/2 md:pr-8 md:order-1 image-overlay">
          <img
            src="https://code.nobleeducation.in//authcert.jpg"
            alt="Franchise Drive Image"
            className="md:max-w-full md:mx-auto md:block mb-8 md:mb-0"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 md:order-2">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 underline decoration-pink-500">{post.title.rendered}</h2>
          <div className={`${styles.contentWrapper} text-sm md:text-sm mb-6 ${styles.textWrap} tracking-wide leading-relaxed `}>
            {/* Render content with proper handling of unordered lists */}
            <div dangerouslySetInnerHTML={{ __html: showFullContent ? post.content.rendered : `${post.content.rendered.substring(0, 250)}...` }} />
          </div>
          {!showFullContent && (
            <button
              onClick={toggleContent}
              className="text-green-500 hover:text-green-600 font-bold underline"
            >
              Read More
            </button>
          )}
          {showFullContent && (
            <a href="/link-to-franchise-form" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block">
              Register Now
            </a>
          )}
          <div className="mt-4 underline decoration-sky-500/[.33]">{blinkingText()}</div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseDriveSection;
