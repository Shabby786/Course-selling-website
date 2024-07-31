import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from './Breadcrumb';

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [yoastTitle, setYoastTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://nobleeducation.in/wp-json/wp/v2/posts?slug=${slug}&_fields=title,content,yoast_meta`);

        if (response.data.length > 0) {
          const postData = response.data[0];
          setPost(postData);

          // Extract Yoast SEO data
          const yoastMeta = postData.yoast_meta;
          if (yoastMeta) {
            // Set Yoast SEO title
            setYoastTitle(yoastMeta.yoast_wpseo_title || postData.title.rendered);
            // Set meta description
            setMetaDescription(yoastMeta.yoast_wpseo_metadesc || '');
          } else {
            setYoastTitle(postData.title.rendered);
            setMetaDescription('');
          }
        } else {
          setError(true);
        }
      } catch (error) {
        // console.error('Error fetching post:', error);
        // setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8 text-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <Helmet>
          <title>Post not found</title>
          <meta name="description" content="The post you are looking for does not exist." />
          {/* Add other meta tags for SEO here if necessary */}
        </Helmet>
        <Breadcrumb />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <p className="text-gray-600">The post you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <div className="max-w-4xl mx-auto py-8">
        <Helmet>
          <title>{yoastTitle}</title>
          <meta name="description" content={metaDescription} />
          {/* Add other meta tags for SEO here if necessary */}
        </Helmet>
        <Breadcrumb />
        <h1 className="text-3xl font-bold mb-6">{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    </HelmetProvider>
  );
};

export default PostDetail;
