import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProfilePage: React.FC = () => {
  return (
    <>
      <div>
        <h1>Profile</h1>
      </div>
      <NavLink to="/opp">
        <button className="ProButtons">View Opportunities</button>
      </NavLink>
      <NavLink to="/createopp">
        <button className="ProButtons">Create Opportunity</button>
      </NavLink>
      <NavLink to="/edit">
        <button className="ProButtons">Edit Profile</button>
      </NavLink>
    </>
  );
};

export default ProfilePage;
