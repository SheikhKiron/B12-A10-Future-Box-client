import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const Update = () => {
  const data = useLoaderData()
  const [eventDate, setEventDate] = useState(
    data.eventDate ? new Date(data.eventDate) : null
  );
  console.log(data);
  const handleUpdate=(e) => {
    e.preventDefault()
   const name = e.target.name.value;
   const category = e.target.category.value;
   const photo = e.target.photo.value;
   const location = e.target.location.value;
    const description = e.target.description.value; 
    const updateInfo = {
      title: name,
      description: description,
      eventType: category,
      thumbnailUrl: photo,
      location: location,
      eventDate: eventDate ? eventDate.toISOString() : null,
    }; 
    fetch(`http://localhost:3000/events/${data._id}`, {
       method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateInfo),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success('Event updated successfully!');
        }
      });
    };


  return (
    <div>
      <div className="py-5">
        <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create event
          </h2>

          <form className="space-y-4" onSubmit={handleUpdate}>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                placeholder="Event Title"
                className="input input-bordered w-full"
                name="name"
                defaultValue={data.title}
              />
            </div>

            <div className="border-2 p-2 border-gray-200 rounded-sm">
              <select
                className="block text-sm font-medium mb-1"
                name="category"
                defaultValue={data.eventType}
              >
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
                defaultValue={data.thumbnailUrl}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered w-full"
                name="location"
                defaultValue={data.location}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Event Date
              </label>
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
                placeholder="Low-poly spaceship for space shooter games. PBR materials included."
                name="description"
                defaultValue={data.description}
              ></textarea>
            </div>
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="btn bg-[#0a400c] text-white w-full"
              >
                Update Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
)};



export default Update;