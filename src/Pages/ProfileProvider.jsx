import { createContext, useContext, useState } from "react";
import { DUMMY_PROFILE } from "../components/UserData";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");

    return savedProfile ? JSON.parse(savedProfile) : DUMMY_PROFILE;
  });

  const saveProfile = (updatedProfile) => {
    setProfile(updatedProfile);
    localStorage.setItem("profile", JSON.stringify(updatedProfile));
  };
  <ProfileContext.Provider
    value={{
      profile,
      setProfile,
      saveProfile,
    }}
  >
    {children}
  </ProfileContext.Provider>;

  return (
    <ProfileContext.Provider
      value={{
        profile,
        saveProfile,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
