// FiliereRow.js
import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

function FiliereRow(props) {
    return props.stateFiliere.map((filiere, index) => (
        <tr key={index}>
            <td>{filiere.nom}</td>
            <td>{filiere.description}</td>
            <td>{filiere.responsable}</td>
            <td>
                <Link to={`/edit/${filiere.idF}`} className="btn btn-sm btn-light">
                    <i className="fa fa-pen-to-square"></i>
                </Link>
            </td>
        </tr>
    ));
};

export default FiliereRow;