import React from 'react';
import { FaRegEdit, FaUsers, FaHandsHelping } from 'react-icons/fa';

const FeatureSection = () => {
  const features = [
    {
      icon: <FaRegEdit className="text-4xl text-green-600" />,
      title: 'Create Events',
      description:
        'Easily create community service events with detailed information.',
    },
    {
      icon: <FaUsers className="text-4xl text-green-600" />,
      title: 'Join Events',
      description:
        'Participate in upcoming events and help your local community.',
    },
    {
      icon: <FaHandsHelping className="text-4xl text-green-600" />,
      title: 'Manage Events',
      description: 'Track and manage the events you have created efficiently.',
    },
  ];

  return (
    <div className="bg-gray-50">
      <section className="py-16 w-11/12 mx-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
