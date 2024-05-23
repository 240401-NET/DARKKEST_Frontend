import React from 'react';
import { NavLink } from 'react-router-dom';
import logoGreenBackground from '../assets/logoGreenBackground.jpg';
import { useAuth } from '../context/AuthContext';

const LeftSideBar = () => {
  const{user} = useAuth();
  return (
    <div className="flex-1 bg-gray-100 p-6" style={{ fontFamily: 'Roboto, sans-serif' }}>
      <div className="text-left text-2xl leading-tight pt-24 font-normal">
        <div className="flex flex-col items-center">
          {/* User Image */}
          <div className="w-32 h-32 mb-4">
            <img src={logoGreenBackground} alt="User" className="w-full h-full rounded-full object-cover" />
          </div>
          <p className="mb-4">Hello, {user || "Joey Kravtiz"}!</p>
        </div>
        <hr className="border-gray-300 my-4 w-full" />
        <nav className="flex flex-col items-start pl-8 space-y-4">
          <NavLink
              to="/landing"
              className="text-sm font-thin hover:underline hover:text-primary-green"
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className="text-sm font-thin hover:underline hover:text-primary-green"
          >
            Edit Profile
          </NavLink>
          <NavLink
            to="/your-opportunities"
            className="text-sm font-thin hover:underline hover:text-primary-green"
          >
            Your Opportunities
          </NavLink>
          <NavLink 
            to="/organizations"
            className="text-sm font-thin hover:underline hover:text-primary-green"> 
            Organizations
          </NavLink>
          <NavLink
            to="/current-applications"
            className="text-sm font-thin hover:underline hover:text-primary-green"
          >
            Current Applications
          </NavLink>
          <NavLink
            to="/donate"
            className="text-sm font-thin hover:underline hover:text-primary-green"
          >
            Donate
          </NavLink>
          <NavLink
            to="/faqs"
            className="text-sm font-thin hover:underline hover:text-primary-green"
          >
            FAQs
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default LeftSideBar;
