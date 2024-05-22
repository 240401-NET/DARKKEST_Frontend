import React, { useState } from "react";

const EditProfileForm: React.FC = () => {
  const [profilePic, setProfilePicState] = useState("");
  const [interests, setInterestsState] = useState<string[]>([]);
  const [skills, setSkillsState] = useState<string[]>([]);
  const [missionStatement, setMissionStatementState] = useState("");

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setProfilePicState(reader.result as string);
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
    <form onSubmit={handleSubmit}>
      <label>
        Profile Picture:
        <input type="file" onChange={handleProfilePicChange} />
      </label>
      <label>
        Interests:
        <input
          type="text"
          value={interests.join(", ")}
          onChange={(e) => setInterestsState(e.target.value.split(", "))}
        />
      </label>
      <label>
        Skills:
        <input
          type="text"
          value={skills.join(", ")}
          onChange={(e) => setSkillsState(e.target.value.split(", "))}
        />
      </label>
      <label>
        Mission Statement:
        <textarea
          value={missionStatement}
          onChange={(e) => setMissionStatementState(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default EditProfileForm;
