import {React, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LogIn } from './Pages/LogIn';
import { CreateAccount } from './Pages/SignUp';
import { VerifyEmail } from './Pages/EmailVerification';
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<VerifyEmail />} />
      <Route path='/sign-up' element={<CreateAccount/>}/>
      <Route path='/log-in' element={<LogIn/>}/>
    </Routes>
    </>
  )
}

export default App
