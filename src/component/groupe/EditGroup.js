import React from 'react'

function EditGroup() {
  return (
    <div>
          return (
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
                                                <tr className="tr_table  zero-configuration">
                                                    <th>Le Nom</th>
                                                    <th>Le prenom</th>
                                                    <th>Email</th>
                                                    <th>Code Apogée</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Assia</td>
                                                    <td>EL BOUSSANI</td>
                                                    <td>ASSIA@gmail</td>
                                                    <td>2100000</td>
                                                    <td> <button className="btn btn-danger"><i className="bi bi-trash"></i></button></td>

                                                </tr>
                                                <tr>
                                                    <td>Rofaydae</td>
                                                    <td>Alasely</td>
                                                    <td>Rofaydae@gmail.com</td>
                                                    <td>2100000</td>
                                                    <td> <button className="btn btn-danger"><i className="bi bi-trash"></i></button></td>
                                                </tr>
                                                <tr>
                                                    <td>Doha</td>
                                                    <td>Drissi</td>
                                                    <td>Doha@gmail.com</td>
                                                    <td>2100000</td>
                                                    <td> <button className="btn btn-danger"><i className="bi bi-trash"></i></button></td>

                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                            <div className="input-group icons">
                                <div className="input-group-prepend">
                                    <span className="input-group-text bg-transparent border-0 pr-2 pr-sm-3" id="basic-addon1"><i className="mdi mdi-magnify"></i></span>
                                </div>
                                <input type="search" className="form-control" placeholder="chercher" aria-label="Search Dashboard" />
                                <div className="drop-down animated flipInX d-md-none">
                                    <form action="#">
                                        <input type="text" className="form-control" placeholder="Search" />
                                    </form>
                                </div>
                            </div>
                            <table className="table table-striped table-hover mt-3 text-center table-bordered">


                                <tbody id="data">

                                    <tr>
                                        <td>Tiger Nixonfe</td>
                                        <td>System Architect</td>
                                        <td>7678</td>
                                        <td> <button className="btn btn-success"><i className="bi bi-check-square"></i></button></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default EditGroup