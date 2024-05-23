import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { UserProfile, getProfile, updateUserProfile, deleteUserProfile } from "../services/profileServices";

const ProfilePage: React.FC = () => {
  const [currentUserId, setUserId] = useState("");
  const [profileId, setProfileId] = useState(0);
  const [interests, setInterests] = useState("");
  const [skills, setSkills] = useState("");
  const [missionStatement, setMissionStatement] = useState("");
  useEffect(() => {
    getProfile().then((profile) => {
      if (profile) {
        setUserId(currentUserId);
        setProfileId(profileId);
        setInterests(interests);
        setSkills(skills);
        setMissionStatement(missionStatement);
      }
    })
  }, []);
  

  // const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       if (reader.result) {
  //         setProfilePic(reader.result as string);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedProfile: UserProfile = {
      // ProfileId: profileId,
      userId: currentUserId,
      updatedInterests: interests,
      updatedSkills: skills,
      updatedMissionStatement: missionStatement,
    }
    updateUserProfile(updatedProfile).then((profile) => {
      if (profile) {
        setUserId(currentUserId);
        // setProfileId(profileId);
        setInterests(interests);
        setSkills(skills);
        setMissionStatement(missionStatement);
      }
    })
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
        {/* <label>
          Profile Picture:
          <input type="file" onChange={handleProfilePicChange} />
          {profilePic && <img src={profilePic} alt="Profile" style={{ width: '100px', height: '100px' }} />}
        </label> */}
        <label>
          Interests:
          <input
            type="text"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
          />
        </label>
        <label>
          Skills:
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
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
