import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="inline-block mr-4 mb-4 justify-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={event.image} alt={event.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{event.title}</div>
          <p className="text-gray-700 text-base">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
