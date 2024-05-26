import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentRow from './StudentRow';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AdminSideBar from "../../SideBar/AdminSideBar";

function ApprouverEtud() {
  const [stateStudent, setStudentState] = useState([]);

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = () => {
    axios.get("http://localhost:8080/Etudiants")
      .then(response => {
        let students = response.data;
        setStudentState(
          students.map(student => ({
            select: false,
            id: student.id,
            nom: student.nom,
            prenom: student.prenom,
            email: student.email
          }))
        );
      })
      .catch(err => alert(err));
  };

  const AcceptStudentByIds = () => {
    let selectedIds = stateStudent.filter(student => student.select).map(student => student.id);

    if (selectedIds.length > 0) {
      axios.put("http://localhost:8080/Etudiants/accept", { ids: selectedIds })
        .then(response => {
          console.log(response.data);
          getStudent();
        })
        .catch(err => alert(err));
    } else {
      alert("No students selected.");
    }
  };

  const handleSelectAll = (e) => {
    let value = e.target.checked;
    setStudentState(
      stateStudent.map(student => {
        student.select = value;
        return student;
      })
    );
  };

  const handleCheckboxChange = (id) => {
    setStudentState(
      stateStudent.map(student => {
        if (student.id === id) {
          student.select = !student.select;
        }
        return student;
      })
    );
  };

  return (
    <>
      <AdminSideBar />
      <div className="content-body">
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Liste des Étudiants</h4>
                  <button
                    className="btn btn-info"
                    onClick={AcceptStudentByIds}>
                    Approuver
                  </button>
                  <div className="table-responsive">
                    <table className="table table-xs mb-0">
                      <thead>
                        <tr>
                          <th>
                            <input
                              type="checkbox"
                              onChange={handleSelectAll}
                            />
                          </th>
                          <th>Nom</th>
                          <th>Prénom</th>
                          <th>Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {stateStudent.map(student => (
                          <StudentRow
                            key={student.id}
                            student={student}
                            onCheckboxChange={handleCheckboxChange}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="row" style={{ float: 'right' }}>
                    <div className="col-12 text-center pagination-container">
                      <button className="btn btn-info mx-1 icon-btn btn-previous"><i class="bi bi-arrow-bar-left"></i></button>
                      <button className="btn btn-info mx-1 icon-btn btn-next"><i class="bi bi-arrow-bar-right"></i></button>
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

export default ApprouverEtud;
 