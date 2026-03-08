import {React, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LogIn } from './Pages/LogIn';
import { CreateAccount } from './Pages/SignUp';
import { VerifyEmail } from './Pages/EmailVerification';
import {ResetPassword} from './Pages/ResetPassword'
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<VerifyEmail />} />
      <Route path='/sign-up' element={<CreateAccount/>}/>
      <Route path='/log-in' element={<LogIn/>}/>
      <Route path='/reset-password' element={<ResetPassword/>}/>
    </Routes>
    </>
  )
}

export default App
