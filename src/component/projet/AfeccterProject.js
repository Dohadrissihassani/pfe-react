import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfSideBar from '../../SideBar/ProfSideBar';

function AfeccterProject() {
    const [groups, setGroups] = useState([]);
    const [projects, setProjects] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedProject, setSelectedProject] = useState('');

    useEffect(() => {
        axios.get('/api/groups')
            .then(response => setGroups(response.data))
            .catch(error => console.error('Error fetching groups:', error));

        axios.get('/api/projects')
            .then(response => setProjects(response.data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    const assignProject = (event) => {
        event.preventDefault();
        
        if (selectedGroup && selectedProject) {
            axios.post('/api/assign-project', {
                groupId: selectedGroup,
                projectId: selectedProject
            })
            .then(response => console.log('Project assigned:', response))
            .catch(error => console.error('Error assigning project:', error));
        } else {
            console.error('Both group and project must be selected');
        }
    };

    return (
        <div>
            <ProfSideBar />
            <div className="content-body">
                <div className="container">
                    <h4>Affecter projet à un groupe</h4>
                    <form onSubmit={assignProject}>
                        <label htmlFor="Groupe">Groupe :</label>
                        <select id="Groupe" name="Groupe" value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}>
                            <option value="">Select a group</option>
                            {groups.map(group => (
                                <option key={group.id} value={group.id}>{group.name}</option>
                            ))}
                        </select>
                        
                        <label htmlFor="Projet">Projet :</label>
                        <select id="Projet" name="Projet" value={selectedProject} onChange={e => setSelectedProject(e.target.value)}>
                            <option value="">Select a project</option>
                            {projects.map(project => (
                                <option key={project.id} value={project.id}>{project.name}</option>
                            ))}
                        </select>
                        
                        <button type="submit">Confirmer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AfeccterProject;
