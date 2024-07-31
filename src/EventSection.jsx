import React, { useRef } from 'react';
import EventCard from './EventCard'; // Assuming EventCard component is defined separately

const EventsSection = ({ events }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 200; // Adjust scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 200; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="py-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Calendar of Events</h2>
      <div className="flex items-center justify-center">
        <button
          className="absolute left-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-l-lg"
          onClick={scrollLeft}
        >
          {'<'}
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap justify-center px-4"
          style={{ maxWidth: 'calc(100% - 80px)' }} // Adjust based on button widths
        >
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <button
          className="absolute right-0 bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded-r-lg"
          onClick={scrollRight}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default EventsSection;
