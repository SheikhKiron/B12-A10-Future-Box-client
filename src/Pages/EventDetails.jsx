import React, { use, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';

const EventDetails = () => {
  const data = useLoaderData();
  const { user } = use(AuthContext);
  const [event, setEvent] = useState(data);
  const {
    title,
    thumbnailUrl,
    location,
    eventDate,
    eventType,
    createdByName,
    _id,
    description,
  } = data;
  console.log(data);

  const joinHandle = () => {
    if (event.joinedUsers.some(u => u.email === user.email)) {
      toast.info('You already joined this event');
      return;
    }
    if (new Date(data.eventDate) < new Date()) {
      toast.error('This event has ended');
      return;
    }
    fetch(
      `https://social-development-server-three.vercel.app/events/join/${data._id}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        }),
      }
    )
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setEvent(prev => ({
            ...prev,
            joinedUsers: [...(prev.joinedUsers || []), { email: user.email }],
          }));
          toast.success('You have joined this event!');
        } else {
          toast.error('Something went wrong!');
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto py-3.5">
      <div className="hero bg-base-100">
        <div className="hero-content flex flex-col lg:flex-row">
          <div className="flex-1">
            <img
              src={thumbnailUrl}
              className="w-[500px] rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1">
            <h1 className="md:text-5xl text-4xl font-bold">{title}</h1>
            <p className="badge badge-success mt-3">{eventType}</p>
            <p className="flex items-center gap-2 text-[17px] mt-2.5 font-semibold">
              <FaLocationDot /> {location}
            </p>
            <div className="badge badge-outline">
              <MdDateRange /> {new Date(eventDate).toLocaleDateString('en-GB')}
            </div>
            <p className="mt-3 text-justify">{description}</p>
            <p className="flex items-center gap-2 text-[20px] mt-4 font-semibold">
              Created By: {createdByName}
            </p>
            <button
              to={`/event-details/${_id}`}
              className="btn bg-[#0a400c] text-white mt-5"
              onClick={joinHandle}
            >
              Join Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
