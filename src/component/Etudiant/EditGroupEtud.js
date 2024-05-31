import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed and imported
import EtudeSideBar from '../../SideBar/EtudeSideBar';

function EditGroupEtud() {
  const [stateGroupe, setGroupeState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadGroupe();
  }, []);

  const loadGroupe = async () => {
    try {
      const result = await axios.get('http://localhost:8080//groupe'); // Update with your backend endpoint
      setGroupeState(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:8080//membres/${id}`); // Update with your backend endpoint
      setGroupeState(stateGroupe.filter(member => member.id !== id));
    } catch (err) {
      alert('Failed to delete member: ' + err.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <EtudeSideBar />
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Mon Groupe</h4>
                  <div className="active-member">
                    <div className="table-responsive">
                      <table className="table table-xs mb-0">
                        <thead>
                          <tr className="tr_table zero-configuration">
                            <th>Le Nom</th>
                            <th>Le prénom</th>
                            <th>Email</th>
                            <th>Code Apogée</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {stateGroupe.map(member => (
                            <tr key={member.id}>
                              <td>{member.nom}</td>
                              <td>{member.prenom}</td>
                              <td>{member.email}</td>
                              <td>{member.codeApogee}</td>
                              <td>
                                <button className="btn btn-light" onClick={() => deleteMember(member.id)}>
                                  <i className="bi bi-trash"></i>
                                </button>
                                <Link to={`/editCompEtudiant/${member.id}`}>
                                  <button className="btn btn-light">
                                    <i className="fa-regular fa-pen-to-square"></i>
                                  </button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>                        
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditGroupEtud;
