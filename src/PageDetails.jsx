import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Breadcrumb from './Breadcrumb';

const PageDetail = () => {
  const { slug } = useParams();
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [yoastTitle, setYoastTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  useEffect(() => {
    const fetchPage = async () => {
      try {
        const response = await axios.get(`https://nobleeducation.in/wp-json/wp/v2/pages?slug=${slug}&_embed`);
        
        if (response.data.length > 0) {
          const pageData = response.data[0];
          setPage(pageData);

          // Extract Yoast SEO data
          const yoastMeta = pageData.yoast_meta;
          if (yoastMeta) {
            // Set Yoast SEO title
            setYoastTitle(yoastMeta.yoast_wpseo_title || pageData.title.rendered);
            // Set meta description
            setMetaDescription(yoastMeta.yoast_wpseo_metadesc || '');
          } else {
            setYoastTitle(pageData.title.rendered);
            setMetaDescription('');
          }
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        // console.error('Error fetching page:', error);
        setLoading(false);
        setError(true);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8 text-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <Helmet>
          <title>Page not found</title>
          <meta name="description" content="The page you are looking for does not exist." />
          {/* Add other meta tags for SEO here if necessary */}
        </Helmet>
        <Breadcrumb />
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Page not found</h2>
          <p className="text-gray-600">The page you are looking for does not exist.</p>
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
        <h1 className="text-3xl font-bold mb-6">{yoastTitle}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      </div>
    </HelmetProvider>
  );
};

export default PageDetail;
