import React from 'react';

import RespoSideBar from './pages/RespoSideBar'
import AdminSideBar from './pages/AdminSideBar';
import ProfSideBar from './pages/ProfSideBar';
import EtudeSideBar from './pages/EtudeSideBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<EtudeSideBar/>}/>
    <Route path="/prof" element={<ProfSideBar/>}/>
    <Route path="/admin" element={<AdminSideBar/>}/>
    <Route path="/respo" element={<RespoSideBar/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
