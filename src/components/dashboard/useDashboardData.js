import { useState, useEffect } from "react";
import { supabase } from "../../utils/supabase-client";

import {
  DUMMY_ACTIVITIES,
  DUMMY_MATCHES,
  DUMMY_PROFILE,
  DUMMY_STATS,
  DUMMY_WEEKLY_HOURS,
} from "../UserData";

export const useDashboardData = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        setUser(user);
      } catch (error) {
        console.error("Auth check failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  return {
    user,
    profile: DUMMY_PROFILE,
    activities: DUMMY_ACTIVITIES,
    matches: DUMMY_MATCHES,
    stats: DUMMY_STATS,
    weeklyHours: DUMMY_WEEKLY_HOURS,

    loading,
  };
};