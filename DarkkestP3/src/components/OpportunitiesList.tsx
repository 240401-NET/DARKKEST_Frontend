import React from "react";

interface Opportunity {
  jobTitle: string;
  description: string;
}

interface OpportunitiesListProps {
  opportunities: Opportunity[];
}

const OpportunitiesList: React.FC<OpportunitiesListProps> = ({ opportunities }) => {
  return (
    <div className="space-y-4">
      {opportunities.map((opportunity, index) => (
        <div key={index} className="border rounded p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Job Title: {opportunity.jobTitle}</h2>
          <p className="text-gray-700">Description: {opportunity.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OpportunitiesList;
