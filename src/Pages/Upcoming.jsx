import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../Components/Card';

const Upcoming = () => {
  const allevents = useLoaderData()
  const today = new Date()
  const upComingEvent = allevents.filter(event =>
  {
    const eventDate = new Date(event.eventDate);
    const eventDateOnly = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate()
    );
    const todayOnly = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    return eventDateOnly >= todayOnly;
  } )

  
  return (
    <div className="bg-base-150 text-base-content pb-10">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center py-4">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {upComingEvent.map(data => (
            <Card key={data._id} data={data}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;