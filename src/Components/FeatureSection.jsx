import React from 'react';
import { FaRegEdit, FaUsers, FaHandsHelping } from 'react-icons/fa';
import { motion } from 'framer-motion';

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


  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  
  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="bg-base-300 text-base-content">
      <section className="py-16 w-11/12 mx-auto">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Features</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-base-100 text-base-content p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
                variants={card}
                whileHover={{ scale: 1.05 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeatureSection;
