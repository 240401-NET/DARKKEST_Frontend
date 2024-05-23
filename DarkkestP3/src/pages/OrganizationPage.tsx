import React, { useState, useEffect } from 'react';
import LeftSideBar from "../components/LeftSideBar";
import { RegisterOrganization, UpdateOrganization, DeleteOrganization, GetOrganizationsByUser } from '../services/organizationServices';
import '../index.css';

type Organization = {
    orgId: number;
    name: string;
    address: string;
};

const OrganizationPage = () => {
    const [org, setOrg] = useState<Organization>({ orgId: 0, name: '', address: '' });
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [editingOrgId, setEditingOrgId] = useState<number | null>(null);

    const fetchOrganizations = async () => {
        try {
            const orgs = await GetOrganizationsByUser();
            console.log('Fetched organizations:', orgs);
            setOrganizations(orgs);
        } catch (error) {
            console.error('Failed to fetch organizations:', error);
        }
    };

    useEffect(() => {
        fetchOrganizations();
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrg({ ...org, [event.target.name]: event.target.value });
    };

    const handleRegister = async () => {
        const response = await RegisterOrganization(org);
        if (response && response.ok) {
            fetchOrganizations();
        } else {
            console.error('Failed to register organization:', response);
        }
    };

    const handleUpdate = async () => {
        const response = await UpdateOrganization(org);
        if (response && response.ok) {
            fetchOrganizations();
            setEditingOrgId(null);
            setOrg({ orgId: 0, name: '', address: '' });
        } else {
            console.error('Failed to update organization:', response);
        }
    };

    const handleDelete = async (orgId: number) => {
        const response = await DeleteOrganization({ OrgId: orgId });
        if (response && response.ok) {
            setOrganizations(organizations.filter(org => org.orgId !== orgId));
        } else {
            console.error('Failed to delete organization:', response);
        }
    };

    const handleEdit = (organization: Organization) => {
        setOrg(organization);
        setEditingOrgId(organization.orgId);
    };

    return (
        <>
            <nav className="navbar">
                {/* Your navbar content */}
            </nav>
            <section className="flex flex-col min-h-screen pt-10 bg-gray-100 main-content">
                <div className="flex h-full">
                    {/* Left Sidebar */}
                    <div className="w-1/4">
                        <LeftSideBar />
                    </div>

                    {/* Main Content */}
                    <div className="w-1/2 p-6 mx-auto bg-white rounded-md shadow-md">
                        <h1 className="mb-6 text-4xl font-semibold leading-tight">Organization Page</h1>
                        <div>
                            <h2 className="mb-2 text-2xl">Organization</h2>
                            <input
                                type="text"
                                name="name"
                                value={org.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="input-field"
                            />
                            <input
                                type="text"
                                name="address"
                                value={org.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                                className="input-field"
                            />
                            <button
                                onClick={editingOrgId !== null ? handleUpdate : handleRegister}
                                className={`button ${editingOrgId !== null ? 'button-edit' : 'button-register'}`}
                            >
                                {editingOrgId !== null ? 'Update' : 'Register'}
                            </button>
                        </div>
                        <div>
                            {organizations.map((organization) => (
                                <div key={organization.orgId} className="organization-card">
                                    <h3>{organization.name}</h3>
                                    <p>{organization.address}</p>
                                    <button onClick={() => handleEdit(organization)}
                                        className="button button-edit"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(organization.orgId)}
                                        className="button button-delete"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="w-1/4 p-4 bg-gray-200">{/* Right sidebar content */}</div>
                </div>
            </section>
        </>
    );
};

export default OrganizationPage;
