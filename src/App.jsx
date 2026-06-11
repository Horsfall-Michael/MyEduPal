import { Routes, Route } from "react-router-dom";
import { LogIn } from "./Pages/Forms/LogIn";
import { CreateAccount } from "./Pages/Forms/SignUp";
import { VerifyEmail } from "./Pages/Forms/EmailVerification";
import { ResetPassword } from "./Pages/Forms/ResetPassword";
import { HomePage } from "./Pages/Public/Home";
import DashboardLayout from "./Pages/Layouts/DashboardLayout";
import {ProtectedRoute} from "./components/ProtectedRoute";
import PeerMatching from "./Pages/dashboard/PeerMatching"
import StudyGroups from "./Pages/dashboard/StudyGroups"
import TextbookStore from "./Pages/dashboard/TextbookStore"
import Settings from "./Pages/dashboard/Settings";
import NotesAndQuestions from "./Pages/dashboard/NotesAndQuestions";
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
          <Route path="settings" element={<Settings />} />
          <Route path="notes-&-questions" element={<NotesAndQuestions />}/>
          <Route path="peer-matching" element={<PeerMatching />}/>
          <Route path="study-groups" element={<StudyGroups/>}/>
          <Route path="textbook-store" element={<TextbookStore />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
