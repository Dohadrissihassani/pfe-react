import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Professeur from './component/professeur/Professeur';
import AddProfesser from './component/professeur/AddProfesser';
import EditProfessur from './component/professeur/EditProfessur';
import Groupe from './component/groupe/Groupe';
import AddGroupe from './component/groupe/AddGroupe';
import Header from './SideBar/Header';
import Footer from './SideBar/Footer';
import AdminSideBar from './SideBar/AdminSideBar';
function App() {
  return (
    
       

     
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Professeur />} />
          <Route path="/" element={<AdminSideBar />} />
          <Route path="/addProf" element={<AddProfesser />} />
          <Route path="/edit/:id" element={<EditProfessur />} />
          <Route path="/addGroup" element={<AddGroupe />} />
       

        </Routes>
        <Footer/>
      </Router> 
    
    
  );
}

export default App;
