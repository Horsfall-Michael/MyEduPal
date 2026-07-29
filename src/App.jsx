import { Routes, Route, Navigate } from "react-router-dom";
import { LogIn } from "./Pages/Forms/LogIn";
import { CreateAccount } from "./Pages/Forms/SignUp";
import { VerifyEmail } from "./Pages/Forms/EmailVerification";
import { ResetPassword } from "./Pages/Forms/ResetPassword";
import { HomePage } from "./Pages/Public/Home";
import DashboardLayout from "./Pages/Layouts/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import PeerMatching from "./Pages/dashboard/PeerMatching";
import StudyGroups from "./Pages/dashboard/StudyGroups";
import TextbookStore from "./Pages/dashboard/TextbookStore";
import Settings from "./Pages/Layouts/SettingsLayout";
import NotesAndQuestions from "./Pages/dashboard/NotesAndQuestions";
import DashboardHome from "./Pages/dashboard/DashboardHome";
import ChatPage from "./Pages/dashboard/Chat";
import ProfileSettings from "./Pages/settings/ProfileSetting";
import AcademicSettings from "./Pages/settings/AcademicSettings";
import SecuritySettings from "./Pages/settings/SecuritySettings";
import NotificationSettings from "./Pages/settings/NotificationSettings";
import "./App.css";
import { ProfileProvider } from "./Pages/ProfileProvider";

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
              <ProfileProvider>
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
              </ProfileProvider>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="settings/" element={<Settings />}>
              <Route
                index
                element={<Navigate to="profile-settings" replace />}
              />
              <Route path="profile-settings" element={<ProfileSettings />} />
              <Route path="academic-settings" element={<AcademicSettings />} />
              <Route path="security-settings" element={<SecuritySettings />} />
              <Route
                path="notification-settings"
                element={<NotificationSettings />}
              />
            </Route>
            <Route path="notes-&-questions" element={<NotesAndQuestions />} />
            <Route path="peer-matching" element={<PeerMatching />} />
            <Route path="study-groups" element={<StudyGroups />} />
            <Route path="textbook-store" element={<TextbookStore />} />
            <Route path="chat/:conversationId" element={<ChatPage />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
