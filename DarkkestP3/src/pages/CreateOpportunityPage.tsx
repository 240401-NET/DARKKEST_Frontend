import React, { useState } from "react";

const CreateOpportunitiesPage: React.FC = () => {
  

  const [JobTitle, setJobTitleState] = useState<string[]>([]);
  const [Description, setDescriptionState] = useState("");

  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const opportunityData = {
    JobTitle,
    Description,
    };
    console.log(opportunityData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Job Title:
        <input
          type="text"
          value={JobTitle.join(", ")}
          onChange={(e) => setJobTitleState(e.target.value.split(", "))}
        />
      </label>
      <label>
        Description:
        <textarea
          value={Description}
          onChange={(e) => setDescriptionState(e.target.value)}
        />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default CreateOpportunitiesPage;
