import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentRow from './StudentRow';
import { Link } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';
import 'bootstrap-icons/font/bootstrap-icons.css';


function Student() {
    const [stateStudent, setStudentState] = useState([]);

    useEffect(() => {
        getStudent();
    }, []);

    const getStudent = () => {
        axios.get('http://localhost:8080/Etudiant/info')
            .then(response => {
                const students = response.data;
                setStudentState(students.map(student => ({
                    id: student.id,
                    nom: student.nom,
                    etprenom: student.etprenom,
                    adressEmail: student.adressEmail,
                    accepted: false
                })));
            })
            .catch(err => alert(err));
    };

    const acceptStudent = (id) => {
        axios.put('http://localhost:8080/Etudiants/accept', { ids: [id] })
            .then(response => {
                console.log(response.data);
                setStudentState(prevState =>
                    prevState.map(student =>
                        student.id === id ? { ...student, accepted: true } : student
                    )
                );
            })
            .catch(err => alert(err));
    };

    return (
        <>
    <AdminSideBar/>
    
      
      <div>
          <div className="content-body">

              <div className="container-fluid mt-3">

                  <div className="row">

                      <div className="col-lg-12">
                          <div className="card">
                              <div className="card-body">
                                  <h4 className="card-title">La Liste des Etudiants</h4>
                                  <div className="active-member">
                                  
                                      <div className="table-responsive">
                                      <table className="table table-xs mb-0">
                                                                <thead>
                                                                    <tr className="tr_table  zero-configuration">

                                                                        <th>Nom</th>
                                                                        <th>Prenom</th>
                                                                        <th>AdressEmail</th>
                                                                        <th>Approuver</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                  {stateStudent.map(student => (
                                                                        <StudentRow
                                                                            key={student.id}
                                                                            student={student}
                                                                            onAccept={acceptStudent}
                                                                        />
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

      </div>
    </>
                    );
}

                    export default Student;
