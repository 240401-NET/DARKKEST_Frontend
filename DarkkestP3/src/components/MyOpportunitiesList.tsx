import React, { useEffect, useState } from "react";
import { DeleteOpp } from "../services/opportunityService";
import ApplicationsModal from "./ApplicationsModal";
import { GetAppsForOpportunity } from "../services/applicationService";

//
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

const MyOpportunitiesList = ({ userOpportunities, setUserOpportunities }: MyOpportunitiesListProps) => {
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<number | null>(null);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [applicationsState, setApplicationsState] = useState<any[]>([]);

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

  useEffect(()=>{
    const fetchApplications = async () => {
      if(selectedOpportunityId === null) {
        setApplicationsState([]);
        return;
      }
      try {
          const res = await GetAppsForOpportunity(selectedOpportunityId);
          const data = await res;
          setApplicationsState(data);
      } catch (error) {
          console.error("Failed to fetch applications:", error);
      }
    };
    fetchApplications()
  }, [selectedOpportunityId])

  const handleCardClick = (opportunityId: number) => {
    setSelectedOpportunityId(opportunityId);
    setIsApplicationModalOpen(true);
    console.log(opportunityId)
  }

  const onAppClose = ()=>{
    setIsApplicationModalOpen(false);
    setSelectedOpportunityId(null);
  }
  
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
          <div className="flex justify-between items-center mb-4">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded border border-primary-green hover:bg-primary-green hover:text-white transition duration-200"
              onClick={()=>handleCardClick(opportunity.oppId)}>
              Applications
            </button>
            <button
              data-value={opportunity.oppId}
              onClick={handleClick}
              className="bg-white text-black font-semibold py-2 px-4 rounded border border-primary-green hover:bg-primary-green hover:text-white transition duration-200">

              Delete
            </button>
          </div>

          {/* Modal for Applications */}
          <ApplicationsModal
            isAppOpen={isApplicationModalOpen}
            onAppClose={onAppClose}
            applicationsState = {applicationsState}

            // oppId={selectedOpportunityId}
          />
        </div>
      ))}
    </div>
  );
};

export default MyOpportunitiesList;