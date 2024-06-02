import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AffecterEncadRespo() {
    const [groups, setGroups] = useState([]);
    const [professors, setProfessors] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedProfessor, setSelectedProfessor] = useState('');

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/groups'); // Update with your backend endpoint
                setGroups(response.data);
            } catch (error) {
                console.error('Error fetching groups:', error);
            }
        };

        const fetchProfessors = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/professors'); // Update with your backend endpoint
                setProfessors(response.data);
            } catch (error) {
                console.error('Error fetching professors:', error);
            }
        };

        fetchGroups();
        fetchProfessors();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a request to the backend to assign the selected professor to the selected group
            await axios.post('http://localhost:8080/api/affeter-professor', {
                group: selectedGroup,
                professor: selectedProfessor
            });
            alert('Professor assigned successfully');
        } catch (error) {
            console.error('Error assigning professor:', error);
            alert('Error assigning professor');
        }
    };

    return (
        <div className="content-body">
            <div className="container">
                <h4>Affecter un encadrant à un groupe</h4>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Groupe">Groupe</label>
                    <select id="Groupe" name="Groupe" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
                        <option value="">Sélectionner un groupe</option>
                        {groups.map((group) => (
                            <option key={group.id} value={group.id}>{group.name}</option>
                        ))}
                    </select>
                    <label htmlFor="Professeur">Nom de Professeur</label>
                    <select id="Professeur" name="Professeur" value={selectedProfessor} onChange={(e) => setSelectedProfessor(e.target.value)}>
                        <option value="">Sélectionner un professeur</option>
                        {professors.map((professor) => (
                            <option key={professor.id} value={professor.id}>{professor.name}</option>
                        ))}
                    </select>
                    <button type="submit">Confirmer</button>
                </form>
            </div>
        </div>
    );
}

export default AffecterEncadRespo;
