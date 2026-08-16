import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabase-client";
import { DUMMY_PROFILE } from "../components/UserData";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setProfile(null);
          setUser(null);
          return;
        }

        setUser(user);

        const profileKey = `profile_${user.id}`;

        const savedProfile = localStorage.getItem(profileKey);

        if (savedProfile) {
          setProfile(JSON.parse(savedProfile));
        } else {
          const metadata = user.user_metadata || {};

          const userProfile = {
            ...DUMMY_PROFILE,

            id: user.id,

            
            name: metadata.fullname || DUMMY_PROFILE.name,
            email: user.email || DUMMY_PROFILE.email,
            company: metadata.university || DUMMY_PROFILE.university,
          };

          setProfile(userProfile);

          localStorage.setItem(
            profileKey,
            JSON.stringify(userProfile)
          );
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  const saveProfile = (updatedProfile) => {
    if (!user) {
      console.error("Cannot save profile: no user is logged in");
      return;
    }

    const profileKey = `profile_${user.id}`;

    setProfile(updatedProfile);

    localStorage.setItem(
      profileKey,
      JSON.stringify(updatedProfile)
    );
  };

  return (
    <ProfileContext.Provider
      value={{
        profile,
        user,
        saveProfile,
        setProfile,
        loading,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error(
      "useProfile must be used within a ProfileProvider"
    );
  }

  return context;
}
