import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { Link } from 'react-router';
import { FaLocationDot } from 'react-icons/fa6';
import { MdDateRange } from 'react-icons/md';
import Swal from 'sweetalert2';

const JoinedEvent = () => {
  const { user } = use(AuthContext)
  const [events, setEvents] = useState([])
  
   useEffect(() => {
     if (!user?.email) return;
     fetch(`http://localhost:3000/events/join/${user.email}`)
       .then(res => res.json())
       .then(data => setEvents(data))
       .catch(err => console.error(err));
   }, [user]);

   const handleDelete = async id => {
     const result = await Swal.fire({
       title: 'Are you sure?',
       text: "You won't be able to revert this!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#3085d6',
       cancelButtonColor: '#d33',
       confirmButtonText: 'Yes, delete it!',
     });

     if (result.isConfirmed) {
       try {
         const res = await fetch(`http://localhost:3000/events/join/${id}`, {
           method: 'DELETE',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ email: user.email }),
         });
         const data = await res.json();

         if (data.success) {
       
           setEvents(prev => prev.filter(event => event._id !== id));
           Swal.fire({
             title: 'Deleted!',
             text: 'Event removed from your joined list.',
             icon: 'success',
           });
         } else {
           Swal.fire('Failed!', 'Could not remove event.', 'error');
         }
       } catch {
         Swal.fire('Error!', 'Something went wrong.', 'error');
       }
     }
   };

  return (
    <div className="w-11/12 mx-auto py-5">
      <h2 className="text-3xl font-bold mb-5">My Joined Events</h2>

      {events.length === 0 ? (
        <p>No events joined yet.</p>
      ) : (
        <ul className="space-y-4">
          {events.map(event => (
            <li
              key={event._id}
              className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded shadow"
            >
              <img
                src={event.thumbnailUrl}
                alt={event.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="flex items-center gap-2 text-gray-600">
                  <FaLocationDot /> {event.location}
                </p>
                <p className="flex items-center gap-2 text-gray-600">
                  <MdDateRange />{' '}
                  {new Date(event.eventDate).toLocaleDateString('en-GB')}
                </p>
                <p className="text-gray-500 mt-1">
                  Created By: {event.createdByName}
                </p>
              </div>
              <Link
                to={`/event-details/${event._id}`}
                className="btn bg-[#0a400c] text-white"
              >
                View Event
              </Link>
              <button
                onClick={() => handleDelete(event._id)}
                className="btn bg-[#ff0000] text-white"
              >
                Cancel Event
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default JoinedEvent;