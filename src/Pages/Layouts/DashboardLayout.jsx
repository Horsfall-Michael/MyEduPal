import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase-client";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/dashboard/Sidebar";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();
  }, []);

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <main className="dashboard-content">
        <Outlet user = {user}/>
      </main>
    </div>
  );
}
