import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ProfilePage.css";

const ProfilePage: React.FC = () => {
  const [profilePic, setProfilePic] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [missionStatement, setMissionStatement] = useState("");

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfilePic(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profileData = {
      profilePic,
      interests,
      skills,
      missionStatement,
    };
    // Handle the profile data (e.g., send it to an API, or lift the state up to a parent component)
    console.log(profileData);
  };

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

      <form onSubmit={handleSubmit}>
        <label>
          Profile Picture:
          <input type="file" onChange={handleProfilePicChange} />
          {profilePic && <img src={profilePic} alt="Profile" style={{ width: '100px', height: '100px' }} />}
        </label>
        <label>
          Interests:
          <input
            type="text"
            value={interests.join(", ")}
            onChange={(e) => setInterests(e.target.value.split(", "))}
          />
        </label>
        <label>
          Skills:
          <input
            type="text"
            value={skills.join(", ")}
            onChange={(e) => setSkills(e.target.value.split(", "))}
          />
        </label>
        <label>
          Mission Statement:
          <textarea
            value={missionStatement}
            onChange={(e) => setMissionStatement(e.target.value)}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default ProfilePage;
