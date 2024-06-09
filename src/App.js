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
import Departement from './component/departement/Departement';
import AddDepartement from './component/departement/AddDepartement';
import EditDepartement from './component/departement/EditDepartement';
import ProfesseurRow from './component/professeur/ProfesseurRow';
import Filiere from './component/Filiere/Filiere';
import AddFiliere from './component/Filiere/AddFiliere';
import EditFiliere from './component/Filiere/EditFiliere';
import FiliereRow from './component/Filiere/FiliereRow';
import StudentRow from './component/Users/StudentRow';
import DeleteDisactiveUser from './component/Users/DeleteDisactiveUser';

import Student from './component/Users/Student';
import Projet from './component/projet/Projet';
import ProfSideBar from './SideBar/ProfSideBar';
import RespoSideBar from './SideBar/RespoSideBar';
import ViewProf from './component/professeur/ViewProf';
import AddProjet from './component/projet/AddProjet'
import ArchivedProjet from './component/projet/ArchivedProjet';
import EtudeSideBar from './SideBar/EtudeSideBar';
import AfeccterProject from './component/projet/AfeccterProject';

import Login from './component/Registration/Login';
import Signup from './component/Registration/SignUp'

import EditCompEtudiant from './component/Etudiant/EditCompEtudiant';
import ViewGroupEtud from './component/Etudiant/ViewGroupEtud';
import EditGroup from './component/Etudiant/EditGroupEtud';
import EditResponsable from './component/Etudiant/EditResponsable';
import ViewprofEtud from './component/Etudiant/ViewprofEtud';
import EditGroupEtud from './component/Etudiant/EditGroupEtud';
import Home from './component/Home/HomeBe';
import GroupEtudView from './component/groupe/GroupEtudView';
import CreateGroup from './component/Etudiant/CreateGroup';
import EditProfByAdmin from './component/professeur/EditProfByAdmin';
import LesProjetsRespo from './component/ResponsablePfe/LesProjetsRespo';
import AffeccterEncadRespo from './component/ResponsablePfe/AffecterEncadRespo';
import ViewGroupProf from './component/groupe/ViewGroupProf';
import ForgotPassword from './component/Registration/ForgotPassword';




function App() {
  return (
    
       
        
     
      <Router>

      <Header/>
       
        <Routes>

       <Route path="/SignUp" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
       <Route path="/Mot_de_pass" element={<ForgotPassword/>}/>
      
        {/*  /Professeur Professor dashboard      */}
        <Route path="/" element={<ProfSideBar/>} />
        <Route path="/MonProfil" element={<ViewProf/>} />
        <Route path="/ModifierCompte" element={<EditProfessur/>} />
        <Route path="/creeProjet" element={<AddProjet/>} />
        <Route path="/AffecterProjet" element={<AfeccterProject/>} />
        <Route path="/ListeProjet" element={<Projet/>} />
        <Route path="/ProjetsArchivés" element={<ArchivedProjet/>} />
        <Route path="/MesGroupesEncadrant" element={<Groupe/>} />
        <Route path="/ViewGroup" element={<ViewGroupProf/>} />
   
        {/*   Admin Dashboard */}
        <Route path="/admin" element={<AdminSideBar/>} />
        <Route path="/creeProfesseur" element={<AddProfesser/>} />
        <Route path="/Liste_Professeur" element={<Professeur/>} />
        <Route path="EditProfesseurByAdmin" element={<EditProfByAdmin/>} />
        <Route path="/admin-approuverEtud" element={<Student/>} />
        <Route path="/Suprim_disactiveCompte" element={<DeleteDisactiveUser/>} />
        <Route path="/creeDepartement" element={<AddDepartement/>} />
        <Route path="/listeDepart" element={<Departement/>} />
        <Route path="/Liste-Filiere" element={<Filiere/>} />      
        <Route path="/addFiliere" element={<AddFiliere/>} /> 
        <Route path="/addFiliere" element={<AddFiliere/>} /> 
        <Route path="/edit/:idF" element={<EditFiliere/>} /> 


         {/*    RESPONSABLE Dashboard */} 
         <Route path="/responsable" element={<RespoSideBar/>} />
        <Route path="/LesProjetsResponsable" element={<LesProjetsRespo/>} />
         <Route path="/AffecterEncadrant" element={<AffeccterEncadRespo/>} />

           {/*    Etudiant Dashboard */} 
                  

        <Route path="/EtudiantProfil" element={<ViewprofEtud/>} />
        <Route path="/ModifierCompteEtudiant" element={<EditCompEtudiant/>} />
        <Route path="/CreateGroup"       element={<CreateGroup/>} />     
       <Route path="/MonGroupeEtud" element={<ViewGroupEtud/>} />
      <Route path="/ModifierGroupe"  element={<EditGroupEtud/>} />
      <Route path="/ModifierResponsable" element={<EditResponsable/>} />

        </Routes>

        <Footer/>
      </Router> 
    
    
  );
}

export default App;
