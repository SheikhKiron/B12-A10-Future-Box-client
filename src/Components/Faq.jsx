import React from 'react';
import { motion } from 'framer-motion';

const faqVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Faq = () => {
  return (
    <motion.div
      className="w-11/12 max-w-3xl mx-auto py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={faqVariants}
    >
      <h2 className="text-3xl font-bold text-center text-base-content mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4 text-base-content">
        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold text-lg">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Sign Up" button in the top right corner and follow the
            registration process.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg">
            I forgot my password. What should I do?
          </div>
          <div className="collapse-content text-sm">
            Click on "Forgot Password" on the login page and follow the
            instructions sent to your email.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg">
            How can I create a new event?
          </div>
          <div className="collapse-content text-sm">
            Any logged in user can create an event by filling the "Create Event"
            form with title, description, date, location, and event type. Past
            dates are not allowed.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg">
            How do I join an event?
          </div>
          <div className="collapse-content text-sm">
            Go to the event details page and click on the "Join Event" button.
            You must be logged in to join.
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-lg">
            Can I see all upcoming events?
          </div>
          <div className="collapse-content text-sm">
            Yes, you can view all upcoming events on the "Upcoming Events" page.
            Past events are automatically hidden.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Faq;
