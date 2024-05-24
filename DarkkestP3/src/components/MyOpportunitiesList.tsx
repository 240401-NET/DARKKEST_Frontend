import React, { useState } from "react";
import { DeleteOpp } from "../services/opportunityService";
import { useEffect } from "react";
import { GetUserOpps } from "../services/opportunityService";

interface MyOpportunity {
  jobTitle: string;
  description: string;
  oppId: number;
  appUserId: string;
}

type MyOpportunitiesListProps = {
  userOpportunities: MyOpportunity[];
  setUserOpportunities: (myOpportunities: MyOpportunity[]) => void;
};

const MyOpportunitiesList = ({userOpportunities,setUserOpportunities}: MyOpportunitiesListProps) => {


  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let value = e.currentTarget.getAttribute("data-value");
    if (value) {
      const tuneId: number = parseInt(value);
      try {
        const res = await DeleteOpp(tuneId);
        if (!res || !res.ok) {
          throw new Error("Failed to create opportunity");
        }
        setUserOpportunities(userOpportunities.filter((opp) => opp.oppId !== tuneId))
      } catch (error) {
        console.error("Failed to delete", error);
      }
    } else {
      console.error("No data-value attribute found");
    }
  };

 

  return (
    <div className="space-y-4">
      {userOpportunities.map((opportunity, index) => (
        <div key={index} className="border rounded p-4 shadow-sm">
          <h2 className="text-xl font-semibold mb-2">
            Job Title: {opportunity.jobTitle}
          </h2>
          <p className="text-gray-700">
            Description: {opportunity.description}
          </p>
          <div id="MOBDiv">
            <button
              data-value={opportunity.oppId}
              onClick={handleClick}
              id="MOB"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOpportunitiesList;