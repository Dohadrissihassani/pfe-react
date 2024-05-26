import React from 'react';

function StudentRow({ student, onCheckboxChange }) {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={student.select}
          onChange={() => onCheckboxChange(student.id)}
        />
      </td>
      <td>{student.nom}</td>
      <td>{student.prenom}</td>
      <td>{student.email}</td>
    </tr>
  );
}

export default StudentRow;
