import { LogIn } from './Pages/LogIn';

import {React, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<LogIn />} />
    </Routes>
    </>
  )
}

export default App
