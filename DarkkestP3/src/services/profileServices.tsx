import { BaseURL } from '../constants/Constant';

//you can just paste this in the profile page, instead of importing this
export interface UserProfile {
  // ProfileId: number;
  userId: string | null;
  updatedInterests: string;
  updatedSkills: string;
  updatedMissionStatement: string;
}

export interface curProfile {
  // ProfileId: number;
  userId: string;
  interersts: string;
  skills: string;
  missionStatement: string;
}

export const getProfile = async (): Promise<curProfile | null> => {
  try {
    const response = await fetch(BaseURL + 'profile/get', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    });

    if (response.ok) {
      const result: curProfile = await response.json();
      return result;
    } else {
      console.error(
        'Failed to get profile:',
        response.status,
        response.statusText,
      );
      return null;
    }
  } catch (error) {
    console.error('Error getting profile:', error);
    return null;
  }
};

export const updateUserProfile = async (
  updateProfile: UserProfile,
): Promise<UserProfile | null> => {
  try {
    console.log(updateProfile);
    const response = await fetch(BaseURL + 'profile/update', {
      method: 'PUT',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateProfile),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Profile updated successfully:', result);
      alert('Updated Profile Saved');  // Show success message
      return result;
    } else {
      console.error(
        'Failed to update profile:',
        response.status,
        response.statusText,
      );
      return null;
    }
  } catch (error) {
    console.error('Error updating profile:', error);
    return null;
  }
};

export const deleteUserProfile = async (): Promise<void> => {
  try {
    const response = await fetch(BaseURL + 'profile/delete', {
      method: 'DELETE',
      mode: 'cors',
      credentials: 'include',
    });
    if (response.ok) {
      const result = await response.json();
      console.log('Profile deleted successfully:', result);
    } else {
      console.error(
        'Failed to delete profile:',
        response.status,
        response.statusText,
      );
    }
  } catch (error) {
    console.error('Error deleting profile:', error);
  }
};
