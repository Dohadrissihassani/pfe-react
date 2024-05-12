import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Professeur from './component/professeur/Professeur';
import AddProfesser from './component/professeur/addProfesser/AddProfesser';
import EditProfessur from './component/professeur/EditProfesseur/EditProfessur';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Professeur />} />
          <Route path="/add" element={<AddProfesser />} />
          <Route path="/edit/:id" element={<EditProfessur />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
