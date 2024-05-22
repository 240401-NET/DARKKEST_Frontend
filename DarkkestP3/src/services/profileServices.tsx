import { BaseURL } from "../constants/Constant";

//you can just paste this in the profile page, instead of importing this
export interface UserProfile {
    userId: string | null;
    updatedInterests: string;
    updatedSkills: string;
    updatedMissionStatement: string;
}

export const getProfile = async (): Promise<UserProfile | null> => {
    try{
        const response = await fetch(BaseURL + "profile/get", {
            method: "GET",
            mode: "cors",
            credentials: "include",
        });
        
        if (response.ok) {
            const result: UserProfile = await response.json();
            return result;
        } else {
            console.error("Failed to get profile:", response.status, response.statusText);
            return null;
        }
    } catch (error) {
        console.error("Error getting profile:", error);
        return null;
    }
}

export const updateUserProfile = async (updateProfile: UserProfile): Promise<void> => {
    try {
        const response = await fetch(BaseURL + "profile/update", {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProfile)
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Profile updated successfully:", result);
        } else {
            console.error("Failed to update profile:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error updating profile:", error);
    }
}

export const deleteUserProfile = async (): Promise<void> => {
    try{
        const response = await fetch(BaseURL + "profile/delete", {
            method: "DELETE",
            mode: "cors",
            credentials: "include",
        });
        if (response.ok) {
            const result = await response.json();
            console.log("Profile deleted successfully:", result);
        } else {
            console.error("Failed to delete profile:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error deleting profile:", error);
    }
}