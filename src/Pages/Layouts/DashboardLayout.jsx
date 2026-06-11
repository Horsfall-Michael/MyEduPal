import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase-client";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/layout/Sidebar";
import "./DashboardLayout.css";

export default function DashboardLayout() {
  const [user, setUser] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();
  }, []);

 return (
    <div className="dashboard-layout">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <main
        className={`dashboard-content ${
          collapsed ? "collapsed" : ""
        }`}
      >
        <Outlet
        user = {user} />
      </main>
    </div>
  );
}
