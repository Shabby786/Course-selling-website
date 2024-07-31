import React from 'react';

const NewsReleasesSection = ({ news }) => {
  return (
    <div className="py-8 flex justify-center"> {/* Centering container */}
      <div className="max-w-screen-lg w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">News Releases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map(item => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const NewsCard = ({ item }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={item.image} alt={item.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 py-4">
        <a href={item.link} className="text-blue-500 hover:underline">Read more</a>
      </div>
    </div>
  );
};

export default NewsReleasesSection;
