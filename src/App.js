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
import Student from './component/Users/ApprouverEtud';
import StudentRow from './component/Users/StudentRow';
import ApprouverEtud from './component/Users/ApprouverEtud';
import DeleteDisactiveUser from './component/Users/DeleteDisactiveUser';
function App() {
  return (
    
       

     
      <Router>
        <Header/>
        <Routes>
     
          <Route path="/creeProfesseur" element={<AddProfesser/>} />
                    <Route path="/Liste_Professeur" element={<Professeur/>} />
                    <Route path="/admin-approuverEtud" element={<ApprouverEtud/>} />
                    <Route path="/Suprim_disactiveCompte" element={<DeleteDisactiveUser/>} />
                    <Route path="/creeDepartement" element={<AddDepartement/>} />
                    <Route path="/listeDepart" element={<Departement/>} />
                    <Route path="/Liste-Filiere" element={<Filiere/>} />
                    <Route path="/addFiliere" element={<AddFiliere/>} />

                    {/*<Route path="/homeBefore" element={<HomeBefore/>} />*/}
         

        </Routes>

        <Footer/>
      </Router> 
    
    
  );
}

export default App;
