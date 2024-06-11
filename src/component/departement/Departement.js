import React, { useState, useEffect } from 'react';
import DepartementRow from './DepartementRow';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdminSideBar from '../../SideBar/AdminSideBar';

function Departement() {

    const [stateDepartement, setDepartementState] = useState([]);

    useEffect(() => {
        getDepartement();
    }, []);

    const getDepartement = () => {
        axios.get("http://localhost:8080/departements/getdept/all")
            .then(response => {
                let Departement = response.data;
                setDepartementState(
                    Departement.map(d => ({
                        select: false,
                        id: d.id,
                        nom: d.nom,
                        description: d.description,
                        responsable: d.responsable

                    }))
                );

            })
            .catch(err => alert(err));
    };
    const sendTest = () => {

    }
    return (
        <div>

            <AdminSideBar />

            <div class="content-body">

                <div class="container-fluid mt-3">

                    <div class="row">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">La Liste des département</h4>
                                    <div class="active-member">
                                        <Link to="/creeDepartement" >
                                            <div class="row">
                                                <div class="col-7">
                                                    <div class="text-left">
                                                        <a href="creeDepartement.html"> <button >+Ajouter</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div class="table-responsive">
                                            <table class="table table-xs mb-0">
                                                <thead>
                                                    <tr class="tr_table  zero-configuration" style={{ color: "black" }}>

                                                        <th>département</th>
                                                        <th>description</th>
                                                        <th>Le responsable</th>


                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    <DepartementRow
                                                        stateDepartement={stateDepartement}
                                                        setDepartementState={setDepartementState} />


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







    )
}

export default Departement