
import React from 'react';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import ModifierVotreCompte from './pages/ModifierVotreCompte';
import NavBar from './pages/NavBar';
import SideBar from './pages/SideBar';
import Professeur from './component/professeur/Professeur';
import AddProfesser from './component/professeur/addProfesser/AddProfesser';
import EditProfessur from './component/professeur/EditProfesseur/EditProfessur';

function App() {
  return (
   <>
     
    <Router>
    <NavBar/>
     <SideBar/>
     <Switch>
        <Route exact path="/" > 
         <Professeur/>
       </Route>
        <Route exact path="/add" > 
         <AddProfesser/>
       </Route>
       <Route exact path="/edit/:id" render={ props=> <EditProfessur/>} > 
         <EditProfessur/>
       </Route>

     </Switch>
  
    </Router>

     </>

    
    
  );
}

export default App;
