import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function StudentRow({ student, onAccept }) {
  return (
    <tr>
      <td>{student.nom}</td>
      <td>{student.etprenom}</td>
      <td>{student.adressEmail}</td>
      <td>
        {student.accepted ? (
          'Accepted'
        ) : (
          <button className='btn-light icon-btn' onClick={() => onAccept(student.id)}><i class="bi bi-check-square"></i></button>
        )}
      </td>
    </tr>
  );
}

export default StudentRow;
