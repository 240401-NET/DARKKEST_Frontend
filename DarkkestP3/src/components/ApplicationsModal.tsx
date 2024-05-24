import React, { useEffect, useState } from "react";
import { GetAppsForOpportunity } from "../services/applicationService";
import ApplicationListComponent from "./ApplicationListComponent";

interface ModalProps {
    isAppOpen: boolean;
    onAppClose: () => void;
    applicationsState: any[];
}
const ApplicationsModal: React.FC<ModalProps> = ({
    isAppOpen,
    onAppClose,
    applicationsState,
    // oppId
}) => {
    // const [applicationsState, setApplicationsState] = useState<any[]>([]);
    // useEffect(() => {
    //     fetchApplications();
    // }, []); // Add opportunity as a dependency
    // const fetchApplications = async () => {
    //     try {
    //         const res = await GetAppsForOpportunity(oppId);
    //         const data = await res;
    //         setApplicationsState(data);
    //     } catch (error) {
    //         console.error("Failed to fetch applications:", error);
    //     }
    // };
    if (!isAppOpen) return null;

    let appList;
    if (applicationsState.length === 0) {
        appList = <h3>No Applications</h3>
    } else {
        appList = applicationsState.map((app) => (
            // console.log(app),
            <ApplicationListComponent key={app.appId} data={app} />
        ))
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg w-1/2 h-1/2 overflow-y-auto relative">
                <button className="absolute top-4 right-4 text-black" onClick={onAppClose}>
                    &times;
                </button>

                <div className="mt-8 text-left px-8">
                    {appList}
                </div>
            </div>
        </div>
    )
}
export default ApplicationsModal;