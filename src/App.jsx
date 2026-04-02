import { Routes, Route } from "react-router-dom";
import { LogIn } from "./Pages/Forms/LogIn";
import { CreateAccount } from "./Pages/Forms/SignUp";
import { VerifyEmail } from "./Pages/Forms/EmailVerification";
import { ResetPassword } from "./Pages/Forms/ResetPassword";
import { HomePage } from "./Pages/Public/Home";
import DashboardLayout from "./Pages/Layouts/DashboardLayout";
import {ProtectedRoute} from "./components/ProtectedRoute";
import Profile from "./Pages/dashboard/Profile";
import Settings from "./Pages/dashboard/Settings";
import DashboardHome from "./Pages/dashboard/DashboardHome";
import "./App.css";


function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
