import React, { use, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { AuthContext } from './../Auth/AuthContext';
import { useNavigate } from 'react-router';
import Spinner from '../Components/Spinner';

const CreateEvent = () => {
  const [eventDate, setEventDate] = useState(null);
  const { user,loading } = use(AuthContext);
  const navigate = useNavigate();
  const handleInfo = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const category = e.target.category.value;
    const photo = e.target.photo.value;
    const location = e.target.location.value;
    // const date = e.target.date.value;
    const description = e.target.description.value;
    if (!category) {
      return toast.error('Please select your Event type!');
    }
    if (!name || !description || !photo || !location || !eventDate) {
      return toast.error('All fields are required!');
    }
    // console.log(name, category, photo, location, description);
    const userInfo = {
      title: name,
      description: description,
      eventType: category,
      thumbnailUrl: photo,
      location: location,
      eventDate: eventDate.toISOString(),
      createdByEmail: user.email,
      createdByName: user.displayName,
      createdByPhoto: user.photoURL,
      createdAt: new Date().toISOString(),
      joinedUsers: [],
    };
    fetch('https://social-development-server-three.vercel.app/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.insertedId) {
          toast.success('Event Create Successfully');
          navigate('/upcoming-events');
        }
      })
      .catch(() => toast.error('Server error!'));
  };
  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="bg-base-150 text-base-content py-5">
      <title>Create Event | Social Development</title>
      <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md rounded-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Create event
        </h2>

        <form className="space-y-4" onSubmit={handleInfo}>
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full"
              name="name"
            />
          </div>

          <div className="border-2 p-2 border-gray-200 rounded-sm">
            <select className="block text-sm font-medium mb-1" name="category">
              <option value="">Event type</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Thumbnail URL
            </label>
            <input
              type="url"
              placeholder="https://res.cloudinary.com/.../spaceship-thumb.jpg"
              className="input input-bordered w-full"
              name="photo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              type="text"
              placeholder="Location"
              className="input input-bordered w-full"
              name="location"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Event Date</label>
            <DatePicker
              selected={eventDate}
              onChange={date => setEventDate(date)}
              minDate={new Date()}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              placeholderText="Select a date"
              className="input input-bordered w-full"
              name="date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows="4"
              placeholder="Let's make our neighborhood cleaner and healthier together."
              name="description"
            ></textarea>
          </div>
          <div className="pt-4 text-center">
            <button
              type="submit"
              className="btn bg-[#0a400c] text-white w-full"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
