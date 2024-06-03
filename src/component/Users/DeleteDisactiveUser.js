import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminSideBar from '../../SideBar/AdminSideBar';

function DeleteDisactiveUser() {
    const [stateUsers, setUsersState] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        axios
            .get("http://your-api-url/users")
            .then(data => {
                let users = data.data;
                setUsersState(
                    users.map(d => {
                        return {
                            select: false,
                            id: d.id,
                            nom: d.nom,
                            prenom: d.prenom,
                            email: d.email
                        };
                    })
                );
            })
            .catch(err => alert(err));
    };

    const deleteUsersByIds = () => {
        let arrayIds = [];
        stateUsers.forEach(d => {
            if (d.select) {
                arrayIds.push(d.id);
            }
        });

        axios
            .delete(`http://your-api-url/users`, { data: { ids: arrayIds } })
            .then(data => {
                console.log(data);
                getUsers(); // Refresh the user list after deletion
            })
            .catch(err => alert(err));
    };

    const deactivateUser = async (userId) => {
        try {
            const response = await axios.put(`http://your-api-url/users/${userId}/deactivate`);
            console.log(response.data);
            getUsers(); // Refresh the user list after deactivation
        } catch (error) {
            console.error("There was an error deactivating the user!", error);
        }
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
                                    <h4 className="card-title">Liste d'utilisateurs</h4>
                                    <div className="active-member">
                                        <div className="table-responsive">
                                            <table className="table table-xs mb-0">
                                                <thead>
                                                    <tr className="tr_table zero-configuration">
                                                        <th>Nom</th>
                                                        <th>Prénom</th>
                                                        <th>Email</th>
                                                        <th>Operations</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {stateUsers.map((user, index) => (
                                                        <tr key={user.id}>
                                                            <td>{user.nom}</td>
                                                            <td>{user.prenom}</td>
                                                            <td>{user.email}</td>
                                                            <td>
                                                                <label className="switch">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={user.select}
                                                                        onChange={() => {
                                                                            const newUsers = [...stateUsers];
                                                                            newUsers[index].select = !newUsers[index].select;
                                                                            setUsersState(newUsers);
                                                                        }}
                                                                    />
                                                                    <span className="slider round"></span>
                                                                </label>
                                                                <button
                                                                    className="btn btn-light"
                                                                    onClick={() => deactivateUser(user.id)}
                                                                >
                                                                    <i className="fa fa-power-off"></i>
                                                                </button>
                                                                <button
                                                                    className="btn btn-light"
                                                                    onClick={deleteUsersByIds}
                                                                >
                                                                    <i className="fa fa-trash"></i>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    <tr>
                                                        <td>nom</td>
                                                        <td>prenom</td>
                                                        <td>nom@gmail</td>
                                                        <td> <button
                                                            className="btn btn-light icon-btn"

                                                        >
                                                            <i className="fa fa-power-off"></i>
                                                        </button>
                                                            <button
                                                                className="btn btn-light icon-btn"

                                                            >
                                                                <i className="fa fa-trash"></i>
                                                            </button></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <nav aria-label="Page navigation example" style={{ float: 'right' }}>
                                                <ul className="pagination">
                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Previous">
                                                            <span aria-hidden="true">&laquo;</span>
                                                            <span className="sr-only">Previous</span>
                                                        </a>
                                                    </li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>

                                                    <li className="page-item">
                                                        <a className="page-link" href="#" aria-label="Next">
                                                            <span aria-hidden="true">&raquo;</span>
                                                            <span className="sr-only">Next</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
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

export default DeleteDisactiveUser;
