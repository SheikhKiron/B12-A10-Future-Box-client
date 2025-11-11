import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { motion } from 'framer-motion';
import Spinner from '../Components/Spinner';

const Upcoming = () => {
  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  // Fetch events from backend
  const fetchEvents = async (search = '', categoryFilter = '') => {
    setLoading(true);
    let url = `https://social-development-server-three.vercel.app/events?`;
    if (search) url += `search=${search}&`;
    if (categoryFilter) url += `category=${categoryFilter}&`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setEvents(data);
    } catch (err) {
      console.error(err);
      setEvents([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Search input change
  const handleSearchChange = e => {
    const value = e.target.value;
    setSearchText(value);

    if (value === '') {
      // input খালি → সব events দেখাও
      fetchEvents('', category);
    }
  };

  // Search submit
  const handleSearch = e => {
    e.preventDefault();
    fetchEvents(searchText, '');
  };

  // Category filter submit
  const handleCategory = e => {
    e.preventDefault();
    fetchEvents('', category);
  };

  // Upcoming filter
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const upComingEvent = events.filter(event => {
    const eventDate = new Date(event.eventDate);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  if (loading) return <Spinner></Spinner>;

  return (
    <div className="bg-base-100 text-base-content pb-10">
      <div className="w-11/12 mx-auto">
        {/* Search & Category */}
        <div className="flex justify-between py-5 flex-col-reverse md:flex-row gap-4">
          <form onSubmit={handleSearch} className="flex flex-row gap-2 flex-1">
            <input
              type="search"
              placeholder="Search events..."
              className="input"
              value={searchText}
              onChange={handleSearchChange}
            />
            <button type="submit" className="btn bg-[#0a400c] text-white">
              Search
            </button>
          </form>

          <form onSubmit={handleCategory} className="flex items-center gap-2">
            <select
              className="select flex-1"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
            </select>
            <button type="submit" className="btn bg-[#0a400c] text-white">
              Filter Category
            </button>
          </form>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center py-4">
          Upcoming Events
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {upComingEvent.length > 0 ? (
            upComingEvent.map(event => (
              <motion.div key={event._id} variants={cardVariant}>
                <Card data={event} />
              </motion.div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No upcoming events found
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Upcoming;
