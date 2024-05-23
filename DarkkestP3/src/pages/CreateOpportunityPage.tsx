import React, { useState, useEffect } from "react";
import { GetUserOpps, CreateOpp } from "../services/opportunityService";

interface Opportunity {
  jobTitle: string;
  description: string;
}

const CreateOpportunitiesPage: React.FC = () => {
  const [JobTitle, setJobTitleState] = useState("");
  const [Description, setDescriptionState] = useState("");
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);

  useEffect(() => {
    const fetchOpportunities = async () => {
      const res = await GetUserOpps();
      if (!res) {
        throw new Error('Failed to fetch opportunities');
      }
      console.log(res);
      setOpportunities(res);
      console.log(opportunities);
    };
    fetchOpportunities();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const opportunityData = {
      JobTitle,
      Description,
    };
    try {
      const res = await CreateOpp(opportunityData);
      if (!res || !res.ok) {
        throw new Error('Failed to create opportunity');
      }
      const newOpportunity = await res.json();
      setOpportunities([...opportunities, {jobTitle: JobTitle, description: Description}]);
      //setJobTitleState([]);
      //setDescriptionState("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Job Title:
          <input
            type="text"
            value={JobTitle}
            onChange={(e) => setJobTitleState(e.target.value)}
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
      <div>
        {opportunities.map((opportunity, index) => (
          <div key={index}>
            <h2>Job Title: {opportunity.jobTitle}</h2>
            <p>Description: {opportunity.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateOpportunitiesPage;