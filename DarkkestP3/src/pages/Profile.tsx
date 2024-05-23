import React, { useState, useEffect } from "react";
import { UserProfile, getProfile, updateUserProfile } from "../services/profileServices";
import LeftSideBar from "../components/LeftSideBar";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type Props = {};

const Profile = (props: Props) => {
    const [currentUserId, setUserId] = useState("");
    const [profileId, setProfileId] = useState(0);
    const [interests, setInterests] = useState("");
    const [skills, setSkills] = useState("");
    const [missionStatement, setMissionStatement] = useState("");

    useEffect(() => {
        getProfile().then((profile) => {
            if (profile) {
                setUserId(profile.userId);
                setInterests(profile.interersts); //please keep this misspelled 
                setSkills(profile.skills);
                setMissionStatement(profile.missionStatement);
            }
        });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const updatedProfile: UserProfile = {
            userId: currentUserId,
            updatedInterests: interests,
            updatedSkills: skills,
            updatedMissionStatement: missionStatement,
        };
        updateUserProfile(updatedProfile).then((profile) => {
            if (profile) {
                setUserId(currentUserId);
                setInterests(interests);
                setSkills(skills);
                setMissionStatement(missionStatement);
            }
        });
    };

    return (
        <section className="min-h-screen flex flex-col bg-secondary-white pt-10 md:h-full">
            <div className="flex h-full">
                {/* Left Sidebar */}
                <LeftSideBar />

                {/* Main Content */}
                <div className="flex-2 bg-white w-2/4 pt-20 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-4xl font-semibold leading-tight" style={{ fontFamily: "Lato, sans-serif", fontWeight: 400 }}>
                            Edit Profile
                        </h1>
                    </div>
                    <div className="relative">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Interests:
                                </label>
                                <input
                                    type="text"
                                    value={interests}
                                    onChange={(e) => setInterests(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Skills:
                                </label>
                                <input
                                    type="text"
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Mission Statement:
                                </label>
                                <textarea
                                    value={missionStatement}
                                    onChange={(e) => setMissionStatement(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="flex-1 bg-gray-200 p-4">{/* Right sidebar content */}</div>
            </div>
        </section>
    );
};

export default Profile;
