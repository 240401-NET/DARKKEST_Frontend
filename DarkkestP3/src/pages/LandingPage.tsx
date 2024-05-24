import React, { useState, useEffect } from "react";
import { GetUserOpps, CreateOpp, GetAllOpps } from "../services/opportunityService";
import LeftSideBar from "../components/LeftSideBar";
import OpportunitiesList from "../components/OpportunitiesList";
import OpportunityFormModal from "../components/OpportunityFormModal";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

interface Opportunity {
  oppId: number;
  appUserId: string;
  jobTitle: string;
  description: string;
}

const LandingPage: React.FC = () => {
  const [oppId, setoppIdState] = useState(0);
  const [appUserId, setappUserIdState] = useState("");
  const [JobTitle, setJobTitleState] = useState("");
  const [Description, setDescriptionState] = useState("");
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        const res = await GetAllOpps();
        const data = await res;
        setOpportunities(data);
      } catch (error) {
        console.error("Failed to fetch opportunities:", error);
      }
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
      setOpportunities([
        ...opportunities,
        {
          oppId: oppId,
          appUserId: appUserId,
          jobTitle: JobTitle,
          description: Description,
        },
      ]);
      setoppIdState(0);
      setappUserIdState("");
      setJobTitleState("");
      setDescriptionState("");
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const filteredOpportunities = opportunities.filter((opportunity) =>
    opportunity.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <section className="min-h-screen flex flex-col bg-secondary-white pt-10 md:h-full">
      <div className="flex h-full">
        {/* Left Sidebar */}
        <LeftSideBar />
        {/* Main Content */}
        <div className="overflow-y-auto flex-2 bg-white w-2/4 pt-20 p-4">
          <div className="flex justify-between items-center mb-4">
            <h1
              className="text-2xl font-semibold leading-tight"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}
            >
              Opportunities
            </h1>
            <button
              className="bg-white text-black font-semibold py-2 px-4 rounded border border-primary-green hover:bg-primary-green hover:text-white transition duration-200"
              onClick={() => setIsModalOpen(true)}
            >
              Create New Opportunity
            </button>
          </div>
          <div className="relative">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for opportunities"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border rounded p-2 w-full pl-10"
              style={{ fontFamily: 'Lato, sans-serif', fontWeight: 400 }}
            />
            <MagnifyingGlassIcon className="h-5 w-5 absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="OppApp">Click on Opportunity to Apply</div>
          <div className="mt-8 text-left px-8">
            <div className="mt-8 flex flex-col space-x-4 justify-center">
              {/* Display OpportunitiesList */}
              <NavLink to="ApplicationPage">
                <OpportunitiesList opportunities={filteredOpportunities} />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="flex-1 bg-gray-200 p-4">
          {/* Right sidebar content */}
        </div>
      </div>

      {/* Modal for creating new opportunities */}
      <OpportunityFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
        JobTitle={JobTitle}
        Description={Description}
        setJobTitleState={setJobTitleState}
        setDescriptionState={setDescriptionState}
      />
    </section>
  );
};

export default LandingPage;
