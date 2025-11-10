import React from 'react';
import logo from '../assets/logo (2).png';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-2">
      <div className="md:w-9/12 lg:w-11/12 mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="Logo" className="w-16 mb-3" />
          <h2 className="text-xl font-bold mb-2">Social Development Events</h2>
          <p className="text-sm text-gray-500 w-10/12">
            A community-driven platform to organize, join, and track social
            service events like tree plantation, blood donation, and road
            cleaning.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <a href="/" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/upcoming-events" className="hover:text-primary">
                Upcoming Events
              </a>
            </li>
            <li>
              <a href="/create-event" className="hover:text-primary">
                Create Event
              </a>
            </li>
            <li>
              <a href="/manage-events" className="hover:text-primary">
                Manage Events
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Emergency Helpline</h3>

          <div className="space-y-2">
            <p className="text-gray-600 text-[17px]">
              📞 999 (Police, Fire, Ambulance)
            </p>
            <p className="text-gray-600 text-[17px]">
              ☎️ 333 (National Info Service)
            </p>
            <p className="text-gray-600 text-[17px]">💊 16263 (Health Line)</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://facebook.com" className="hover:text-primary">
              <FaFacebook />
            </a>
            <a href="https://instagram.com" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="hover:text-primary">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="hover:text-primary">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        <p>
          © <span>2025 </span>
          <span className="font-semibold">Social Development Events</span> |
          Developed by{' '}
          <span className="text-primary font-medium">Sheikh Kiron</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
