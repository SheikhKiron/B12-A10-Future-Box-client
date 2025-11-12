import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthContext';
import { MdDateRange } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import Spinner from '../Components/Spinner';

const ManageEvent = () => {
  const { user } = use(AuthContext);
  const[loading,setLoading]=useState(true)
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(
      `https://social-development-server-three.vercel.app/events/created/${user?.email}`
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setEvents(data);
        setLoading(false)
      });
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
        const res = await fetch(
          `https://social-development-server-three.vercel.app/events/${id}`,
          {
            method: 'DELETE',
          }
        );
        const data = await res.json();

        if (data.deletedCount) {
          setEvents(prev => prev.filter(event => event._id !== id));
          Swal.fire({
            title: 'Deleted!',
            text: 'Event deleted successfully!',
            icon: 'success',
          });
        } else {
          Swal.fire('Failed!', 'Could not delete event.', 'error');
        }
      } catch {
        Swal.fire('Error!', 'Something went wrong.', 'error');
      }
    }
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="bg-base-100 text-base-content">
      <title>Manage Events | Social Development</title>
      <div className="w-11/12 mx-auto py-5 ">
        <h2 className="text-3xl font-bold mb-5">My Created Events</h2>

        {events.length === 0 ? (
          <p>You haven’t created any events yet.</p>
        ) : (
          <motion.ul
            className="space-y-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {events.map(event => (
              <motion.li
                key={event._id}
                className="flex flex-col md:flex-row items-center gap-4 p-4 bg-base-200 text-base-content  rounded shadow"
                variants={cardVariant}
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
                <div className="flex gap-5">
                  <Link
                    to={`/event/update/${event._id}`}
                    className="btn bg-[#0a400c] text-white"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="btn bg-[#ff0000] text-white"
                  >
                    Delete
                  </button>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default ManageEvent;
