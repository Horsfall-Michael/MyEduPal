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
  const [profile, setProfile] = useState(null);
  const [activities, setActivities] = useState([]);
  const [matches, setMatches] = useState([]);
  const [stats, setStats] = useState(null);
  const [weeklyHours, setWeeklyHours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          setProfile(DUMMY_PROFILE);
          setStats(DUMMY_STATS);
          setActivities(DUMMY_ACTIVITIES);
          setMatches(DUMMY_MATCHES);
          setWeeklyHours(DUMMY_WEEKLY_HOURS);
          return;
        }

        const userId = user.id;

        const [
          profileRes,
          statsRes,
          activitiesRes,
          matchesRes,
          weeklyRes,
        ] = await Promise.all([
          supabase.from("profiles").select("*").eq("id", userId).single(),
          supabase.from("stats").select("*").eq("user_id", userId).single(),
          supabase
            .from("activities")
            .select("*")
            .eq("user_id", userId)
            .limit(4)
            .order("created_at", { ascending: false }),
          supabase.from("matches").select("*").eq("user_id", userId),
          supabase.rpc("get_weekly_study_hours", {
            p_user_id: userId,
          }),
        ]);

        setProfile(profileRes.data || DUMMY_PROFILE);

        setStats(
          statsRes.data && Object.keys(statsRes.data).length
            ? statsRes.data
            : DUMMY_STATS
        );

        setActivities(
          activitiesRes.data?.length
            ? activitiesRes.data
            : DUMMY_ACTIVITIES
        );

        setMatches(
          matchesRes.data?.length ? matchesRes.data : DUMMY_MATCHES
        );

        setWeeklyHours(
          weeklyRes.data?.length
            ? weeklyRes.data
            : DUMMY_WEEKLY_HOURS
        );
      } catch (error) {
        console.error(error);
        /*
        setProfile(DUMMY_PROFILE);
        setStats(DUMMY_STATS);
        setActivities(DUMMY_ACTIVITIES);
        setMatches(DUMMY_MATCHES);
        setWeeklyHours(DUMMY_WEEKLY_HOURS);
        */
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return {
    profile,
    activities,
    matches,
    stats,
    weeklyHours,
    loading,
  };
};