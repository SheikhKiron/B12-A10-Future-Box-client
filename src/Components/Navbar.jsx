import React, { use, useEffect, useState } from 'react';
import logo from '../assets/logo (2).png'
import { Link, NavLink } from 'react-router';
import { FiLogOut } from 'react-icons/fi';
import { MdManageAccounts } from 'react-icons/md';
import { HiMiniPlus } from 'react-icons/hi2';
import { IoIosCreate } from 'react-icons/io';
import { AuthContext } from '../Auth/AuthContext';
import { toast } from 'react-toastify';
const Navbar = () => {
  const { user, logOut } = use(AuthContext)

    const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
      const html = document.querySelector('html');
      html.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }, [theme]);

    const handleTheme = checked => {
      setTheme(checked ? 'dark' : 'light');
    };

 
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logout Successfully')
      })
      .catch(err => {
        console.log(err.message);
    })
  }
  return (
    <div className="bg-base-100 text-base-content">
      <div className="navbar md:w-11/12 mx-auto  px-4">
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

        <div className="navbar-end gap-2">
          {user ? (
            <div className="flex gap-5">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                  data-tip={user.displayName}
                >
                  <div className="w-10 rounded-full border-2">
                    <img
                      alt="Profile"
                      src={
                        user.photoURL
                          ? user.photoURL
                          : 'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=740&q=80'
                      }
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <p className="text-center font-semibold">
                    {user.displayName}
                  </p>
                  <p className="text-center border-b-2 border-gray-300 pb-1 text-sm text-gray-500">
                    {user.email}
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
                  <li>
                    <NavLink to="/joined-events" className="text-[17px]">
                      <HiMiniPlus /> Joined Events
                    </NavLink>
                  </li>
                  <label className="swap swap-rotate border-t-2 border-gray-200 border-0  ">
                    {/* this hidden checkbox controls the state */}
                    <input
                      type="checkbox"
                      className="theme-controller"
                      value="synthwave"
                      onChange={e => handleTheme(e.target.checked)}
                      defaultChecked={localStorage.getItem('theme') === 'dark'}
                    />

                    {/* sun icon */}
                    <svg
                      className="swap-off h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-on h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>
                </ul>
              </div>
              <button
                className="text-[16px] flex items-center gap-1 btn bg-[#0a400c] text-white"
                onClick={handleLogout}
              >
                <FiLogOut /> Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2.5">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="synthwave"
                  onChange={e => handleTheme(e.target.checked)}
                  defaultChecked={localStorage.getItem('theme') === 'dark'}
                />

                {/* sun icon */}
                <svg
                  className="swap-off h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-10 w-10 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
              <Link
                to="/register"
                className="btn bg-[#0a400c] text-[16px] text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;