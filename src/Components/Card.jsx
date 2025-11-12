import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import { Link } from 'react-router';

const Card = ({ data }) => {
  const { title, thumbnailUrl, location, eventDate, eventType, createdByName,_id } = data;
  return (
    <div className="card bg-base-100 text-base-content shadow-sm p-3">
      <figure className=" rounded-md">
        <img
          src={thumbnailUrl}
          alt="Shoes"
          className="w-full h-[250px] object-cover"
        />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">Upcoming</div>
        </h2>
        <div className="card-actions">
          <div className="badge badge-outline">Event type : {eventType}</div>
          <div className="badge badge-outline">
            <MdDateRange /> {new Date(eventDate).toLocaleDateString('en-GB')}
          </div>
        </div>
        <p className="flex items-center gap-2 text-[17px] font-semibold">
          <FaLocationDot /> {location}
        </p>
        <p className="flex items-center gap-2 text-[17px] font-semibold">
          Created By: {createdByName}
        </p>
        <div>
          <Link to={`/event-details/${_id}`} className="btn w-full bg-[#0a400c] text-white">
            View Event
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;