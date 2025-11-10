import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';

const ManageEvent = () => {
  const { user } = use(AuthContext)
  const[events,setEvents]=useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/events/created/${user.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEvents(data)
      }
        
    )
  },[user])
  return (
    <div className="w-11/12 mx-auto py-5">
      <h2 className="text-3xl font-bold mb-5">My Created Events</h2>
      {events.length === 0 ? (
        <p>No events created yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {events.map(event => (
            <div
              key={event._id}
              className="p-4 bg-white shadow rounded flex flex-col"
            >
              <img
                src={event.thumbnailUrl}
                alt={event.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{event.title}</h3>
              <p className="text-gray-600">
                Date: {new Date(event.eventDate).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Location: {event.location}</p>
              <div className="mt-2 flex gap-2">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    /* open update modal */
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-red"
                  // onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvent;