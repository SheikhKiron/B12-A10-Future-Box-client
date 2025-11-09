import React from 'react';
import logo from '../assets/logo (2).png'
import { Link, NavLink } from 'react-router';
import { FiLogOut } from 'react-icons/fi';
import { MdManageAccounts } from 'react-icons/md';
import { HiMiniPlus } from 'react-icons/hi2';
import { IoIosCreate } from 'react-icons/io';
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 md:w-11/12 mx-auto  px-4">
      <div className="flex items-center gap-2 navbar-start">
        <div className="lg:hidden">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/upcoming-events">Upcoming Events</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Link>
          <img src={logo} className="w-16" alt="" />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/upcoming-events">Upcoming Events</NavLink>
          </li>
        </ul>
      </div>

      
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
      
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
            data-tip="Sheikh Kiron"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

       
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <p className="text-center font-semibold">Sheikh Kiron</p>
            <p className="text-center border-b-2 border-gray-300 pb-1 text-sm text-gray-500">
              SheikhKiron@gmail.com
            </p>

            <li>
              <NavLink to="/create-event" className="text-[17px]">
                <IoIosCreate /> Create Event
              </NavLink>
            </li>
            <li>
              <NavLink to="/manage-events" className="text-[17px]">
                <MdManageAccounts /> Manage Events
              </NavLink>
            </li>
            <li className="border-b-2 border-gray-300">
              <NavLink to="/joined-events" className="text-[17px]">
                <HiMiniPlus /> Joined Events
              </NavLink>
            </li>
            <li>
              <a className="text-[17px] flex items-center gap-1">
                <FiLogOut /> Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;