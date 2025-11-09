import React from 'react';

const CreateEvent = () => {
  return (
    <div className="py-5">
      <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md rounded-2xl">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Add 3D Model
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full"
              name="name"
            />
          </div>

          <div className='border-2 p-2 border-gray-200 rounded-sm'>
            <select className="block text-sm font-medium mb-1">
              <option selected disabled>
                Category
              </option>
              <option>Cleanup</option>
              <option>Plantation</option>
              <option>Donation</option>
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
              name="photoURL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Location
            </label>
            <input
              type="url"
              placeholder="Location"
              className="input input-bordered w-full"
              name="photoURL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Thumbnail URL
            </label>
            <input
              type="url"
              placeholder="https://res.cloudinary.com/.../spaceship-thumb.jpg"
              className="input input-bordered w-full"
              name="photoURL"
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